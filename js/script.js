//Asad

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}


// Owais

const trigger = document.querySelector('#trigger');

const back = document.querySelector('.back');

const closeBtn = document.querySelector('.close');

console.log('trigger, back', trigger, back)


trigger.addEventListener('click', function() {
    console.log('trigger')
    openModal();
})

closeBtn.addEventListener('click', function() {
    closeModal();
})


back.addEventListener('click', function(e) {
    console.log('trigger')
    if (e.target !== this) return;
    closeModal();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();

    }

})

function openModal() {
    back.classList.add('active');
}


function closeModal() {
    back.classList.remove('active');
}
// ----------------------------------
const trigger1 = document.querySelector('#trigger1');

const back1 = document.querySelector('.back1');

const closeBtn1 = document.querySelector('.close1');


trigger1.addEventListener('click', function() {
    openModal1();
})

closeBtn1.addEventListener('click', function() {
    closeModal1();
})
back1.addEventListener('click', function(e) {
    if (e.target !== this) return;
    closeModal1();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal1();

    }

})

function openModal1() {
    back1.classList.add('active');
}


function closeModal1() {
    back1.classList.remove('active');
}
// ----------------------------------
const trigger2 = document.querySelector('#trigger2');

const back2 = document.querySelector('.back2');

const closeBtn2 = document.querySelector('.close2');


trigger2.addEventListener('click', function() {
    openModal2();
})

closeBtn2.addEventListener('click', function() {
    closeModal2();
})
back2.addEventListener('click', function(e) {
    if (e.target !== this) return;
    closeModal2();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal2();

    }

})

function openModal2() {
    back2.classList.add('active');
}


function closeModal2() {
    back2.classList.remove('active');
}
// ----------------------------------
const trigger3 = document.querySelector('#trigger3');

const back3 = document.querySelector('.back3');

const closeBtn3 = document.querySelector('.close3');


trigger3.addEventListener('click', function() {
    openModal3();
})

closeBtn3.addEventListener('click', function() {
    closeModal3();
})
back3.addEventListener('click', function(e) {
    if (e.target !== this) return;
    closeModal3();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal3();

    }

})

function openModal3() {
    back3.classList.add('active');
}


function closeModal3() {
    back3.classList.remove('active');
}
// ----------------------------------
const trigger4 = document.querySelector('#trigger4');

const back4 = document.querySelector('.back4');

const closeBtn4 = document.querySelector('.close4');


trigger4.addEventListener('click', function() {
    openModal4();
})

closeBtn4.addEventListener('click', function() {
    closeModal4();
})
back4.addEventListener('click', function(e) {
    if (e.target !== this) return;
    closeModal4();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal4();

    }

})

function openModal4() {
    back4.classList.add('active');
}


function closeModal4() {
    back4.classList.remove('active');
}
// ----------------------------------
const trigger5 = document.querySelector('#trigger5');

const back5 = document.querySelector('.back5');

const closeBtn5 = document.querySelector('.close5');


trigger5.addEventListener('click', function() {
    openModal5();
})

closeBtn5.addEventListener('click', function() {
    closeModal5();
})
back5.addEventListener('click', function(e) {
    if (e.target !== this) return;
    closeModal5();
})

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal5();

    }

})

function openModal5() {
    back5.classList.add('active');
}


function closeModal5() {
    back5.classList.remove('active');
}
//js toggle

$(document).ready(function() {
    $("#morebtn").click(function() {

        $("#tago").fadeToggle("slow");

    });
});