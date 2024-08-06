const texts = document.getElementById('text');
// const words = document.getElementsByClassName('word');
const words = document.getElementById('word')
const character = document.getElementById('char')

texts.addEventListener("keyup", ()=>{
    const  textValue = texts.value;
    let characters = textValue.length;
    character.innerHTML = characters;
    let word = textValue.split(' ');
    words.innerHTML = word.length;
})
