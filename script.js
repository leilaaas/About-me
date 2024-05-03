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

}