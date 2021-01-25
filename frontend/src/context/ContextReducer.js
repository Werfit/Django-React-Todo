const ContextReducer = (state, action) => {
  switch (action.type) {
    case 'NEW':
      return action.payload
    case 'ADD': {
      return [action.payload, ...state]
    }
    case 'REMOVE': {
      state = state.filter(item => item.id !== action.payload)
      return state
    }
    case 'UPDATE': {
      const item_i = state.findIndex(item => item.id === action.payload)
      state[item_i] = action.payload

      return state
    }
    default:
      return state
  }
}

export default ContextReducer