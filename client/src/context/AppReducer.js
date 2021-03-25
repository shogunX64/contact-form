export default (state, action) => {
    switch(action.type) {
      case 'SEND_TRANSACTION':
        return {
          ...state,
          messages: [action.payload]
        }
      case 'TRANSACTION_ERROR':
       return {
          ...state,
          error: action.payload
        }
      default:
        return state;
    }
  }