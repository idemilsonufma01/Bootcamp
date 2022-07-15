

const inputTarefa = document.querySelector(".tarefa");
const addbtn = document.querySelector(".button");
const checkbox = document.querySelector(".checkbox");



const criarLabel = () => {
    const item = document.createElement('label');
    item.classList.add('label');

   const textItem = document.createElement('INPUT');
   textItem.setAttribute("type", "checkbox" );
   const itemDiv = document.createElement('div');
   itemDiv.id = "blocoDiv";
   item.id = 'blocoInput';
   item.appendChild(textItem);
   item.appendChild(itemDiv);
   checkbox.appendChild(item);
   itemDiv.innerText = inputTarefa.value;
   
   
}
