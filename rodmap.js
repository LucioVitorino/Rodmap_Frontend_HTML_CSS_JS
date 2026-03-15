// selecionar todos os checkboxes
const tasks = document.querySelectorAll(".task");

// carregar progresso salvo
window.addEventListener("load", loadProgress);

// adicionar evento em cada tarefa
tasks.forEach((task, index) => {

    task.addEventListener("change", () => {

        saveProgress();
        updateProgress();

    });

});


// atualizar barra de progresso
function updateProgress()
{
    const total = tasks.length;
    let completed = 0;

    tasks.forEach(task => {

        if(task.checked)
        {
            completed++;
        }

    });

    const percent = (completed / total) * 100;

    document.getElementById("progress").style.width = percent + "%";
}



// salvar progresso no localStorage
function saveProgress()
{
    let progress = [];

    tasks.forEach(task => {

        progress.push(task.checked);

    });

    localStorage.setItem("roadmapProgress", JSON.stringify(progress));
}



// carregar progresso salvo
function loadProgress()
{
    const saved = localStorage.getItem("roadmapProgress");

    if(saved)
    {
        const progress = JSON.parse(saved);

        tasks.forEach((task, index) => {

            task.checked = progress[index];

        });
    }

    updateProgress();
}