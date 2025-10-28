

import {create} from "zustand"
type PasswordState={
    length:number;
    includeNumbers:boolean;
    includeSymbols:boolean;
    includeLowerCase:boolean;
    includeUpperCase:boolean;
    generatedPassword:string;
    setLength:(length:number)=>void;
    toggleNumbers:()=>void;
    toggleSymbols:()=>void;
    toggleUppercase:()=>void;
    toggleLowercase:()=>void;
    generatePassword:()=>void;

}
const usePasswordStore=create<PasswordState>((set)=>({
length:12,
includeNumbers:true,
includeSymbols:true,
includeLowerCase:true,
includeUpperCase:true,
generatedPassword:'',
setLength:(length)=>set({length}),
toggleNumbers:()=>set(state=>({includeNumbers:!state.includeNumbers})),
toggleSymbols:()=>set(state=>({includeSymbols:!state.includeSymbols})),
toggleUppercase:()=>set(state=>({includeUpperCase:!state.includeUpperCase})),
toggleLowercase:()=>set(state=>({includeLowerCase:!state.includeLowerCase})),
generatePassword:()=>set(state=>{
    const numbers='0123456789';
    const symbols='!@#$%^&*()_+{}[]';
    const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase='abcdefghijklmnopqrstuvwxyz';
    let characters='';
    if(state.includeNumbers) characters+=numbers;
    if(state.includeSymbols) characters+=symbols;
    if(state.includeLowerCase) characters+=lowercase;
    if(state.includeUpperCase) characters+=uppercase;
    let password='';

    for(let i=0;i<state.length;i++){
        password+=characters[Math.floor(Math.random()*characters.length)]


    }
    return {generatedPassword:password}
    
    

})

}))

export default usePasswordStore


