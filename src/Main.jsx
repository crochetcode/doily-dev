import React from 'react';
import thread from './assets/thread.svg';
import hook from './assets/hook.svg';
import { Page } from './style/Page';

export const Main = () => {
    return (
        <Page>
            <div className='bracket'>{'{'}</div>
            <div className='circle'></div>
            <img src={thread} alt='ball of thread' className='thread' />
            <img src={hook} alt='crochet hook' className='hook' />
            <div className='bracket'>{'}'}</div>
            <a className='twitch'
                href='https://www.twitch.tv/crochetcode'
                target='_blank'
                rel="noopener noreferrer"
            >
                <i className='fab fa-twitch'></i>
            </a>
        </Page>
    )
}