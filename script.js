const input = document.getElementById("tareaInput");
const agregarBtn = document.getElementById("agregarBtn");
const lista = document.getElementById("listaTareas");

function crearBoton(texto, accion) {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.onclick = accion;
  return btn;
}

function crearTarea() {
  const texto = input.value.trim();
  if (texto === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = texto;

  const btnCompletar = crearBoton("✔", () => {
    span.classList.toggle("completada");
  });

  const btnEditar = crearBoton("✏️", () => {
    const nuevoTexto = prompt("Edita tu tarea:", span.textContent);
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
      span.textContent = nuevoTexto.trim();
    }
  });

  const btnEliminar = crearBoton("❌", () => {
    li.remove();
  });

  li.append(span, btnCompletar, btnEditar, btnEliminar);
  lista.appendChild(li);
  input.value = "";
}

agregarBtn.addEventListener("click", crearTarea);