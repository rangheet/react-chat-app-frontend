import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

import '../InfoBar/InfoBar';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import TextContainer from "../TextContainer/TextContainer";




let socket;


const Chat = ({location}) => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://react-chat-app-rangheet.herokuapp.com/';

    

    useEffect(()=>{

        socket = io(ENDPOINT);

        const {name, room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);

        socket.emit('join', {name, room}, ()=> {
        });

        return ()=>{
            socket.emit('disconnect');
            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect(()=>{
        socket.on('message', (message)=>{
            setMessages(messages => [...messages, message]);
        });

        socket.on('roomData', (roomInfo)=>{
            console.log("useEffect", roomInfo.users);
            setUsers(roomInfo.users);
        });
    }, []);


    const sendMessage = (event) => {
        event.preventDefault();
        if(message)
        {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }
    
    console.log("HEEYA",messages);
    return (

        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage} />
            </div>
            <TextContainer users={users}/>
        </div>
    );
}

export default Chat;