showNotes();
var addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click",function(e)
{
    var addTxt = document.getElementById("addtxt");
    var notes = localStorage.getItem ("notes");//
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.push(addTxt.innerText);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value=" ";
    showNotes(); //fun to show 
}
);


function showNotes(){
    var notes = localStorage.getItem ("notes");//
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    let html =" ";
    notesObj.forEach(function (element,index) {

        html += `<div class="noteCard card">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onClick="deleteNote(this.id)" class= "btn btn-danger">delete</button>
        </div>
    </div>`
        
    });

    var notesElm = document.getElementById("notes");
    if(notesObj.length !=0){
       notesElm.innerHTML = html; 
    }
    else{
        notesElm.innerHTML = "create"
    }

}
 //delete

 function deleteNote(index){
    var notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj = [];
    }
    else{
        notesObj =JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
 }