import { TextInput  } from "../components/TextInput";
import { Envelope, Lock } from "phosphor-react";
import { Text } from "../components/Text";
import { Heading } from "../components/Heading";
import { CheckBox } from "../components/Checkbox";
import { Button } from "../components/Button";
export function Form(){
    return(
    <div>
        <div className="flex flex-col items-center mt-4 gap-4">
            <div className="flex flex-col gap-3">
                <Text color="white">
                    Endereço de Email
                </Text>
                <TextInput.Div>
                    <TextInput.Icon>
                        <Envelope></Envelope>
                    </TextInput.Icon>
                    <TextInput.Input placeholder="Insira seu Email" type={"email"}/>
                </TextInput.Div>

            </div>
            <div className="flex flex-col gap-3">
                <Text color="white">
                    Senha
                </Text>
                <TextInput.Div>
                    <TextInput.Icon>
                        <Lock></Lock>
                    </TextInput.Icon>
                    <TextInput.Input placeholder="Insira sua Senha" type={"password"}/>
                </TextInput.Div>
            </div>
            <div className="flex justify-start gap-2 mr-[190px] my-3">
                <CheckBox></CheckBox>
                <Text size="md">Lembrar-me por 30 dias</Text>
            </div>
            <div className="w-[400px]">
                <Button>
                    Entrar
                </Button>
            </div>
        </div>
    </div>

    

    )
}