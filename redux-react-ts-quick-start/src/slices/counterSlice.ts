import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterState } from "../interfaces/counter.interface";
import { RootState } from "../store";

// 3. Create slice, it will require: name, initialState, one or more reducers. Export its reducer.
// Without Redux Toolkit, Redux requires immutable approach for actions: {...prevState, prop: value}, but toolkit does it for us, so we just do the mutable part (prop: value)
// This is opinionated, so the only prop that is creative is "counter"

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const selectCount = (state: RootState) => state.counter.value;

export const delayIncrement = () => (dispatch: any, getState: any) => {
  const currVal = selectCount(getState());
  if (currVal >= 5) {
    setTimeout(() => dispatch(incrementBy(26)), 1000);
  } else {
    alert("Still under 5!");
  }
};

export const { increment, decrement, incrementBy } = counterSlice.actions; // these are automatically created based on reducer defined actions
export default counterSlice.reducer;
