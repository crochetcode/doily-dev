import React from 'react';
import thread from './assets/thread.svg';

export const Main = () => {
    return (
        <div className='flex'>
            <div className="bracket">{'{'}</div>
            <div className="circle">
                <img src={thread} alt='ball of thread' />
            </div>
            <div className="bracket">{'}'}</div>
        </div>
    )
}