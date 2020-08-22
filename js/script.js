// letters
let letters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'

]

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

  let button = document.querySelector('.btn-secondary')
  let letter = document.querySelector('.letter')
  let advice = document.querySelector('.section-plans__list-item')
  

button.addEventListener('click', function () {
  let randomElement = getRandomElement(letters)

  letter.textContent = randomElement;
  
  
  

  if (randomElement.length > 40) {
    advice.style.fontSize = '33px'
  } else {
    advice.style.fontSize = '42px'
  }
})
// Phrase
let phrases = ['не стоит брать на вечеринку', 'чем занимаются на работе?', 'кого не хотят видеть на работе?', 'мужчина знаменитость', 'за это стоить выпить', 'день этого', 'воняет', 'можно встретить в туалете','из за этого можно поссориться', 'нельзя детям', 'вы бы не хотели чтобы вас так называли', 'считается грехом', 'стоит взять на вечеринку', 'хорошая закуска под спиртное' ]


function getRandomElementPhrase(arr) {
  let randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

  let buttonPhrase = document.querySelector('.btn-main')
  let buttonNext = document.querySelector('.btn-next')
  let phrase = document.querySelector('.phrase')
  let advicePhrase = document.querySelector('.letter')
  
buttonNext.addEventListener('click', function() {
  phrase.textContent = 'Тема обсуждения';
  advicePhrase.textContent = 'Буква';
  
})

buttonPhrase.addEventListener('click', function () {
  let randomElement = getRandomElementPhrase(phrases)

  phrase.textContent = randomElement;
  
  

  /*if (randomElement.length > 40) {
    phrase.style.fontSize = '33px'
  } else {
    phrase.style.fontSize = '42px'
  }*/
})





