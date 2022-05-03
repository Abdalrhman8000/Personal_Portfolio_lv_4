//------------------ Set || Variables || Start --------------->
let type       = document.querySelector('.type');
let index      = 0;
let start      = 0;
let data       = ['Mike','Front End','Developer','And Ui/Ux','Disgner','The End',];
let word       = '';
let letter     = '';
//------------------ Set || Variables || End --------------->

//------------------ Typing || Function || Start --------------->
setTimeout(() => {
    typingFun();
},4500)
function typingFun(){

    type.classList.add("active_after_type");

    word   = data[index]
    letter = word.slice(0,start++);

    if(index == data.length-1)
    {
        index = 0 
    }

    if(word.length == letter.length)
    {
        start = 0;
        index++;
    }

    type.innerHTML = letter;

    setTimeout(typingFun,230);
}
//------------------ Typing || Function || End --------------->


