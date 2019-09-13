export const setLogin = (name: string) => {
    return {
        type: 'USER_LOGIN',
        payload: name
    };
};

export const setLogged = (loading: boolean) => {
    return {
        type: 'USER_LOGGED',
        payload: loading
    };
};

export const login = (username: any) => {
    return (dispatch: any) => {
        sessionStorage.setItem('username', username);
        const login: any = sessionStorage.getItem('username');
        dispatch(setLogin(login));
        dispatch(setLogged(true));
    }
}