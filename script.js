let heroes = [
	['Axe', 'Tank'],
	['Crystal Maiden', 'Support'],
]

let heroesContainer = document.getElementById('heroesContainer')
let nameInput = document.getElementById('heroName')
let typeInput = document.getElementById('heroType')

let newHeroName = nameInput.value
let newHeroType = typeInput.value

let newElement = document.createElement('div')
let container = document.querySelector('.container')
container.appendChild(newElement)

let element = document.querySelector('newElement')
element.innerHTML = '<p>Гав-гав!</p>'
