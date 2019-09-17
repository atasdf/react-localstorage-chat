export const message = (data: any) => {
    return {
        type: 'SEND_MESSAGE',
        payload: data
    };
};

export const loadStorageMessages = (data: any) => {
    return {
        type: 'LOAD_MESSAGE',
        payload: data
    };
};

export const cleanState = () => {
    return (dispatch: any) => {
        const cleanItems: any = [];
        dispatch(message(cleanItems))
    }
}

export const loadOldMessages = () => {
    return (dispatch: any) => {
        const storage = JSON.parse(window.localStorage.getItem('message'));
        if(storage === null ) {
            localStorage.setItem("message", JSON.stringify([]));
        }
        else {
            dispatch(loadStorageMessages(storage));
        }
    }
}

export const sendMessage = (msg: string, user: string, uid: string) => {
    return (dispatch: any) => {
        if(!localStorage.getItem("message")){
            localStorage.setItem("message", JSON.stringify([]));
        }
        const chatHistory = JSON.parse(localStorage.getItem("message"));
        const data = {
            name: user, 
            text: msg, 
            id: uid
        };
        chatHistory.push(data);
        dispatch(message(chatHistory));
    }
}
