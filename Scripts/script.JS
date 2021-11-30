btnAddList.addEventListener('click', addList)

let lista = document.querySelector('ul#lista')

let todoObjetctList = []

function addList() { //Adicionar tarefa à Lista
    let addTarefa = document.querySelector('input#addList').value

    if(addTarefa.length == 0) {
        alert('[ERRO] Caixa Vazia')
    } else if (inList(addTarefa, todoObjetctList)) {
        alert('[ERRO] Tarefa já Adicionada')
    } else {
            todoObjetctList.push(addTarefa)

            let tarefa = document.createElement('li')
            let delBtn = document.createElement('i')

            delBtn.classList.add("far", "fa-trash-alt")

            tarefa.innerText = `${addTarefa}`

            tarefa.appendChild(delBtn)
            lista.appendChild(tarefa)

    //------------------ REMOVER DA LISTA -----------------\\
            delBtn.addEventListener('click', function() {
                tarefa.remove()
                todoObjetctList.splice(todoObjetctList.indexOf(tarefa), 1)
            })
    
    //-------------- MARCAR CHECKED-CHECKOUT --------------\\
            tarefa.addEventListener('click', function() {
                if(tarefa.className == 'checked') {
                    tarefa.removeAttribute('class')
                } else {
                    tarefa.setAttribute('class', 'checked')
                }
            })
    }
}

function inList(t,l) {
    return l.indexOf(t) != -1 ? true : false
}