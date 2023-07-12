    const ulEl = document.getElementById("ul-el");
    let inputFruit = document.getElementById("fruit")
    let submitButton = document.getElementById("submit")
    let errorMsg = document.getElementById("error")
    let clearBtn = document.getElementById("clear")
    
    function handleSubmit() {
        errorMsg.textContent = ""
        fruit = inputFruit.value.trim()
    
        if(fruit === "") {
            errorMsg.textContent = "Please Input the field"
            return
        }

        favouriteFruits.push(fruit)
        localStorage.setItem("favouriteFruits", JSON.stringify(favouriteFruits));
      
        ulEl.innerHTML = ""
        console.log(favouriteFruits)
        console.log(favouriteFruits.length)
        for (let i = 0; i < favouriteFruits.length; i++) {
            ulEl.innerHTML += "<li>" + favouriteFruits[i] + "</li>";
        }
    }

    submitButton.addEventListener("click", function() {
        handleSubmit()
 })

 clearBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    favouriteFruits = []
    displayList()
})


 let favouriteFruits = JSON.parse(localStorage.getItem("favouriteFruits")) || [];

 function displayList() {
     ulEl.innerHTML = "";
     for (let i = 0; i < favouriteFruits.length; i++) {
       ulEl.innerHTML += "<li>" + favouriteFruits[i] + "</li>";
     }
   }
   displayList()
   
   




 
