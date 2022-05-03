//------------------ Set || Variables || Start --------------->
let bars = document.querySelector('.fa-bars');
let list = document.querySelector('.list');
let close = document.querySelector('.fa-close');
let mouse_move = document.querySelector('.mouse_move');
let mouse_circle_1 = document.querySelector('.mouse_circle_1');
let mouse_circle_2 = document.querySelector('.mouse_circle_2');
let load_animate_2 = document.querySelector('.load_animate');
let num = 0;
let load_animate_span = document.querySelector('.load_animate span');
let port_cont_images_pop = document.querySelectorAll('.port_cont');
let buttons = document.querySelectorAll('button');
let links = document.querySelectorAll('a');
let inputs = document.querySelectorAll('input');
let textarea = document.querySelectorAll('textarea');
let imgs = document.querySelectorAll('img');

//------------------ Show || List || Function || End --------------->


bars.addEventListener('click', () => {
    list.classList.add('active_list');
})
//------------------ Show || List || Function || End --------------->

//------------------ Hidde || List || Function || End --------------->
close.addEventListener('click', () => {
    list.classList.remove('active_list');
})
//------------------ Hidde || List || Function || End --------------->

//------------------ Mouse || Move || Function || Start --------------->
window.addEventListener('mousemove', (e) => {
    mouse_move.style.left = e.pageX + 'px';
    mouse_move.style.top = e.pageY + 'px';

    setTimeout(() => {
        mouse_circle_1.style.left = e.pageX + 'px';
        mouse_circle_1.style.top = e.pageY + 'px';
    }, 150)

    setTimeout(() => {
        mouse_circle_2.style.left = e.pageX + 'px';
        mouse_circle_2.style.top = e.pageY + 'px';
    }, 100)
})
//------------------ Mouse || Move || Function || End --------------->

//------------------ Load ||Animate || Function || Start --------------->
function load_animate() {
    setInterval(() => {
        if (num == 100) {
            load_animate_2.classList.add('hidde_load_animate');
            load_animate_span.innerHTML = '';
            port_cont_images_pop.forEach(s => s.classList.add('top_animate'));
        } else {
            num++;
            load_animate_span.innerHTML = num + '%';
        }
    }, 10)
}
load_animate();
//------------------ Load ||Animate || Function || End --------------->

//------------------ Mouse ||Circle || Animation || Effect || Start --------------->
buttons.forEach(s => {
    s.addEventListener('mouseenter', () => {
        mouse_circle_1.style.display = 'none';
        mouse_circle_2.classList.add('active_circle_2_op');
    })
});
buttons.forEach(s => {
    s.addEventListener('mouseleave', () => {
        mouse_circle_1.style.display = 'block';
        mouse_circle_2.classList.remove('active_circle_2_op');

    })
});
links.forEach(s => {
    s.addEventListener('mouseenter', () => {
        mouse_circle_1.style.display = 'none';
        mouse_circle_2.classList.add('active_circle_2_op');
    })
});
links.forEach(s => {
    s.addEventListener('mouseleave', () => {
        mouse_circle_1.style.display = 'block';
        mouse_circle_2.classList.remove('active_circle_2_op');

    })
});
inputs.forEach(s => {
    s.addEventListener('mouseenter', () => {
        mouse_circle_1.style.display = 'none';
        mouse_circle_2.classList.add('active_circle_2_op');
    })
});
inputs.forEach(s => {
    s.addEventListener('mouseleave', () => {
        mouse_circle_1.style.display = 'block';
        mouse_circle_2.classList.remove('active_circle_2_op');

    })
});
textarea.forEach(s => {
    s.addEventListener('mouseenter', () => {
        mouse_circle_1.style.display = 'none';
        mouse_circle_2.classList.add('active_circle_2_op');
    })
});
textarea.forEach(s => {
    s.addEventListener('mouseleave', () => {
        mouse_circle_1.style.display = 'block';
        mouse_circle_2.classList.remove('active_circle_2_op');

    })
});
imgs.forEach(s => {
    s.addEventListener('mouseenter', () => {
        mouse_circle_1.style.display = 'none';
        mouse_circle_2.classList.add('active_circle_2_op');
    })
});
imgs.forEach(s => {
    s.addEventListener('mouseleave', () => {
        mouse_circle_1.style.display = 'block';
        mouse_circle_2.classList.remove('active_circle_2_op');

    })
});
//------------------ Mouse ||Circle || Animation || Effect || End --------------->
