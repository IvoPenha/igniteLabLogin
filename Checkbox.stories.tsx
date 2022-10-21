import {Checkbox, CheckboxProps  } from "./Checkbox";
import {Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args:{
        children:'Checkbox'
        
    },
    argTypes:{    }
    } as Meta<CheckboxProps>

export const Default: StoryObj = {}