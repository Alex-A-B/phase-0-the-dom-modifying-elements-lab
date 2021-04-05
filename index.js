// Write your code here!

//use querySelector to find element#ID then .remove() it

document.querySelector('main#main').remove();

// create a header var called newHeader that points to h1#victory
// remember to link it to the document first! 

const newHeader = document.createElement('h1');

newHeader.id = "victory"

newHeader.innerHTML = "Alex is the champion"