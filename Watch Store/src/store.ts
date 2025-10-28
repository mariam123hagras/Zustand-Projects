// import {create} from 'zustand'
// type CounterStore={
//     count:number;
//     increment:()=>void;
//     decrement:()=>void;
// }
//  export const useCounter=create<CounterStore>((set)=>({
//     count:0,

//     increment:()=>set(state=>({count:state.count+1})),
//     decrement:()=>set(state=>({count:state.count-1}))
    

// }))


//////////////////////////////////////
// Recipe book
// import {create} from 'zustand'
// interface Recipe{
//     id:number;
//     name:string;
//     ingredients:string[];
//     instructions:string;
// }

// interface RecipeStore{
//     recipes:Recipe[];
//     addRecipe:(recipe:Recipe)=>void;
//     removeRecipe:(id:number)=>void;
// }

//  export const useStore=create<RecipeStore>((set)=>({
//     recipes:[],
//     addRecipe:(recipe)=>set((state)=>({recipes:[...state.recipes,recipe]})),
//    removeRecipe:(id)=>set((state)=>({recipes:state.recipes.filter((recipe)=>recipe.id!==id)})),

// }))

////////////////////

//expense tracker
// import {create} from 'zustand';
// interface Expense{
//     id:number;
//     description:string;
//     amount:number;
// }

// interface ExpenseStore{
//     expenses:Expense[];
//     addExpense:(expense:Expense)=>void
//     removeExpense:(id:number)=>void
// }

// export const useStore=create<ExpenseStore>((set)=>({
//  expenses:[],
//   addExpense:(expense)=>set((state)=>({expenses:[...state.expenses,expense]}))  ,
//   removeExpense:(id)=>set((state)=>({expenses:state.expenses.filter((expense)=>(expense.id!==id))}))
// }))

////////////////////////////////////////////

//Password generator

// import {create} from "zustand"
// type PasswordState={
//     length:number;
//     includeNumbers:boolean;
//     includeSymbols:boolean;
//     includeLowerCase:boolean;
//     includeUpperCase:boolean;
//     generatedPassword:string;
//     setLength:(length:number)=>void;
//     toggleNumbers:()=>void;
//     toggleSymbols:()=>void;
//     toggleUppercase:()=>void;
//     toggleLowercase:()=>void;
//     generatePassword:()=>void;

// }
// const usePasswordStore=create<PasswordState>((set)=>({
// length:12,
// includeNumbers:true,
// includeSymbols:true,
// includeLowerCase:true,
// includeUpperCase:true,
// generatedPassword:'',
// setLength:(length)=>set({length}),
// toggleNumbers:()=>set(state=>({includeNumbers:!state.includeNumbers})),
// toggleSymbols:()=>set(state=>({includeSymbols:!state.includeSymbols})),
// toggleUppercase:()=>set(state=>({includeUpperCase:!state.includeUpperCase})),
// toggleLowercase:()=>set(state=>({includeLowerCase:!state.includeLowerCase})),
// generatePassword:()=>set(state=>{
//     const numbers='0123456789';
//     const symbols='!@#$%^&*()_+{}[]';
//     const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercase='abcdefghijklmnopqrstuvwxyz';
//     let characters='';
//     if(state.includeNumbers) characters+=numbers;
//     if(state.includeSymbols) characters+=symbols;
//     if(state.includeLowerCase) characters+=lowercase;
//     if(state.includeUpperCase) characters+=uppercase;
//     let password='';

//     for(let i=0;i<state.length;i++){
//         password+=characters[Math.floor(Math.random()*characters.length)]


//     }
//     return {generatedPassword:password}
    
    

// })

// }))

// export default usePasswordStore


//////////////////////////////////////////

//Notes App
// import {create} from 'zustand';

// interface Note{
//     id:Number;
//     title:string;
//     content:string;
// }

// interface NoteStore{
//     notes:Note[];
//     addNote:(note:Note)=>void;
//     updateNote:(id:number,updateNote:Partial<Note>)=>void;
//     removeNote:(id:number)=>void;
// }

// const useStore=create<NoteStore>((set)=>({
//     notes:[],
//     addNote:(note)=>set((state)=>({notes:[...state.notes,note]})),
//     updateNote:(id,updateNote)=>set((state)=>({
//         notes:state.notes.map((note)=>note.id===id?{...note,...updateNote}:note)
//     })),
//     removeNote:(id)=>set((state)=>({
//         notes:state.notes.filter((note)=>note.id!==id)
//     }))

// }))
// export default useStore;


/////////////////////////////////////////////////
//Watch store

import { create } from "zustand";

interface ProductState {
  productStates: Record<
    string,
    {
      currentImage: string;
      hover: boolean;
    }
  >;
  setProductImage: (productId: string, image: string) => void;
  setProductHover: (productId: string, hover: boolean) => void;
  initializeProduct: (productId: string, initialImage: string) => void;
}

interface FilterState {
  selectedCountries: string[];
  selectedColors: string[];
  selectedPriceRange: { min: number; max: number } | null;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
  clearFilters: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  productStates: {},
  setProductImage: (productId, image) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { ...state.productStates[productId], currentImage: image },
      },
    })),
  setProductHover: (productId, hover) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { ...state.productStates[productId], hover },
      },
    })),
  initializeProduct: (productId, initialImage) =>
    set((state) => ({
      productStates: {
        ...state.productStates,
        [productId]: { currentImage: initialImage, hover: false },
      },
    })),
}));

export const useFilterStore = create<FilterState>((set) => ({
  selectedCountries: [],
  selectedColors: [],
  selectedPriceRange: null,
  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  setSelectedColors: (colors) => set({ selectedColors: colors }),
  setSelectedPriceRange: (range) => set({ selectedPriceRange: range }),
  clearFilters: () =>
    set({
      selectedCountries: [],
      selectedColors: [],
      selectedPriceRange: null,
    }),
}));