import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload
            }

        case COLORCHANGED: {

            const { color, changeType } = action.payload;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.colors, color]
                    }
                case 'removed':
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }


                default:
                    return state;
            }
        }

        default:
            return state;
    }

}


export default reducer;



// if else statement

// import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
// import { initialState } from "./initialState";

// const reducer = (state = initialState, action) => {
//     if (action.type === STATUSCHANGED) {
//         return {
//             ...state,
//             status: action.payload
//         };
//     } else if (action.type === COLORCHANGED) {
//         const { color, changeType } = action.payload;

//         if (changeType === 'added') {
//             return {
//                 ...state,
//                 colors: [...state.colors, color]
//             };
//         } else if (changeType === 'removed') {
//             return {
//                 ...state,
//                 colors: state.colors.filter(existingColor => existingColor !== color)
//             };
//         } else {
//             return state;
//         }
//     } else {
//         return state;
//     }
// };

// export default reducer;



// using ternary operator

// const reducer = (state = initialState, action) => {
//     if (action.type === STATUSCHANGED) {
//         return {
//             ...state,
//             status: action.payload
//         };
//     }

//     if (action.type === COLORCHANGED) {
//         const { color, changeType } = action.payload;

//         return {
//             ...state,
//             colors: changeType === 'added'
//                 ? [...state.colors, color]
//                 : state.colors.filter(existingColor => existingColor !== color)
//         };
//     }

//     return state;
// };