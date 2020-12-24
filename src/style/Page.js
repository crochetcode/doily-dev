import styled from 'styled-components';

export const Page = styled.div`
height: 100vh;
color: magenta;
background: black;
display: flex;
align-items: center;
justify-content: center;

.bracket {
  font-size: 60vh;
  margin-bottom: 10vh;
  font-family: arial;
}

.hook {
  position: absolute;
  height: 95vh;
  transform: rotate(30deg) scaleX(-1);
}

.thread {
  animation: spin 20s ease 20s infinite alternate;
  margin: -1vh;
  z-index: 10;
  height: 50vh;
  &:hover {
    height: 51vh;
  margin: -1.5vh;
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
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`