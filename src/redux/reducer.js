import { type } from "@testing-library/user-event/dist/type";
import { DECREMENT, INCREMENT } from "./actionTypes";

const init = {
    count : 0 ,
    isVisible : true,
};


const reducer = (state = init, {type}) => {

    switch (type) {
        case INCREMENT:
            return {...state, count: state.count + 1 };
        case DECREMENT:
                return {...state, count: state.count - 1 };
                default:
                    return state;
            }
    };

export default reducer;





