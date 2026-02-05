import { useAppDispatch, useAppSelector } from "../hooks"; // typed hooks
import { decrement, increment, incrementBy, delayIncrement } from "../slices/counterSlice";

// 5. Use defined slices in the React code

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value); // without typed hooks state is of type "unknown"
  const dispatch = useAppDispatch();

  return (
    <>
      Counter: {count}
      <div>
        <button onClick={() => dispatch(increment())}>Add</button>
        <button onClick={() => dispatch(decrement())}>Subtract</button>
        <button onClick={() => dispatch(incrementBy(5))}>Add 5</button>
        <button onClick={() => dispatch(delayIncrement())}>Delay Update</button>
      </div>
    </>
  );
};

export default Counter;
