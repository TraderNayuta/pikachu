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

    // 用setTimeout模拟setInterval以实现速度控制
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
   * 大家好，我是Nayuta。给大家整个活儿，来画个皮卡丘吧~
   */

  /*
   * 首先来画皮卡丘的皮
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
   * 接下来画一只鼻子
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
   * 画对眼睛
   */
  .eye {
    width: 52px;
    height: 52px;
    background: #000;
    border-radius: 50%;
    position: absolute;
  }

  /*
   * 没眼珠怎么行呢，来点灵性 
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
   * 把眼睛放到正确的地方 
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
   * 然后画脸颊，这样才更可爱 
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
   * 把脸颊放到正确的地方，左右要对称 
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
   * 画上唇 
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
   * 画下唇 
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
  * 添个可爱的舌头吧 
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
   * 哎呀，小舌头调皮了，让它乖乖地回去吧
   */
  #pikachu> :not(:last-child) {
    z-index: 1;
  }

  /*
   * 这只皮卡丘送给屏幕前的你，希望你开心。
   * (欢迎关注我的GayHub
   * https://github.com/TraderNayuta)
   */
  `

  writeCode(code);
}.call();
