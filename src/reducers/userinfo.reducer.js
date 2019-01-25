import * as actionType from '../actionTypes/index'

const initialState = {
  name: "刘欣"
}

export default function userinfo(state = initialState,action) {
  switch (action.type) {
    case actionType.USERINFO_UPDATE:
      return action.data;
    default:
      return state;
  }
}
