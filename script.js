let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop;
         let height = sec.offsetheight;
         let id = sec.getAttribute('id');

        if(top >=offset && top < offset + height) {
             navLink.forEach(link =>{
                links.classList.remove('active');
                document.cuerySelector('header nav a [href =' + id + ']').classList.add('hover');
             });
        };
    });
};













