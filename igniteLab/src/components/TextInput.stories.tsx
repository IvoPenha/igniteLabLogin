import { TextInput, TextInputDivProps} from "./TextInput";
import {Meta, StoryObj } from '@storybook/react'
export default {
    title: 'Components/TextInput',
    component: TextInput.Div,
    args:{
        children: <TextInput.Input placeholder="Insira email"/>       
    }
    

} as Meta<TextInputDivProps>

export const Default: StoryObj = {}