
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';


const div = document.createElement('div');
div.classList.add('div');
div.textContent = 'Hey I’m red!';
div.style.cssText = 'color: red';      

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.textContent = 'I’m a blue h3!';
h3.style.cssText = 'color: blue';       

const div1 = document.createElement('div1');
div1.classList.add('div1');
div1.style.cssText = 'border-color: black; background-color: pink';      

const h1 = document.createElement('h1');
h1.classList.add('h1');
h1.textContent = 'I’m in a div';

const p = document.createElement('p');
p.classList.add('p');
p.textContent = 'ME TOO!';


container.appendChild(content);
container.appendChild(div);
container.appendChild(h3);

const div2 = document.querySelector('#container.div1');

div2.appendChild(div1);
div2.appendChild(h1);
div2.appendChild(p);



   
     /*
a <p> with red text that says 
an <h3> with blue text that says “”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container

*/
