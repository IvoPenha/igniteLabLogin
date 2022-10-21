import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import ReactIcon from "../assets/react.svg";
export function Header(){
    return(
        <div className="flex flex-col items-center gap-2 mb-10">
        <img src={ReactIcon} alt="" className="h-32 mt-16" />
        <Heading size="lg">
            Ignite Lab
        </Heading>
        <Text>
            Faça Login e comece a usar
        </Text>
        </div>
    )
}