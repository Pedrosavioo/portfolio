import { configureStore } from "@reduxjs/toolkit";
import sliceCurrentSection from "./current-section";
import sliceAnimationScroll from "./animations.-scroll";

const store = configureStore({
   reducer: {
      currentSection: sliceCurrentSection,
      animationScroll: sliceAnimationScroll,
   },
});

export default store;
