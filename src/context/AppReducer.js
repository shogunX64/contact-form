export default (state, action) => {
    switch(action.type) {
      case 'SEND_TRANSACTION':
        return {
          ...state,
          messages: [action.payload]
        }
      default:
        return state;
    }
  }