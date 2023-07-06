const addCopy = () => {
const elements = document.getElementsByClassName('copy-capable');
for(let element of elements) {
    let text: string | null = element.innerHTML;

    if(element.getAttribute('value')) {
        text = element.getAttribute('value');
        console.log('using value property',text,element);
    } else {
        console.log(element);
    }

    element.appendChild(document.createElement('button'));

    (<HTMLButtonElement>element.lastChild).innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-copy</title><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" /></svg>';
    (<HTMLButtonElement>element.lastChild).addEventListener('click', () => {
        navigator.clipboard.writeText(text);
        console.log('copied',text);
    });

}

}
addCopy();