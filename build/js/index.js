let countEl = document.getElementById("count-el")//pass in arguments
let saveEl = document.getElementById("save-el")
let count = 0
console.log(saveEl)

function increment(){
count = count+1
countEl.textContent = count
console.log(count)
}


function save(){
let countstr = count + "-"
saveEl.textContent += countstr

countEl.textContent = 0
count = 0


}






