// action type
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// action method
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// initstate
const initialState = 0;

export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
};

// reducer
export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}