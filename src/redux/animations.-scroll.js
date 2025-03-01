import { createSlice } from "@reduxjs/toolkit";

const sliceAnimationScroll = createSlice({
   name: "animationScroll",
   initialState: {
      animationExitBottom: false,
      animationExitTop: false,
   },
   reducers: {
      scrollTop(state, action) {
         return {
            ...state,
            animationExitBottom: true,
         };
      },
      scrollBottom(state, action) {
         return {
            ...state,
            animationExitTop: true,
         };
      },
      resetAnimation(state, action) {
         return {
            animationExitBottom: false,
            animationExitTop: false,
         };
      },
   },
});

export default sliceAnimationScroll.reducer;
export const { scrollTop, scrollBottom, resetAnimation } =
   sliceAnimationScroll.actions;

export const useAnimations = (state) => {
   return state.animationScroll;
};
