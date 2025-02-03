
  var no = document.querySelector('#no')
  var yes = document.querySelector('#yes')
  let count=0
  var noAns = [
    'Please?', 
    'Really?', 
    'Seriously?', 
    'Is this how it’s going to be?', 
    'I guess I didn’t matter...', 
    'I thought you cared...', 
    'Not like this...', 
    'So this is it then?', 
    'Wow, that hurts...', 
    'I wasn’t enough, huh?'
  ];
  no.addEventListener('click', () => {
    var currentPadding = parseInt(window.getComputedStyle(yes).padding);
    var newPadding = currentPadding + 6
    yes.style.padding = newPadding + 'px'

    var currentFontSize = parseInt(window.getComputedStyle(yes).fontSize)
    var newFontSize = currentFontSize + 4
    yes.style.fontSize = newFontSize + 'px'

    no.textContent = noAns[count % noAns.length]
    count++
  })

