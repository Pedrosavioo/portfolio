import { createSlice } from "@reduxjs/toolkit";

const sliceCurrentSection = createSlice({
   name: "currentSection",
   initialState: 0,
   reducers: {
      nextSection(state, action) {
         console.log(`state anterior: ${state}`);

         // Adicionado um if para que o estado não ultrapasse o valor 4, que é o valor máximo do estado.
         if (state === 4) {
            return state;
         }

         // Adicionado um incremento de 1 para o valor do estado, para que seja possível controlar as sessões e o carrossel.
         if (state < 3 || state === 3.2) {
            if (state === 3.2) {
               return 4;
            }
            return state + 1;
         }

         // Adicionado um incremento de 0.1 para o valor do estado, para que seja possível controlar o carrossel com mais precisão.
         if (state >= 3 && state < 3.2) {
            return state + 0.1;
         }
      },
      previousSection(state, action) {
         console.log(`state anterior: ${state}`);

         // Estado não deve ser menor que 0, evitar causar erros no layout.
         if (state === 0) {
            return state;
         }

         // Adicionando decremento de 1 décimo para o valor do estado, para que seja possível controlar o carrossel com mais precisão.
         if (state > 3 && state <= 3.2) {
            return state - 0.1;
         }

         if (state <= 3) {
            return state - 1;
         }

         // Para página além do carousel
         if (state === 4) {
            return 3.2; // Valor máximo do carrousel
         }
      },
      selectSection(state, action) {
         return Number(action.payload);
      },
   },
});

export default sliceCurrentSection.reducer;
export const { nextSection, previousSection, selectSection } =
   sliceCurrentSection.actions;

export const useCurrentSection = (state) => {
   return state.currentSection;
};
