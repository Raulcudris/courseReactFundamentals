import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () =>{
    const {  counter } = useCounter();

    return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr/>

        <button className="btn btn-warning">+1</button>
        <button className="btn btn-success">Reset</button>
        <button className="btn btn-danger">-1</button>

    </>
  )
}
