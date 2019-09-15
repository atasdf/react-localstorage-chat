import React from 'react';
// import { Row } from 'react-bootstrap';

const ChatHistory: React.FC = () => {
    return (
        <React.Fragment>
            <div className="p-4">
                <div className='p-3'>
                    <div className='font-weight-bold pb-4 pl-1'>penda</div>
                    <span className='bg-dark text-light rounded p-3'>Привет петух</span>
                </div>
                <div className='p-3 float-right'>
                    <div className='font-weight-bold text-right pb-4 pr-1'>dependa</div>
                    <span className='bg-dark text-light rounded p-3'>сам петух</span>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ChatHistory;