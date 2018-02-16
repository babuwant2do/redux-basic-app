export const INCREMENT = 'INCREMENT'
export const CHANGE_POLAR = 'CHANGE_POLAR'

/**
 * Action to increment
 * @param {*} incrementBy - how much should increment
 */
export function incrementNumber(incrementBy) {
    return { type: INCREMENT, incrementBy }
}
/** 
 * Action to change the polarity from + to - and vice versa
*/
export function changeNumberPolar() {
    return { type: CHANGE_POLAR }
}