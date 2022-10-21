import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';
import { Text } from './Text';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>{} 

export function Checkbox(props : CheckboxProps){
    return(
    <>
        <label className={clsx(
            ' h-6 w-6 gap-2',
        )}>
        <input type='checkbox' 
            className={clsx(
                '   checked:bg-cyan-800',
            )}/>
        </label>
        
        <Text children={props.children}></Text>
    </>
    )
} 