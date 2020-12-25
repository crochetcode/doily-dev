import React from 'react';
import styled from 'styled-components';

export const Hook = () => {
    const StyledHook = styled.svg`
      height: 95vh;
      transform: rotate(30deg) scaleX(-1);
      margin: 0 -235px;
      @media (max-width: 1500px){
      height: 70vh;
      margin: 0 -175px;
      }
      @media (max-width: 1200px){
      height: 45vh;
      margin: -125px;
    }

    .crop {
        overflow: hidden;
    }

    #path833 {
        fill: ${props => props.theme.color};
    }
    `

    return (
        <StyledHook 
        viewBox="0 0 100 100"
        >
            <path
                d="m 52.968,43.676 c 0,-5.693 -1.093,-10.329 -1.296,-11.14 V 10.347 C 51.704,8.822 51.282,5 50,5 c -1,0 -2.77,5.011 -2.959,6.546 -0.06,0.477 0.178,0.952 0.447,0.993 0.265,0.041 0.544,-0.117 0.888,-0.602 0.301,-0.424 1.349,-2.071 1.34,-1.591 -0.012,0.606 0,22.189 0,22.189 -0.203,0.812 -1.296,5.447 -1.296,11.14 0,5.696 1.094,10.333 1.296,11.14 v 39.206 c 0,0.54 0.438,0.978 0.978,0.978 0.541,0 0.979,-0.438 0.979,-0.978 V 54.812 c 0.203,-0.815 1.295,-5.448 1.295,-11.136 z"
                id="path833"
                />
        </StyledHook>
    )
}