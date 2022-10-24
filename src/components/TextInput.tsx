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
        '  flex rounded px-4 py-4  focus-within:ring ring-cyan-300  bg-gray-800 outline-none  w-[410px]')}>
        {props.children}
    </div>
    )
}
interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
   return(
    <Slot className='w-6 h-6 text-gray-200'>
        {props.children}
    </Slot>

   )
}
TextInputIcon.displayName='TextInputIcon' 

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{} 

function TextInputInput(props: TextInputProps){
    return(

        <input  className={clsx(' flex-1 pl-3 bg-transparent outline-none text-gray-100 text-xs placeholder:text-gray-200' )}
        {...props}
        />
    )
} 
export const TextInput ={

    Div: TextInputDiv,
    Icon:TextInputIcon,
    Input: TextInputInput,
}