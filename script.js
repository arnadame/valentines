
  var no = document.querySelector('#no')
  var yes = document.querySelector('#yes')
  var catImg = document.querySelector('#capooImg')
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
  })

