import { TextInput } from "@repo/ui/text-input";

export default function ChatRoom(){

    return <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column"
    }}>
        <div style={{
            marginTop:50,
            marginBottom: 7
        }}>
            Chat Room
        </div>

        <div>
            <TextInput size="big" Placeholder="Chat Here.."/>
        </div>
    </div>
}

