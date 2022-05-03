//------------------ Set || Variables || Start --------------->
let port_cont       = document.querySelectorAll('.port_cont');
let catogrey        = document.querySelector('.catogrey');
let catogrey_img    = document.querySelector('.catogrey img');
let catogrey_right  = document.querySelector('.fa-chevron-right');
let catogrey_left   = document.querySelector('.fa-chevron-left');
let close_2         = document.querySelector('.fa-close_2');
let start_img_num;
let images_data     = [

    '../images/Portoflio/1.jpg',
    '../images/Portoflio/2.jpg',
    '../images/Portoflio/3.jpg',
    '../images/Portoflio/4.jpg',
    '../images/Portoflio/5.jpg',
    '../images/Portoflio/6.jpg'

];
//------------------ Set || Variables || End --------------->

//----------------- Show || Catogrey || Items || Start  --------------------->
port_cont.forEach((i,d) => {
    i.addEventListener('click',() => {
        start_img_num = d;
        //--------- Start || Index ----------->
        catogrey.style.display = 'flex';
//--------- Show Catogrey ---------------->
        catogrey_img.src = images_data[start_img_num];
//----------------- Add || Image || Src || With || Index ---------->
        catogrey_img.classList.add('top_animate');
        //------ Add || Animation || Top --------->

        setTimeout(() => {
        catogrey_img.classList.remove('top_animate');
        },800)
        //------ Remove || Animation || Top --------->

        incrase_num(start_img_num);
        //---------- Send || Data ------------>

        unincrase_num(start_img_num)
        //---------- Send || Data ------------>

    })
})
//----------------- Show || Catogrey || Items || End  --------------------->

//----------------- Change || Image || - || Start  --------------------->
function incrase_num(start_img_num){

    catogrey_right.addEventListener("click",() => {
        start_img_num++;
        //------ Start || Index-- --------->
        catogrey_img.src = images_data[start_img_num];
        //------ Change || images || With  || Index --------->

        unincrase_num(start_img_num)
        //---------- Send || Data ------------>
        catogrey_img.classList.add('right_animate');

        //------ Add || Animation || Left --------->

        setTimeout(() => {
        catogrey_img.classList.remove('right_animate');
        },800)
        //------ Remove || Animation || Left --------->

        //------ Check || Images || Exiest --------->
        if(start_img_num  > 5)
        {
            catogrey.style.display = 'none';
            catogrey_img.src = images_data[5];
        }else
        {
            catogrey.style.display = 'flex';
        }
        //------ Check || Images || Exiest --------->
    });

}
//----------------- Change || Image || - || End  --------------------->

//----------------- Change || Image || - || Start  --------------------->
function unincrase_num(start_img_num){

    catogrey_left.addEventListener("click",() => {
        start_img_num--;
        //------ Start || Index-- --------->
        catogrey_img.src = images_data[start_img_num];
        //------ Change || images || With  || Index --------->

        incrase_num(start_img_num)
        //---------- Send || Data ------------>
        catogrey_img.classList.add('left_animate');

        //------ Add || Animation || Left --------->

        setTimeout(() => {
        catogrey_img.classList.remove('left_animate');
        },800)
        //------ Remove || Animation || Left --------->

        //------ Check || Images || Exiest --------->
        if(start_img_num  < 0)
        {
            catogrey.style.display = 'none';
            catogrey_img.src = images_data[0];
        }else
        {
            catogrey.style.display = 'flex';
        }
        //------ Check || Images || Exiest --------->
    });

}
//----------------- Change || Image || - || End  --------------------->


//----------------- Hiide || Catogrey || Items || Start  --------------------->
close_2.addEventListener('click',() => {
    catogrey.style.display = 'none';
    catogrey_img.src = images_data[0];
})
//----------------- Hiide || Catogrey || Items || End  --------------------->

