import io from "socket.io-client";

const ENDPOINT = "http://192.168.153.130:3001";
export const socket = io(ENDPOINT,{transports: ['websocket', 'polling', 'flashsocket']});