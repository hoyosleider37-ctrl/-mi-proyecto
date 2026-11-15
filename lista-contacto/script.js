function agregarContacto() {
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;

  if (nombre === "") {
    alert("Escribe un nombre");
    return;
  }

  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.textContent = nombre + " - " + telefono + " - " + correo;
  lista.appendChild(li);

  document.getElementById("nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("correo").value = "";
}