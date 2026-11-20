document.getElementById("agregarBtn").addEventListener("click", function() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const genero = document.querySelector('input[name="genero"]:checked');

  if (nombre === "" || apellido === "") {
    alert("Escribe al menos nombre y apellido");
    return;
  }

  const lista = document.getElementById("listaContactos");
  const li = document.createElement("li");
  li.innerHTML = `<b>${nombre} ${apellido}</b> - ${telefono} - ${ciudad} - ${direccion} - ${genero ? genero.value : ""} <button>❌</button>`;

  li.querySelector("button").addEventListener("click", function() {
    li.remove();
  });

  lista.appendChild(li);

  // limpiar
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("ciudad").value = "";
  document.getElementById("direccion").value = "";
});