const button = document.querySelector('.submit')
const displayArea = document.querySelector('.school-name-disp')
const displayText = document.querySelector('#school-name')

const display = ()=>{
    console.log('hjellasd');
    let inputValue = displayText.textContent;
    displayArea.innerHTML = inputValue;
}