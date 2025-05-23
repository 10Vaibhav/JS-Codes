
interface PropType{
    Placeholder: string;
    size: "big" | "small"

}

export function TextInput({
    Placeholder,
    size
}: PropType){

    return <input style={{
        padding: size == "big"? 12 : 6,
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
        width: size == "big"? 800 : 200
    }} placeholder={Placeholder}>
    </input>
}

