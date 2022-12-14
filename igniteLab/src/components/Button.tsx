import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean
}

export function Button({children, asChild} : ButtonProps){
    const Comp = asChild ? Slot : 'button'
    return(
        <>
        <Comp 
            className={clsx(
                'bg-cyan-500 px-3 py-4 font-semibold flex-1 w-full text-black rounded text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-gray-100',
            )}>
                {children}
        </Comp>
        </>
    )
} 