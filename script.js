tsParticles.load("particles", {

fullScreen:{enable:false},

particles:{

number:{
value:160
},

color:{
value:"#ffffff"
},

shape:{
type:"circle"
},

opacity:{
value:0.7
},

size:{
value:2
},

links:{
enable:true,
distance:130,
color:"#ffffff",
opacity:0.25,
width:1
},

move:{
enable:true,
speed:1.5
}

},

interactivity:{

events:{

onHover:{
enable:true,
mode:["grab","repulse"]
},

resize:true

},

modes:{

grab:{
distance:160,
links:{
opacity:0.6
}
},

repulse:{
distance:120,
duration:0.4
}

}

},

detectRetina:true

})

const btn=document.querySelector(".start-btn")

btn.addEventListener("mousemove",e=>{

const x=e.offsetX
const y=e.offsetY

btn.style.boxShadow=`
0 0 25px white,
${x-100}px ${y-25}px 60px rgba(255,255,255,.4)
`

})

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="0 0 25px white"

})

btn.addEventListener("click",()=>{

alert("Protocol Initialized")

})
