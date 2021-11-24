let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  document.body.textContent = state.count;
}

function dispatch(action) {
  state = changeState(state, action);
  render();
}

render();

// First, it persisted changes to our state. This is because we called the dispatch function, the dispatch function called our reducer, and then we took the return value from the reducer and assigned it to be our new state.