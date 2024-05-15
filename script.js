counter = 0; 
function first(){ 
    let h5 = document.getElementById("title") 
    let firstInput = document.getElementById("firstInput") 
    if(counter == 0){ 
        counter++; 
 
        let text = firstInput.value 
 
        if(text == "keep") 
            h5.innerHTML = "Your mom will swear or be disenchanted with you and you won't be in the mood for the rest of the day, but if your mom doesn't care, then everything is fine." 
        else if(text == "fix") 
            h5.innerHTML = "You won't be able to fix it, because your teacher is Talgat Polatovich, so you anyways will have bad mark." 
    } 
        firstInput.remove() 
        newImg = document.createElement("img") 
        newImg.id = "newImg"; 
        newImg.style.width = "500px"; 
        newImg.style.borderRadius = "15px"; 
        newImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvglN8E_CJnp-3NibV5zyarz-xnbz2Yh_-A&s") 
        let a = [ 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfpVgbBffql2v0YMHcrm3xJIADNO03NWzdWg&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCS5q2oLNFpPC23Wo0Hmo4MResuaP7Zyk8A&s", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcn97WRB1LLB2id26vWx2EIiwe1NK17dMIeA&s", 
        ] 
        for(let i = 0; i < 100; i++){ 
            newImg2 = newImg.cloneNode(true)             
            newImg2.setAttribute("src", a[i%3]) 
            gameBox.appendChild(newImg2) 
        } 
    } 
