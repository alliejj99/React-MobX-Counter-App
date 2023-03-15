### React MobX Counter app

- observer HoC
  observer HoC는 렌더링 중에 사용되는 모든 Observale에 React 구성요소를 자동으로 구독합니다. 결과적으로 관련 observable 항목이 변경되면 컴포넌트가 자동으로 다시 렌더링 합니다. 또란 관련 변경 사항이 없을 때 컴포넌트에서 액세스할 수 있지만 실제로 읽지 않는 Observable은 다시 렌더링 되지 않습니다.  
  ```bash
    $ npm install mobx-react
  ```  

  ```jsx
  import { observer } from "mobx-react";

  const App = observer((props) => {
    const { myCounter } = props;

    return (
      <div className="App">
        카운트: {myCounter.count}
        <button onClick={() => myCounter.increase()}>+</button>
        <button onClick={() => myCounter.decrease()}>-</button>
      </div>
    );
  });

  export default App;
  ```  

#### npm installs
```bash
  $ npm install mobx
```

```bash
  $ npm install mobx-react
```