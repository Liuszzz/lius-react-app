import * as actionTypes from "../actionTypes"

export function changeUserinfo(data) {
    return {
        type: actionTypes.CHANGE_USERINFO,
        data
    }
}