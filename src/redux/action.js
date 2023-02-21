import { DECREMENT, INCREMENT } from "./actionTypes";



export const inc= ()=> {
return {
type : INCREMENT,
};
};

export const dec= ()=> {
    return {
    type : DECREMENT,
    };
    };