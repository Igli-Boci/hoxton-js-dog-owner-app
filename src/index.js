
let dogList = document.querySelector(".dogs-list")

let dogSection = document.querySelector('.main__dog-section')

function addDogListItem(dog) {
    for (let dog of data) {

        let elLi = document.createElement('li')
        elLi.className = 'dogs-list__button'
        elLi.textContent = dog.name
        dogList.append(elLi)

        elLi.addEventListener('click', function () {
            displayDog(dog)
        })
    }
}

function displayDog(dog) {

    dogSection.textContent = ''

    let titleH2 = document.createElement('h2')
    titleH2.textContent = dog.name

    let dogImg = document.createElement('img')
    dogImg.src = dog.image
    dogImg.alt = ''

    let textDiv = document.createElement('div')
    textDiv.className = 'main__dog-section__desc'

    let textH3 = document.createElement('h3')
    textH3.textContent = 'Bio'

    let textP = document.createElement('p')
    textP.textContent = dog.bio

    let isNaughty = document.createElement('p')
    let isNaughtyEm = document.createElement('em')
    isNaughtyEm.textContent = 'Is naughty?'
    if (dog.isGoodDog === false) {
        isNaughty.append(isNaughtyEm, ' Yes!')
    } else {
        isNaughty.append(isNaughtyEm, ' No!')
    }

    let dogButton = document.createElement('button')
    dogButton.className = 'main__dog-section__btn'
    if (dog.isGoodDog) {
        dogButton.textContent = 'Good dog!'
    } else {
        dogButton.textContent = 'Bad dog!'
    }
    dogButton.addEventListener("click", function () {
        switchDog(dog)
        displayDog(dog)
    })
    textDiv.append(textH3, textP)
    dogSection.append(titleH2, dogImg, textDiv, isNaughty, dogButton)
}

function switchDog(dog) {
    dog.isGoodDog = !dog.isGoodDog

}

addDogListItem()

displayDog(data)