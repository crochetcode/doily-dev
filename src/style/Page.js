import styled from 'styled-components';

export const dark = {
  color: 'magenta',
  background: 'black',
  shadow: 'white'
}

export const light = {
    color: 'purple',
    background: 'white',
    shadow: 'black'
}

export const Page = styled.div`
overflow: hidden;
height: 100vh;
color: ${props => props.theme.color};
background: ${props => props.theme.background};
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 500px){
  margin-top: -50px;
  padding-bottom: 50px;
}

.bracket {
  font-size: 60vh;
  margin-bottom: 10vh;
  font-family: arial;
  @media (max-width: 1500px){
    font-size: 40vh;
  }
  @media (max-width: 1200px){
    font-size: 25vh;
    margin-bottom: 5vh;
  }
}

.thread {
  animation: spin 20s ease 20s infinite alternate;
  /* margin: -1vh; */
  z-index: 10;
  height: 50vh;
  position: absolute;
  &:hover {
    height: 51vh;
  @media (max-width: 1500px){
    height: 36vh;
    /* margin: -1vh; */
  }
  @media (max-width: 1200px){
    height: 26vh;
    /* margin: -1vh; */
  }
  }
  @media (max-width: 1500px){
    height: 36vh;
  }
  @media (max-width: 1200px){
    height: 26vh;
  }
  @media (max-width: 1200px){
    height: 21vh;
    width: 21vh;
  }
}

.circle {
  height: 48vh;
  width: 48vh;
  background: white;
  border-radius: 50%;
  box-shadow: 0 0 25px ${props => props.theme.shadow};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: absolute;
  @media (max-width: 1500px){
    height: 35vh;
    width: 35vh;
  }
  @media (max-width: 1200px){
    height: 25vh;
    width: 25vh;
  }
  @media (max-width: 1200px){
    height: 20vh;
    width: 20vh;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

nav {
  display: flex;
  align-items: center;
  position: fixed;
  top: 25px;
  right: 25px;
  @media (max-width: 900px){
    top: 25px;
    right: 25px;
  }
}

.logo {
  color: ${props => props.theme.color};
  font-size: 2.25rem;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.shadow};
  }
  @media (max-width: 900px){
    font-size: 1.5rem;
  }
}
`