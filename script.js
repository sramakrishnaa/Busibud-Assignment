
window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.feahead');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.feacol');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.feaimgcol');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.itemimgrow');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.itemimgrow2');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function () {
    const educon = document.querySelectorAll('.footercol');
    educon.forEach(educon => {
        const colDivPosition = educon.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;
        if (colDivPosition < screenHeight) {
            educon.classList.add('active');
        }
    });
});