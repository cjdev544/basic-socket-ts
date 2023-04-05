/* eslint-disable no-undef */
/* eslint-disable no-undef */

const onStatus = document.querySelector('#on')
const offStatus = document.querySelector('#off')
const txtMessage = document.querySelector('#txtMessage')
const btnMessage = document.querySelector('#btnMessage')

onStatus.style.color = 'green'
offStatus.style.color = 'red'
const socket = io()

socket.on('connect', () => {
  onStatus.style.display = ''
  offStatus.style.display = 'none'
})

socket.on('disconnect', () => {
  offStatus.style.display = ''
  onStatus.style.display = 'none'
})

socket.on('server-emit', (payload) => {
  console.log(payload)
})

btnMessage.addEventListener('click', () => {
  const payload = {
    id: 'abc123',
    date: new Date().getTime(),
    msg: txtMessage.value
  }
  socket.emit('client-emit', payload, (id) => {
    console.log('server response: ' + id)
  })
})
