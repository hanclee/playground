import Server from 'socket.io';

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(
    () => {
      console.log('emit state', store.getState().toJS());
      io.emit('state', store.getState().toJS())
    }
  );

  io.on('connection', (socket) => {
    console.log('got connection', store.getState().toJS());
    socket.emit('state', store.getState().toJS());
    socket.on('action', store.dispatch.bind(store));
  });

}
