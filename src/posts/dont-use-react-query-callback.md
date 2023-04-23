---
title: 'useQuery callback 함수의 사이드이펙트'
createdAt: '2023-04-23T10:00:14.858Z'
summary: 'react query의 useQuery와 useMutation을 사용해 본 적 있는가? 그렇다면 한번쯤은 onSuccess나 onError와 같은 콜백들을 사용해봤을 것이다. 개인적으로 useQuery의 onSuccess를 사용하는 것을 피하려고 한다.'
coverImg: 'useQuery-thumbnail.webp'
---

![useQuery callback 함수의 사이드이펙트](https://images.chaeng.dev/post/useQuery-thumbnail.webp)


react query의 useQuery와 useMutation을 사용해 본 적 있는가? 그렇다면 한번쯤은 onSuccess나 onError와 같은 콜백들을 사용해봤을 것이다. 
개인적으로 useQuery의 onSuccess를 사용하는 것을 피하려고 한다. 그 이유는 onSuccess 콜백을 사용하다가 예상하지 못한 버그 때문에 몇시간 정도를 날린 적이 있기 때문이다.
찾아보니 나와 같은 사례가 많은 것 같아서 사이드 이펙트를 정리해보려 글을 작성한다. 


## 첫번째 사이드 이펙트: onSuccess의 불필요한 렌더링 업데이트 트리거
```js
export function useTodos() {
  const [todoCount, setTodoCount] = React.useState(0)
    
  const { data: todos } = useQuery({
    queryKey: ['todos', 'list'],
    queryFn: fetchTodos,
    //😭 please don't
    onSuccess: (data) => {
      setTodoCount(data.length)
    },
  })

  return { todos, todoCount }
}
```
위의 예시를 보면 화면 렌더링이 3번이나 트리거되게 된다. 
1. 처음 컴포넌트가 마운트 되었을 시점에 todos의 값이 undefined인 채로 렌더링
2. useQuery api를 통해서 성공적으로 데이터를 받아왔다면, 해당되는 데이터 값을 사용하여 렌더링
3. onSuccess 콜백으로 setState가 실행되어 data.length가 변경되어 렌더링

의미없는 3번째 렌더링이 한 번 더 추가적으로 진행되는 것을 볼 수 있다. 왜냐하면 data의 업데이트와 state 업데이트가 동기적으로 이루어지지 않아서이다. 
이 코드는 그렇다면 아래와 같이 고칠 수 있다. 
```js
export function useTodos() {
  const { data: todos } = useQuery({
    queryKey: ['todos', 'list'],
    queryFn: fetchTodos,
  })
    
  // ✨
  const todoCount = todos?.length ?? 0

  return { todos, todoCount }
}
```

## 두번째 사이드 이펙트: callback의 실행을 보장할 수 없다는 점

쿼리 데이터가 fresh 상태인 경우, 데이터는 캐시에서 서빙된다. 그렇게 되면 컴포넌트가 마운트 될 때 `onSuccess` callback 또한 실행되지 않게 되는데, 대부분의 경우 이 상황이 혼란을 발생시킬 수 있다. 
당연히 데이터는 화면에서 표현되기 때문에 useQuery를 통해 api에서 가져온 값이라고 인지할 가능성이 크다. 

그리고 사실 상태와 react-query의 상태를 동기화하여 사용하는 것은 [안티패턴](https://github.com/TanStack/query/issues/3784#issuecomment-1183192801)으로 간주되곤 한다. 이렇게 사용하는 상황 또한 사이드 이펙트를 일으킨다. 

## 세번째 사이드 이펙트: suspense와 함께 사용시 callback의 setState가 동작 안함(처럼 보임)

```js
<Suspense fallback={<Loader />}>
	<Component />
</Suspense>
```

Component 내부에서 useQuery가 `suspense: true`로 설정되어 있고, onSuccess callback에서 state를 설정해주고 있다면 아래와같은 라이프사이클을 가지게 된다. 

```
1. Suspense Mount
2. Component Mount
3. Component의 useQuery 실행
4. Loader Mount, Component unMount
5. api 성공시 onSuccess callback 실행(setState)
6. Loader unMount, Component Mount
```

Component에서 setState된 값을 통해서 설정된 state값이 보일것이라고 추론하겠지만, 실제로는 그렇지 않고, 5번에서 실행된 setState는 이미 unMount된 컴포넌트의 state를 조작한 셈이 되기 때문에 UI에서 변경된 값을 볼 수는 없을 것이다.   

## react query v5에서는 사라지게 되는 useQuery callback 함수들
그래서 react-query v5에서는 useQuery의 callback들이 사라진다고 한다. (useMutation은 아님!)

자 그렇다면 어쩔 수 없이 state가 쿼리의 onSuccess에 의존해야 하는 상황이 온다면 어떻게 처리해야 할까? 

정답은 useEffect에 있다.

```js
export function useTodos(filters) {
  const { dispatch } = useDispatch()

  const query = useQuery({
    queryKey: ['todos', 'list', { filters }],
    queryFn: () => fetchTodos(filters),
    staleTime: 2 * 60 * 1000,
  })

  useEffect(() => {
    if (query.data) {
      dispatch(setTodos(query.data))
    }
  }, [query.data])

  return query
}
```

위 코드와 같이 dependecy array에 data를 추가해서 useEffect 내부에서 처리해주면 어쩔 수 없이 state를 셋팅해야 하는 상황에서 사이드이펙트 없이 사용할 수 있다.

## 마무리하며
useQuery를 사용하면서 사용할 수 있는 onSuccess, onError, onSettled와 같은 콜백들의 사이드 이펙트들을 알아봤다. 
결국 react-query의 v5에서는 이런 콜백들이 사라져서 사이드 이펙트들을 마주할 일을 더 적어지겠지만, 현재 사용하고 있다면 breaking change로 인해 리팩토링을 진행해야 할 것이다. 몇몇 코드에서 onSuccess를 덜어내고 있는데 훨씬 더 좋은 코드가 작성되는 것 같아서 미리 리팩토링을 진행하는 것도 추천한다. 👍  

## Reference

- [Breaking React Query's API on purpose | TkDodo's blog](https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose)
- [setState in onSuccess is not working first time with suspense | Github](https://github.com/TanStack/query/issues/3784#issue-1296978356)
