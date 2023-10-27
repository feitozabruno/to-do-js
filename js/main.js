const tasks = [];
const inputForm = document.getElementById("inputForm");

console.log(typeof []);

inputForm.addEventListener("input", () => {
  tasks.push({
    id: Date.now(),
    name: inputForm.value,
    complete: false,
  });
});

// - [] Armazenar o valor digitado no formuário em um array de objetos.
// - []
