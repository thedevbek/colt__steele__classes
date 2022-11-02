
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', () => {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})




const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    this.randomColor =  (r * 0.299 + g * 0.587 + b * 0.114)
    if(this.randomColor > 186) {
        this.randomColor = 'black';
    } else {
        this.randomColor = 'white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}

