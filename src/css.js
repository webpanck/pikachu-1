const string = `
.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}

.nose {
  position: relative;
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 140px;
  margin-left: -10px;
  z-index: 10;
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
  }

  33% {
    transform: rotate(5deg);
  }

  66% {
    transform: rotate(-5deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

.nose:hover {
  transform-origin: center bottom;
  animation: shake 200ms infinite linear;
}

.circle {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background: black;
}

.eye {
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}

.eye::before {
  content: '';
  display: block;
  border: 2px solid #000;
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 8px;
  top: 1px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip {
  background: #ffe600;
  border: 3px solid black;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

.mouth .up .lip::before {
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}

.mouth .up .lip.left {
  border-right-color: transparent;
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.right {
  border-left-color: transparent;
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .circle1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .circle1 .circle2 {
  width: 200px;
  height: 300px;
  background: #ff485f;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}

.face>img {
  position: absolute;
  top: 50%;
  left: 50%;
}

.face.left {
  transform: translateX(-150px);
  background: #ff0000;
  border-radius: 50%;
}

.face.left>img {
  transform-origin: 0 0;
  transform: rotateY(180deg);
}

.face.right {
  transform: translateX(150px);
  background: #ff0000;
  border-radius: 50%;
}
`

export default string