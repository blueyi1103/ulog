'use strict';

import Blog from './blog/blog.js';

window.addEventListener('load' , () =>{   
    
	let bolg=Blog();
    
    document.getElementsByTagName('html')[0].style.height='100vh';
    
    document.body.style.height='100vh';
    document.body.style.margin='0';
    
	document.body.appendChild(h1);
});