const body = document.querySelector("body")
body.style = "text-align:center" 


const createHeading = document.createElement("h3")
createHeading.innerHTML = "I'am blue"
createHeading.style = "color:blue"
body.appendChild(createHeading)


const createParagraphElement = document.createElement("p")
createParagraphElement.innerText = "Hey I'm red!"
createParagraphElement.style = "color:red;font-size:30px"
body.appendChild(createParagraphElement)


const createNewDiv = document.createElement("div")
const createNewDivP = document.createElement("p")
const createNewDivh1 = document.createElement("h1")
const addDivH1 = createNewDiv.appendChild(createNewDivh1)
const addDivP = createNewDiv.appendChild(createNewDivP);
addDivH1.innerText = "Im in a div"
addDivP.innerText = "ME TOO!"
body.appendChild(createNewDiv)

//event listeners

const buttons = document.querySelectorAll("button")

buttons.forEach((button)=>{
    
    button.addEventListener("keydown",()=>{
        alert("Hello world!")
    })
})





