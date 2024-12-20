
const typed= new Typed('.multiple-text',{
    strings:['Full Stack Developer','Full Stack Developer','Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});

let snow = () => {

    let size=Math.random()*12
    let duration=Math.random()*3
    let sec = document.getElementById('homesec')
    let e = document.createElement('div')
    e.setAttribute('class', 'circle')
    sec.appendChild(e)

    e.style.width=2+size+'px'
    e.style.left=Math.random()*+90+"%"
    e.style.animationDuration=2+duration+'s'
    setTimeout(function () {
        sec.removeChild(e)
    }, 8000)

}

setInterval(snow, 200)
let delboo=false
const del=()=>{
    let del1=document.getElementById('about-del1')
    let del2=document.getElementById('about-del2')
    if(delboo){
        del1.setAttribute("class","del")
        del2.removeAttribute("class","del")
        delboo=false
    }
    else{
        del2.setAttribute("class","del")
        del1.removeAttribute("class","del")
        delboo=true
    }
}
setInterval(del,6000)
