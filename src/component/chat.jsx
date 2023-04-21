// import React, { useState } from 'react';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator, Message } from '@chatscope/chat-ui-kit-react';
// import ChatAccordion from './chataccordion';

// const API_KEY = "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"

// function Chat() {
//     const [messages, setMessages] = useState([{ message: '저는 ChatGPT입니다. 무엇을 도와드릴까요?', sender: 'ChatGPT' }]);
//     const [typing, setTyping] = useState(false);

//     const handleSend = async (message) => {
//         const newMessage = { message, sender: 'user', direction: 'outgoing' };
//         const newMessages = [...messages, newMessage];
//         setMessages(newMessages);
//         setTyping(true);
//         await processMessageToChatGPT(newMessages);
//     };

//     async function processMessageToChatGPT(chatMessages) {
//         let apiMessages = chatMessages.map((messageObject) => {
//             let role = messageObject.sender === 'ChatGPT' ? 'assistant' : 'user';
//             return { role, content: messageObject.message }
//         });

//         const systemMessage = { role: 'system' };
//         const apiRequestBody = { model: "davinci", prompt: systemMessage.content, max_tokens: 1000 };
//         apiRequestBody.prompt += "\n\n" + apiMessages.map((message) => `${message.role}: ${message.content}`).join("\n") + "\n\n";

//         const response = await fetch('https://api.openai.com/v1/completions', {
//             method: 'POST',
//             headers: { "Authorization": `Bearer ${API_KEY}`, "Content-Type": "application/json" },
//             body: JSON.stringify(apiRequestBody)
//         });

//         const data = await response.json();
//         setMessages([...chatMessages, { message: data.choices[0].text, sender: "ChatGPT" }]);
//         setTyping(false);
//     }

//     return (
//         <>
//             <ChatAccordion />
//             <div className='chat_box'>
//                 <MainContainer>
//                     <ChatContainer>
//                         <MessageList typingIndicator={typing && <TypingIndicator content='chatGPT가 작성중 입니다' />}>
//                             {messages.map((message, i) => <Message key={i} model={message} />)}
//                         </MessageList>
//                         <MessageInput placeholder='궁금한 점을 입력하세요' onSend={handleSend} />
//                     </ChatContainer>
//                 </MainContainer>
//             </div>
//         </>
//     );
// }

// export default Chat;


import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
    "role": "system", "content": "You are a professional.You should give reasonable answers to work- related questions from people in various occupations."
}

function Chat() {
    const [messages, setMessages] = useState([
        {
            message: "안녕하세요! 무엇을 도와드릴까요?",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const newMessages = [...messages, newMessage];

        setMessages(newMessages);

        // Initial system message to determine ChatGPT functionality
        // How it responds, how it talks, etc.
        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";

            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message }
        });


        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,  // The system message DEFINES the logic of our chatGPT
                ...apiMessages // The messages from our chat with ChatGPT
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(apiRequestBody)
            }).then((data) => {
                return data.json();
            }).then((data) => {
                console.log(data);
                setMessages([...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "ChatGPT"
                }]);
                setIsTyping(false);
            });
    }

    return (
        <>
            <div className='chat_box'>
                <MainContainer>
                    <ChatContainer style={{ paddingTop: '10px' }}>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT가 작성중 입니다" /> : null}

                        >
                            {messages.map((message, i) => {
                                console.log(message)
                                return <Message key={i} model={message} style={{ padding: '5px 0' }} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="궁금한 점을 질문하세요." onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </>
    )
}

export default Chat;