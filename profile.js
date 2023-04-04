let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

const colorAlert = evt => {
    evt.preventDefault();

    alert('My favorite color is Red')
}
colorBtn.addEventListener('click', colorAlert)

const placeAlert = evt => {
    evt.preventDefault();

    alert('My favorite place is where ever family is.')
}
placeBtn.addEventListener('click', placeAlert)

const ritualAlert = evt => {
    evt.preventDefault();

    alert('My favorite ritual is taking a shower when I wake up.')
}
ritualBtn.addEventListener('click', ritualAlert)