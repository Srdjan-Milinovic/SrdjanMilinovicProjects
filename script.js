const addButton=document.querySelector("#add");

addButton.addEventListener("click", ()=> {
    addContent ();
});

const todoList=[]; 
renderContent ();

function renderContent () {

    let textField='';

    for (let i=0;i<todoList.length;i++) {
        const todo=todoList[i];
        const {inputText, inputDate} = todo;
        const html=`<div><p>${inputText}</p> <p>${inputDate}</p> <button onclick="todoList.splice(${i},1); renderContent ();">Delete</button></div>`;
        textField+=html;
    }
    document.querySelector(".text").innerHTML=textField;
}

function addContent () {

    const input1= document.querySelector("#input-text");
    const inputText= input1.value;
    const input2= document.querySelector("#input-date");
    const inputDate= input2.value;
    todoList.push({inputText,inputDate});
    input1.value='';
    renderContent();
}

