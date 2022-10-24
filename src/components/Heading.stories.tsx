import { Heading, HeadingProps } from "./Heading";
import { Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Heading',
    component: Heading,
    args:{
        size: 'md',
        children:'Lorem Ipsum!'
        
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type : 'inline-radio'
            }
        },
        asChild:{
            table:{
                disable:true
            }
        }
    }

} as Meta<HeadingProps>

export const Default: StoryObj = {}
export const Small: StoryObj ={args:{size:'sm'}} 
export const Large: StoryObj ={args:{size:'lg'}} 
export const CustomText: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children:<h1>Heading H1</h1>
    },
    argTypes:{
        children:{
                table:{disable: true}  
        },
        asChild:{
            table:{disable:true}
        }
    }
} 
