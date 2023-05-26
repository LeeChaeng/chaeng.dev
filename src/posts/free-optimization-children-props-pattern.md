---
title: 'children props pattern으로 최적화하기'
createdAt: '2023-05-26T07:36:46.730Z'
summary: ''
---

React의 아주 간단하지만 쉽게 최적화에 비용이 들지 않는 Children props pattern에 대해 알고 계신가요? 간단한 개념이지만 알고 사용하고 계신 분들이 많지 않을거라 생각합니다.

## children props pattern이란?
```js
function BookList() {
    return (
        <div>
            <BookItem />
            <BookItem />
            <BookItem />
        </div>
    );
}

function Root() {
    return (
        <div>
            <BookList />
        </div>
    );
}
```

위 코드에서 `BookItem`은 `BookList`에서 사용되지만, `BookList`와 **어떠한 상호작용도 하고 있지 않습니다**. 이런 경우 children props pattern을 활용하여 BookList가 리렌더링 되더라도 `BookItem`은 리렌더링되지 않도록 최적화를 진행할 수 있습니다.



```js
function BookList({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

function Root() {
  return (
    <div>
      <BookList>
        <BookItem />
        <BookItem />
        <BookItem />
      </BookList>
    </div>
  );
}

```

변경된 코드를 살펴보자면 기존과 다르게 `BookList`가 children을 받을 수 있게 되었고, `Root`에서 `BookList`를 사용할 수 있게 변경되었습니다. 이 상황에서 children은 하나의 변수로써 작용이 되어서 BookList에서 내부 로직이 변경되어 렌더링이 트리거될 때 BookItem은 리렌더되지 않습니다. 

children props pattern은 이렇게 부모 컴포넌트와 자식 컴포넌트가 상호작용하고 있지 않을 때 상위 레벨로 자식 컴포넌트를 올려서 부모 컴포넌트에서 children으로 활용하는 패턴을 말합니다. 

간단하지만 컴포넌트에 React의 memo를 사용하지 않고도 memo를 사용한 것과 같은 효과를 낼 수 있게 해줍니다. props의 이름이 children이 아니더라도 상관 없습니다. `A`이거나 `B`여도 children props pattern을 활용한 셈이 됩니다.  


최근 살펴본 Next.js의 layout 구조에도 이런 children props pattern을 활용하여 최적화하고 있는 것을 확인할 수 있습니다. 
 
```js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

layout이 리렌더 되어도, 자식 요소는 리렌더되지 않게 최적화가 가능합니다. 

## 마무리하며
모든 최적화에는 트레이드오프가 존재하는데 children props pattern을 사용할 수 있는 상황이라면 최대한 사용하여 트레이드오프를 최소화하는 방향으로 작성되면 좋을 것 같습니다. 
