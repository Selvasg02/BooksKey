var popupoverlaypage = document.querySelector(".popup-overlay")
var popupbuttonpage = document.querySelector(".popup-box")
var addpopup = document.getElementById("add-pop-button")


addpopup.addEventListener("click" , function(){

    popupoverlaypage.style.display="block"
    popupbuttonpage.style.display="block"

})

var cancelbutton= document.getElementById("cancel")

cancelbutton.addEventListener("click", function(event){

    event.preventDefault()
    popupoverlaypage.style.display="none"
    popupbuttonpage.style.display="none"

})

var container= document.querySelector(".container")
var addbook = document.getElementById("add")
var booktitle= document.getElementById("booktitle")
var bookauthor= document.getElementById("bookauthor")
var description= document.getElementById("description")

addbook.addEventListener("click", function(event){

    event.preventDefault()
    var div= document.createElement("div")
    div.setAttribute("class", "sub-container")
    div.innerHTML=`<h2>
    ${booktitle.value}
    </h2>
    <h4>${bookauthor.value}</h4>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlaypage.style.display="none"
    popupbuttonpage.style.display="none"

})

function deletebook(event)
{
    event.target.parentElement.remove()
}





