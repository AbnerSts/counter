/* Abner Dos Santos Almeida 76030 */
let count = 0

const value = document.getElementById("value")

const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")

decrease.addEventListener("click", function(){

count--
update()

})

increase.addEventListener("click", function(){

count++
update()

})

reset.addEventListener("click", function(){

count = 0
update()

})

function update(){

value.textContent = count

if(count > 0){

value.style.color = "green"

}

else if(count < 0){

value.style.color = "red"

}

else{

value.style.color = "#222"

}

}
