import io from 'socket.io-client';

const dependencies = {
  io: io
}

export default function socketMiddleware(injection) {
  const  {io} = Object.assign({}, dependencies, injection)
  const socket = io('http://localhost:3001');

  return ({ dispatch }) => next => (action) => {
    if (typeof action === 'function') {
      return next(action);
    }

    const {
      event,
      leave,
      handle,
      ...rest
    } = action;

    if (!event) {
      return next(action);
    }

    if (leave) {
      socket.removeListener(event);
    }

    let handleEvent = handle;
    if (typeof handleEvent === 'string') {
      handleEvent = result => dispatch({ type: handle, result, ...rest });
    }
    return socket.on(event, handleEvent);
  };
}
