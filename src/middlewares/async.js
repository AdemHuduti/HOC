export default ({ dispatch }) => next => action => {
  // check  to see if the action has a promise on its payload property
  // if it does, wait for result,
  // if dosen't, send action to the next middleware

  if(!action.payload || !action.payload.then) {
    return next(action);
  }

  // If we have a promise, we want to wait for the promise for resolve
  // and create a new action with the data and dispatch it
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
  
