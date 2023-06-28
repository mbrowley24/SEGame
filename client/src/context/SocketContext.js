import {createContext, useMemo, useState} from "react";
import {io} from "socket.io-client";


const SocketContext = createContext({});

export const SocketProvider = ({children}) => {

    const [url, setUrl] = useState("https://urchin-app-voqyy.ondigitalocean.app/se-game/jeopardy-");
    const [id, setId] = useState("");
    const socketUrl = useMemo(() => `${url}${id}:8080`, [url, id]);
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