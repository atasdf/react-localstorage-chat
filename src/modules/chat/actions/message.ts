export const message = (data: any) => {
    return {
        type: 'SEND_MESSAGE',
        payload: data
    };
};

export const sendMessage = (msg: string, user: string, uid: string) => {
    return (dispatch: any) => {
        const data = {name: user, text: msg, id: uid}
        dispatch(message(data));
    }
}
