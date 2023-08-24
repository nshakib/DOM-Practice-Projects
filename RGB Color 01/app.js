/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

//steps

//steps 1 - create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');

    btn.addEventListener('click', () =>{
        const bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor; 
    })
}

//steps 2 - random color generator function
function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

//steps 3 - collect all necessary references

//steps 4 - handle the click event 