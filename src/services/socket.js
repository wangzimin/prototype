import io from 'socket.io-client'
import listenSocket from './listenSocket'

let oldId
export const socketService = (param) => {
  const socketUrl = `wss://${param.ip}:${param.port}/client?roomNo=${param.roomNo}`
  const socket = io(socketUrl)
  socket.on('connect', () => {
    console.log(`socket is connected ${socketUrl}`)
  })
  socket.on('broadcast', (data) => {
    listenSocket.onMessage(data, oldId)
  })
  socket.on('disconnect', () => {
    console.log(`%cSocket disconnected`, "color:red")
  })
  socket.on('error', () => {
    console.log(`%cSocket error`, "color:red")
  })
  socket.on('connecting', ()=>{
    console.log('connnecting')
  })
  socket.on("reconnect",()=>{
    console.log('reconnect')
  })
}
