! function () {
  let duration = 50;
  let buttonGroup = document.querySelectorAll('.button');
  buttonGroup.forEach(i => {
    i.addEventListener('click', () => {
      buttonGroup.forEach(i => {
        i.classList.remove('active')
      })
      i.classList.add('active');
      let speed = i.getAttribute('data-speed');
      switch (speed) {
        case 'slow':
          duration = 100;
          break;
        case 'normal':
          duration = 50;
          break;
        case 'fast':
          duration = 10;
          break;
      }
    })
  })

  function writeCode(code, fn) {
    let codeContainer = document.querySelector('#code');
    let pikaStyle = document.querySelector('#pikaStyle');
    let n = 0;
    let pika;

    // use SetTimeout to emulate SetInterval for speed control
    let id = setTimeout(function pika() {
      n += 1;
      codeContainer.innerHTML = code.substring(0, n);
      pikaStyle.innerHTML = code.substring(0, n);
      codeContainer.scrollTop = codeContainer.scrollHeight;
      if (n < code.length) {
        id = setTimeout(pika, duration);
      } else {
        fn && fn.call();
      }
    }, duration);

    // pika = setInterval(() => {
    //   n += 1;
    //   codeContainer.innerHTML = code.substring(0, n);
    //   pikaStyle.innerHTML = code.substring(0, n);
    //   codeContainer.scrollTop = codeContainer.scrollHeight;
    //   if (n > code.length) {
    //     clearInterval(pika);
    //   }
    // }, 50);
  }

  let code = `
  /*
   * Hello, I'm Jett. Next you will see the face of Pikachu on the screen.
   * You can also use the buttons on the right to control the speed.
   */

  /*
   * First to paint Pikachu's skin.
   */
  .preview {
    background: #FFE204;
  }

  #pikachu {
    width: 340px;
    height: 200px;
    position: relative;
  }

  /*
   * Next, paint its nose
   */
  .nose {
    width: 0;
    height: 0;
    border-width: 13px 16px;
    border-style: solid;
    border-color: black transparent transparent;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -16px;
    top: 38px;
  }

  /*
   * Painting the eyes
   */
  .eye {
    width: 52px;
    height: 52px;
    background: #000;
    border-radius: 50%;
    position: absolute;
  }

  /*
   * Have light in the eyes
   */
  .eye::after {
    content: '';
    display: block;
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 8px;
    top: 4px;
  }

  /*
   * Putting them in the right place
   */
  .eye.left {
    right: 50%;
    margin-right: 66px;
  }

  .eye.right {
    left: 50%;
    margin-left: 66px;
  }

  /*
   * How about a little blush?
   */
  .cheek {
    width: 69px;
    height: 69px;
    background: #FF0000;
    border: 3px solid;
    border-radius: 50%;
    position: absolute;
    top: 86px;
  }

  /*
   * Putting them in the right place
   */
  .cheek.left {
    right: 50%;
    margin-right: 94px;
  }

  .cheek.right {
    left: 50%;
    margin-left: 94px;
  }

  /*
   * Painting the upper lip
   */
  .upper_lip {
    width: 66px;
    height: 16px;
    border: 2px solid;
    position: absolute;
    top: 66px;
    background: #FEE02E;
  }

  .upper_lip.left {
    right: 50%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-16deg);
  }

  .upper_lip.right {
    left: 50%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(16deg);
  }

  /*
   * Then the lower lip
   */
  .lower_lip_wrapper {
    width: 150px;
    height: 128px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
  }

  .lower_lip {
    width: 100%;
    height: 1000px;
    border: 2px solid;
    border-radius: 300px/1600px;
    background: #91000C;
    position: absolute;
    overflow: hidden;
    bottom: 0;
  }

  /*
  * Add a cute tongue to it
  */
  .lower_lip::after {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    background: #FC4057;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    border-radius: 50%;
  }

  /* 
   * The little tongue is naughty, let it go back to where it belongs
   */
  #pikachu> :not(:last-child) {
    z-index: 1;
  }

  /*
   * Wish you happy! o(*￣▽￣*)ブ
   * (Welcome to follow my GitHub https://github.com/jettzhang95)
   */
  `

  writeCode(code);
}.call();
