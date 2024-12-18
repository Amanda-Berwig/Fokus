const btnAddTarefa = document.querySelector(".app__button--add-task");
const formAddTarefa = document.querySelector(".app__form-add-task");
const textArea = document.querySelector(".app__form-textarea");

const tarefas = JSON.parse(localStorage.getItem("tarefas")); // JSON.parse faz o processo inverso do stringfy
function criarElementoTarefa() {
    const li = document.createElement("li");
    li.classList.add("app__section-task-list-item");

    const svg = document.createElement("svg");
    svg.innerHTML = `
        <svg>
            <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
                <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
            </svg>
        </svg>`

    const paragrafo = document.createElement("p");
    paragrafo.textContent = tarefa.descricao;
    
    const button = document.createElement("button");
    const imagemBotao = document.createElement("img");
    imagemBotao.src = "/imagens/edit.png"
    button.append(imagemBotao);
    li.append(svg,paragrafo,button);
}



btnAddTarefa.addEventListener("click",() => {
    formAddTarefa.classList.toggle("hidden");
})

formAddTarefa.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    const tarefa = {
        descricao: textArea.value,//pegando o valor digitado no textarea(descrição da tarefa);
    }
    tarefas.push(tarefa);
    localStorage.setItem('tarefas',JSON.stringify(tarefas)); //API JSON que transforma o array de objetos em string
    
});