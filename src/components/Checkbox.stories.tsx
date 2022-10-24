import { CheckBox } from "./Checkbox";
import {Meta, StoryObj } from '@storybook/react'
import { Text } from "./Text";
export default {
    title: 'Components/Checkbox',
    component: CheckBox,
    args:{ },  argTypes:{
        asChild:{
            control:{
                disable:true
            }
        }
    },
    decorators:[
        (Story)=>{
            return(
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Preencher Checkbox</Text>
                </div>
            )
        }
    ]
    

} as Meta

export const Default: StoryObj = {}