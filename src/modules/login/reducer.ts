import { AnyAction } from 'redux';

export type State = {
    username: string;
    isLogged: boolean;
};

export const initialState: State = {
    username: '',
    isLogged: false,
};

const account = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                username: action.payload
            };
        
        case 'USER_LOGGED':
            return {
                ...state,
                isLogged: action.payload
            };

        default:
            return state
    };
};

export default account;