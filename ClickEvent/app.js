//select the elements that are being affected by JS from the HTML file
const monkeyEmoji = document.querySelector('.monkey')
const apeEmoji = document.querySelector('.ape')

//Add event listener
monkeyEmoji.addEventListener('click', () => {
    if (ape.classList.contains('ape')) {
        ape.classList.add('active');
        monkey.classList.remove('active');
    }
})

apeEmoji.addEventListener('click', () => {
    if (monkey.classList.contains('monkey')) {
        monkey.classList.add('active');
        ape.classList.remove('active');
    }
})