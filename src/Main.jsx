import React from 'react';
import thread from './assets/thread.svg';
import hook from './assets/hook.svg';

export const Main = () => {
    return (
        <div className='flex'>
            <div className="bracket">{'{'}</div>
            <div className="circle">
                <img src={thread} alt='ball of thread' />
                <img src={hook} alt='crochet hook' className='hook'/>
            </div>
            <div className="bracket">{'}'}</div>
        </div>
    )
}