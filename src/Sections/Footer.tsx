import { Text } from "../components/Text";
export function Footer(){
    return(
        <div className="flex flex-col items-center mt-8 gap-2 ">
        
            <div className="cursor-pointer">

            <Text>
                Esquecesse a senha
            </Text>
            </div>
            <div className="cursor-pointer">

            <Text>
                Não possui conta? Criasse agora!
            </Text>
            </div>
        </div>
    )
}