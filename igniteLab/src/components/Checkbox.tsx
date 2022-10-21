import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";
import { ReactNode } from 'react';

export function CheckBox(){
   
    return(
        <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded'>
        <CheckboxPrimitive.Indicator>
            <Check weight='bold' className='h-5 w-5 text-cyan-500'></Check>
        </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    )
} 