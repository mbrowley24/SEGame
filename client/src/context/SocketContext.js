import {createContext, useMemo, useState} from "react";
import {io} from "socket.io-client";


const SocketContext = createContext({});

export const SocketProvider = ({children}) => {
    //"http://localhost:8080/jeopardy-"
    const [url, setUrl] = useState("http://localhost:8080/game-"); //"https://theaveragese.com/game-"
    const [id, setId] = useState("");
    const socketUrl = useMemo(() => `${url}${id}`, [url, id]);
    const socket = io(socketUrl, {autoConnect: true});
    return(
        <SocketContext.Provider value={
            {url, id, socket, setUrl, setId, socketUrl}
        }>
            {children}
        </SocketContext.Provider>
    )
};


export default SocketContext;