//------------------ Set || Variables || Start --------------->
let form_inp    = document.querySelectorAll('.contcat_form form input')
let form_btn    = document.querySelector('.contcat_form form button')
let formarea    = document.querySelector('.contcat_form form textarea')
let valid       = document.querySelector('.valid');
//------------------ Show || List || Function || End --------------->

//------------------ Contact || Valid || Check || Function || Start --------------->

form_btn.addEventListener('click',(e) => {
    e.preventDefault();
    if(form_inp[0].value.length == 0 || form_inp[0].value.length < 4)
    {
        valid.innerHTML = 'Please Inter Correct User Name';
        valid.classList.add('active_valid_1');

    }else if(form_inp[1].value.length == 0 || form_inp[1].value.length < 4)
    {
        valid.innerHTML = 'Please Inter Correct E-mail';
        valid.classList.add('active_valid_1');

    }else if(form_inp[1].value.indexOf('@') == -1 || form_inp[1].value.indexOf('.com') == -1)
    {
        valid.innerHTML = 'Please Inter Correct E-mail@.com';
        valid.classList.add('active_valid_1');
    }else if(formarea.value.length == 0 || formarea.value.length < 40)
    {
        valid.innerHTML = 'Please Inter Correct Massage It Mast Be 50 Word';
        valid.classList.add('active_valid_1');
    }else
    {
        valid.classList.remove('active_valid_1');
        valid.classList.add('active_valid_2');
        valid.innerHTML = 'Your Massage Has Been Send Succsufully';
        form_inp.forEach(s => s.value = '');
        formarea.value = '';
        setTimeout(() => {
            valid.classList.remove('active_valid_2');
        },2000)
    }

    setTimeout(() => {
        if(valid.classList.contains('active_valid_1'))
        {
            valid.classList.remove('active_valid_1');
        }
    },1500)
    
})


//------------------ Contact || Valid || Check || Function || End --------------->
