let randomResBtn = document.querySelector('.randomResturaunt')
let randomActBtn = document.querySelector('.randomActivity')

const resurantLinks = ["Guru's Cafe", "Burger Supreme", "Two Jack's Pizza", "Wendy's"]
const activityLinks = ["Fat Cat's", "Provo Rec Center", "Y Trail", "BYU Campus"]

const randomResturant = evt => {
    evt.preventDefault();

    let random1 = Math.floor(Math.random() * resurantLinks.length)
    alert(`You got ${resurantLinks[random1]}`)
}
randomResBtn.addEventListener('click', randomResturant)

const randomActivity = evt => {
    evt.preventDefault();

    let random2 = Math.floor(Math.random() * activityLinks.length)
    alert(`You got ${activityLinks[random2]}`)
}
randomActBtn.addEventListener('click', randomActivity)