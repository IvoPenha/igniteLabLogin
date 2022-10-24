import { Text, TextProps } from "./Text";
import {Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Text',
    component: Text,
    args:{
        size: 'md',
        children:'Lorem Ipsum!',
        color:'gray',
    },
    argTypes:{
        size:{
            options:['sm','md','lg'],
            control:{
                type : 'inline-radio'
            },
            
        },
        color:{
            options:['gray', 'white'],
            control:{  type: 'radio'}
        },
        asChild:{
            table:{disable:true}
        }
    }

} as Meta<TextProps>

export const Default: StoryObj = {}
export const Small: StoryObj ={args:{size:'sm'}} 
export const Large: StoryObj ={args:{size:'lg'}}
export const white : StoryObj ={args:{color:'white'}} 
export const CustomText: StoryObj<TextProps> ={
    args:{
        asChild: true,
        children:<p>Text P tag</p>
    },
    argTypes:{
        children:{
            table: {disable: true},

        },
        asChild:{
            table:{
                disable: false
            }
        }
        
    }
} 
