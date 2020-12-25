import styled from 'styled-components';

export const Page = styled.div`
height: 100vh;
color: magenta;
background: black;
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

.hook {
  position: absolute;
  height: 95vh;
  transform: rotate(30deg) scaleX(-1);
  @media (max-width: 1500px){
    height: 70vh;
  }
  @media (max-width: 1200px){
    height: 45vh;
  }
}

.thread {
  animation: spin 20s ease 20s infinite alternate;
  margin: -1vh;
  z-index: 10;
  height: 50vh;
  &:hover {
    height: 51vh;
    margin: -1.5vh;
  @media (max-width: 1500px){
    height: 36vh;
    margin: -1vh;
  }
  @media (max-width: 1200px){
    height: 26vh;
    margin: -1vh;
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
  box-shadow: 0 0 25px white;
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

.twitch {
  display: flex;
  align-items: center;
  color: magenta;
  font-size: 1rem;
  position: fixed;
  top: 25px;
  right: 25px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: white;
  }
  @media (max-width: 900px){
    top: 25px;
    right: 25px;
  }
}

.fa-twitch {
  font-size: 2.25rem;
  @media (max-width: 900px){
    font-size: 1.5rem;
  }
}
`