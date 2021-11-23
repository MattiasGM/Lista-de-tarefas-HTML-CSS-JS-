btnAddList.addEventListener('click', addList)

let lista = document.querySelector('ul#lista')

let todoObjetctList = []

function addList() {
    let addTarefa = document.querySelector('input#addList').value

    if(addTarefa.length == 0) {
        alert('[ERRO] Caixa Vazia')
    } else {

            todoObjetctList.push(addTarefa)

            let tarefa = document.createElement('li')
            let delBtn = document.createElement('i')

            delBtn.classList.add("far", "fa-trash-alt")
            delBtn.setAttribute('data-id', objectList.id)

            tarefa.innerText = `${addTarefa}`
            tarefa.setAttribute('data-id', objectList.id)

            tarefa.appendChild(delBtn)
            lista.appendChild(tarefa)

            delBtn.addEventListener('click', function(e) {
                let delItem = e.target.getAttribute('data-id')
                lista.deleteElement(delItem)
            })

    }
}