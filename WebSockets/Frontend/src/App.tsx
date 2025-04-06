import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const wsRef = useRef<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }
    wsRef.current = ws;

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }
    return () => {
      ws.close()
    }
  }, []);

  return (
    <div className='h-screen bg-gray-900 flex flex-col'>

      <div className='pt-12 px-4 flex-1 overflow-y-auto'>
        {messages.map((message, index) => (
          <div className='mb-4 flex justify-start' key={index}>
            <span className='bg-white text-gray-800 rounded-lg px-4 py-2 shadow-md max-w-md break-words'>
              {message}
            </span>
          </div>
        ))}
      </div>

      <div className='w-full border-t border-gray-700 bg-gray-800 p-4 shadow-lg'>
        <input
          ref={inputRef}
          id="message"
          className="flex-1 p-3 bg-white w-[40%] text-md rounded-md border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 m-2"
          placeholder="Type a message..."
        />
        <button
          onClick={() => {
            if (!inputRef.current || !wsRef.current) return;

            const message = inputRef.current?.value;
            if (wsRef.current && message) {
              wsRef.current.send(JSON.stringify({
                type: "chat",
                payload: {
                  message: message
                }
              }))
              inputRef.current.value = '';
            }
          }}
          className='bg-purple-600 hover:bg-purple-700 text-white font-medium p-4 m-2 rounded-md transition-colors duration-200'
        >
          Send Message
        </button>
      </div>
    </div>
  )
}

export default App