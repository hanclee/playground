export default socket => store => next => action => {
  console.log('in middleware: socket', socket);
  if (action.meta && action.meta.remote) {
    console.log('in middleware: dispatching', action);
    socket.emit('action', action);
  }
  return next(action);
}
