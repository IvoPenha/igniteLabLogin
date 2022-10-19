import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputDivProps{
    children: ReactNode;
}

function TextInputDiv(props: TextInputDivProps){
    return(
    <div
    className={clsx(
        '  flex rounded px-4 py-3 bg-gray-800 outline-none focus:ring-2  ring-cyan-300 w-96')}>
        {props.children}
    </div>
    )
}

function TextInputIcon(){

}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{} 

function TextInputInput(props: TextInputProps){
    return(

        <input  className={clsx(' flex-1 bg-transparent outline-none text-gray-100 text-xs placeholder:text-gray-200' )}
        {...props}
        />
    )
} 
export const TextInput ={

    Div: TextInputDiv,
    Input: TextInputInput,
}