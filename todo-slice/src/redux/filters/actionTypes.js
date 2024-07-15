import { COLORCHANGED, STATUSCHANGED } from "./action"

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: { color, changeType }
    }
}
export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}