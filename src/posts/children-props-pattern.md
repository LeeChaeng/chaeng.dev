---
title: 'Children Props Pattern'
createdAt: '2023-05-29T06:12:58.846Z'
summary: 'React에서 컴포넌트를 나누는 방법에는 여러가지 방법들이 존재하고, 개발자마다 작성하는 방법 또한 다를것이라고 생각한다. 개인적으로 컴포넌트를 나눌때 재사용과 리렌더링의 관점에서 작성하곤 한다.'
coverImg: 'childrenPropsPattern-thumbnail.webp'
---

React에서 컴포넌트를 나누는 방법에는 여러가지 방법들이 존재하고, 개발자마다 작성하는 방법 또한 다를것이라고 생각한다. 개인적으로 컴포넌트를 나눌때 재사용과 리렌더링의 관점에서 작성하곤 한다. 리렌더링 관점에서 컴포넌트를 작성하는 방법 중
최근에 children props pattern에 대해 알게 되었는데, 아주 간단하고 최적화에 비용이 들지 않는 개념이지만 알고 있는 사람들이 많지 않은 것 같아 소개하는 글을 작성하려 한다.

## 퀴즈: 이 컴포넌트는 리렌더 될까요?

```js
import { ReactNode, useState } from 'react';

const getRandomColor = () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Item = () => {
  return <li>Item</li>;
};

const List = ({ children }: { children: ReactNode }) => {
  const [borderColor, setBorderColor] = useState('black');

  return (
    <div
      style={{
        borderWidth: 3,
        borderStyle: 'solid',
        borderColor,
      }}
    >
      <ul>{children}</ul>

      <button onClick={() => setBorderColor(getRandomColor())}>
        Change border color
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <List>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </List>
    </main>
  );
};

export default Home;
```

위의 작성된 코드는 `List` 컴포넌트가 `Item` 컴포넌트를 children props로 받아서 보여준다. 그리고 `List` 컴포넌트에 있는 Change border color라는 버튼을 클릭하게 되면 `List` 컴포넌트의 border 값이 랜덤으로 변경되며 `List` 컴포넌트가 리렌더링되게 된다. 

자 그렇다면, `List` 컴포넌트에 있는 Change border color 버튼을 클릭하게 되면 `Item` 컴포넌트는 리렌더링 될까?

정답을 생각했다면 아래로 스크롤을 내려보자.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

정답은

.

.

.

.

.

.

.

.

.

.

.

.

.

.

`List` 컴포넌트는 리렌더되어도, `Item` 컴포넌트는 리렌더되지 않는다. 

처음에 이 사실을 알게 되었을 때 매우 당황스러웠다. **부모가 리렌더되면 자식이 리렌더된다.** 라는 사실을 거의 React를 처음 배울 때부터 공식처럼 외우고 있었기 때문이다. 

하지만 차분히 생각해보니 당연했다. React가 생각하기에 Item 컴포넌트는 props로써 변하지 않았기 때문에 리렌더하지 않는 것이다. 그리고 이러한 패턴을 children props pattern이라고 부른다. 

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

위 코드에서 `BookItem`은 `BookList`에서 사용되지만, `BookList`와 **어떠한 직접적인 상호작용을 하고 있지 않다**. 이런 경우 children props pattern을 활용하여 `BookList`가 리렌더링 되더라도 `BookItem`은 리렌더링되지 않도록 코드를 변경할 수 있다.



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

변경된 코드를 살펴보자면 기존과 다르게 `BookList`가 children props를 받을 수 있게 되었고, `Root`에서 `BookList`를 사용할 수 있게 변경되었다. 이 상황에서 children은 하나의 변수로써 작용하며 `BookList`에서 내부 로직이 변경되어 렌더링이 트리거될 때 `BookItem`은 리렌더되지 않는다. 

children props pattern은 이렇게 부모 컴포넌트와 자식 컴포넌트가 상호작용하고 있지 않을 때 상위 레벨로 자식 컴포넌트를 올려서 부모 컴포넌트에서 children으로 활용하는 패턴을 말한다. 

props의 이름이 children이 아니더라도 상관 없다. `A`이거나 `B`여도 children props pattern을 활용한 셈이 된다.  


최근 나온 Next.js 13의 app layout 구조에도 이런 children props pattern을 활용하여 최적화하고 있는 것을 확인할 수 있다. 
 
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

layout이 리렌더 되어도, 자식 요소는 리렌더되지 않게 최적화가 되어있는 것을 확인할 수 있다. 

## 마무리하며
모든 최적화에는 트레이드오프가 존재하는데 children props pattern을 사용할 수 있는 상황이라면 최대한 사용하여 트레이드오프를 최소화하는 방향으로 작성되면 좋을 것 같다. 
