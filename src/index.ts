import createWittCode from './wittcepter';

// Add button
const myBtn: HTMLButtonElement = document.createElement('button');
myBtn.innerText = 'Add WittCepter hello how are';
myBtn.onclick = createWittCode;
document.body.appendChild(myBtn);