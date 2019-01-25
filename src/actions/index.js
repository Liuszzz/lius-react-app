import * as actionType from "../actionTypes/index"

export function changeUserinfo(info) {
    return {
        type: actionType.CHANGE_USERINFO,
        info
    }
}