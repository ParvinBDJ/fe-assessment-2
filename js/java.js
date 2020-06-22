console.log('hoi');

const cursor = document.querySelector('.cursor');
const link = document.querySelectorAll('a');
const inactive = 'inactive';

function moveCursor(e){

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

}


document.addEventListener("mousemove", moveCursor);

