import { TextInput, TextInputDivProps} from "./TextInput";
import {Meta, StoryObj } from '@storybook/react'
import { Envelope, Lock } from "phosphor-react";
export default {
    title: 'Components/TextInput',
    component: TextInput.Div,
    args:{
        children:[
            <TextInput.Input placeholder="Escreva aqui"/>
        ],
    },
    argTypes:{
        children:{
            control:{
                disable:true
            }
        }
    }
    

} as Meta<TextInputDivProps>

export const Default: StoryObj = {}
export const EmailInput : StoryObj<TextInputDivProps>={
    args:{
        children:[    
             
             <TextInput.Icon>
                 <Envelope/>
             </TextInput.Icon>,
             <TextInput.Input placeholder="Insira seu email"/>

        ]
    }
}
export const PasswordInput : StoryObj<TextInputDivProps>={
    args:{
        children:[    
             
             <TextInput.Icon>
                 <Lock/>
             </TextInput.Icon>, 
             <TextInput.Input placeholder="Insira sua senha"/>
        
        ]
    }
}