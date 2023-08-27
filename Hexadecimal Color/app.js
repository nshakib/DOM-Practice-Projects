/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 *
 */
 
//steps

//steps 1 - create onload handler
window.onload = ()=>{
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');

    btn.addEventListener('click', function(e) {

        const bgColor = generateHEXColor(); 
        root.style.backgroundColor =  bgColor;
        output.value = bgColor;
    })
}

//steps 2 - random color generator function

function generateHEXColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//steps 3 - collect all necessary references

//steps 4 - handle the click event 
