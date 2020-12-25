import React, { useState } from 'react';
import thread from './assets/thread.svg';
import hook from './assets/hook.svg';
import { Page, dark, light } from './style/Page';
import { ThemeProvider } from 'styled-components';


export const Main = () => {
    const [mode, changeMode] = useState('dark')

    const onClick = () => {
        mode === 'dark' ? changeMode('light') : changeMode('dark')
    }

    return (
        <ThemeProvider theme={mode === 'dark' ? dark : light}>
            <Page theme={mode === 'dark' ? dark : light}>
                <div className='bracket'>{'{'}</div>
                <div className='circle'></div>
                <img src={thread} alt='ball of thread' className='thread' />
                <img src={hook} alt='crochet hook' className='hook' />
                <div className='bracket'>{'}'}</div>
                <nav>
                    {mode === 'dark' && <i className='fas fa-sun logo' onClick={() => onClick()} />}
                    {mode === 'light' && <i class="fas fa-moon logo" onClick={() => onClick()} />}
                    <a className='logo'
                        href='https://www.twitch.tv/crochetcode'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <i className='fab fa-twitch' />
                    </a>
                </nav>
            </Page>
        </ThemeProvider>
    )
}