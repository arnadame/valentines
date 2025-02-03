
  var no = document.querySelector('#no')
  var yes = document.querySelector('#yes')
  var catImg = document.querySelector('#capooImg')
  var titleV = document.querySelector('#titleV')

  let count=0

  var arr = [
    {
      text:'Please?', 
      img:'img/capoo1.webp'
    },
    {
      text:'Really?',
      img:'img/redhorse.gif'
    },
    {
      text:'Is this how it’s going to be?',
      img:'img/sad2.gif'
    },
    {
      text:'Not like this...',
      img:'img/sad2.webp'
    },
    {
      text:'So this is it then?',
      img:'img/pikachu.webp'
    },
    {
      text:'Wow, that hurts...',
      img:'img/sad1.gif'
    },
    {
      text:'I wasn’t enough, huh?',
      img:'img/sad1.webp'
    },
  ]

  no.addEventListener('click', () => {
    var currentPadding = parseInt(window.getComputedStyle(yes).padding);
    var newPadding = currentPadding + 6
    yes.style.padding = newPadding + 'px'

    var currentFontSize = parseInt(window.getComputedStyle(yes).fontSize)
    var newFontSize = currentFontSize + 4
    yes.style.fontSize = newFontSize + 'px'

    catImg.src = arr[count % arr.length].img
    no.textContent = arr[count % arr.length].text
    count++
    if(count >= 10){
      no.classList.add('absolute')
      const randomX = Math.floor(Math.random() * 15);
      const randomY = Math.floor(Math.random() * 50);
      no.style.right = randomX + 'rem'
      no.style.top = randomY + 'rem'
    }
  })

  yes.addEventListener('click', () => {
    catImg.src = 'img/cat.gif'
    // titleV.classList.add('hidden')
    titleV.textContent = 'yipee'
    yes.classList.add('hidden')
    no.classList.add('hidden')
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };
    
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });
    
    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });
    
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });
  })