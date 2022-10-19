import { Text, TextProps } from "./Text";
import {Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Text',
    component: Text,
    args:{
        size: 'md',
        children:'Lorem Ipsum!'
        
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type : 'inline-radio'
            },
            
        },
        asChild:{
            table:{disable:true}
        }
    }

} as Meta<TextProps>

export const Default: StoryObj = {}
export const Small: StoryObj ={args:{size:'sm'}} 
export const Large: StoryObj ={args:{size:'lg'}} 
export const CustomText: StoryObj<TextProps> ={
    args:{
        asChild: true,
        children:<p>Text P tag</p>
    },
    argTypes:{
        children:{
                table:{disable: true}  
        }
    }
} 
