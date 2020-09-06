const minuteman = document.querySelector('#minuteman')
console.log(minuteman)

const welcome = document.querySelector('h2')
console.log(welcome)

welcome.innerText = 'Welcome to Lexington!!!'

const content = document.querySelectorAll('.content')
console.log(content)

const list = document.querySelectorAll('li')
list[4].style.color = 'mediumvioletred'
list[1].innerText = 'Jamboree sandwich at the Jambo-ree'

const myOldHouse = document.createElement('img')
myOldHouse.setAttribute('src','./myoldhouse.jpg')

content[1].appendChild(myOldHouse)

//BONUS
for (item of list) {
    item.style.color ='mediumseagreen'
}

myOldHouse.remove()