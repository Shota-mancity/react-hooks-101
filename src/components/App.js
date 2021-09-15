import React, {useEffect, useState } from "react";

const App = props => {
  const [state, setState] = useState(props);
  const reset=()=>setState(props)
  const {name, price}=state

  useEffect(()=>{
    console.log("useEffect is invoked")
  })
  useEffect(()=>{
    console.log("This is like componentDidMount")
  }, [])
  useEffect(()=>{
    console.log("This callback is for name only")
  }, [name])

  const renderPeriod=()=>{
    console.log("renderPeriod renders period")
    return "。"
  }

  return (
    <>
      <p>
        現在の{name}は{price}円です{renderPeriod()}
      </p>
      <button onClick={() => setState({...state, price:price + 1})}>+1</button>
      <button onClick={() => setState({...state, price:price - 1})}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
};

// 初期値が外部から与えられると仮定
App.defaultProps = {
  name: "",
  price: 1000
};

export default App;
