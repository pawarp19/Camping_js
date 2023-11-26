/*=============== SHOW MENU ===============*/
const navmenu=document.getElementById('navmenu');
const navtoogle=document.getElementById('navtoogle');
const navclose=document.getElementById('navclose');
if(navtoogle){
    navtoogle.addEventListener('click',()=>{
        navmenu.classList.add('showmenu');
    })
}

if(navclose){
    navclose.addEventListener('click',()=>{
        navmenu.classList.remove('showmenu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink=document.querySelectorAll('.navlink');

const linkact=()=>{
    const navmenu=document.getElementById('navmenu');
    navmenu.classList.remove('showmenu');
}

navlink.forEach(n=>n.addEventListener('click',linkact));

/*=============== CHANGE BACKGROUND HEADER ===============*/

const bgheader=()=>{
    const header=document.getElementById('header');
    this.scrollY >=50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

/*=============== GSAP ANIMATION ===============*/
gsap.from('.homeimg2',1.2,{opacity:0,y:200,delay:.1})
gsap.from('.homeimg3',1.2,{opacity:0,y:200,delay:.5})
gsap.from('.hometitle',1.2,{opacity:0,y:-60,delay:1})
gsap.from('.homebird1',1.2,{opacity:0,x:-80,delay:1.1})
gsap.from('.homebird2',1.2,{opacity:0,x:80,delay:1.3})
gsap.from('.homeimg1',1.2,{opacity:0,y:150,delay:1.3})
gsap.from('.homeimg4',1.2,{opacity:0,x:200,delay:1.4})
