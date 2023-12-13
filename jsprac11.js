const logger = () => {
    console.log('Тест')
}

const inner = () => {
    document.querySelector('.forInner').insertAdjacentHTML('beforeend', `<p>ОтработалИннер</p>`)
}


const alerter = () => {
    let a = document.querySelector('input').value
    alert(a)
}

const downer = () => {
    document.querySelector('.forInner').insertAdjacentHTML('beforeend', `<p>Мышь Нажата</p>`)
}

const upper = () => {
    document.querySelector('.forInner').insertAdjacentHTML('beforeend', `<p>Мышь отжата</p>`)
}


document.querySelector('.cl').addEventListener('mouseover', logger)
document.querySelector('.cl2').addEventListener('contextmenu', inner)
document.querySelector('.cl3').addEventListener('click', alerter)
document.querySelector('.forInner').addEventListener('mouseup', upper)
document.querySelector('.forInner').addEventListener('mousedown', downer)