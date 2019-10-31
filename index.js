

///forloop

for (let i = 1; i <= 12; i++) {

    //    add one image
    let img = document.createElement('img');
    img.src = `./images/image${i}.jpg`;
    img.setAttribute('alt', `image${i}`);
    img.setAttribute('class', 'img')
    let imgCtn = document.getElementById(`image${i}`);
    imgCtn.appendChild(img);
}
const $Allimages = document.querySelectorAll(".image")
const $part2 = document.querySelector(".part2")
const $overlay = document.getElementById("overlay")
const $des =document.getElementById("des")

//overlay show and alt show
for (let $image of $Allimages) {
    $image.addEventListener("click", function (event) {
//        console.log(event.target.getAttribute('alt'))
        $overlay.classList.add("show")
        $overlay.innerHTML = `${event.target.getAttribute('alt')}`+`<img src="./images/large/${event.target.getAttribute('alt')}.jpg"> ` 
 
       
    })
}

//remove overlay
$overlay.addEventListener("click",function(e){
  $overlay.classList.remove("show")  
})
document.addEventListener("keydown",function(ev){
    $overlay.classList.remove("show")
})

