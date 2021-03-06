class Curso {
    constructor(id, titulo, descripcion, imagen, mentor, precio=0){
        this.id=id;
        this.descripcion=descripcion;
        this.imagen=imagen;
        this.mentor=mentor;
        this.precio=precio;

    }
}

let cursos = JSON.parse(localStorage.getItem('cursos'))||[];
let tableBody = document.querySelector('#table_body');

let curso1 = new Curso(
  1,
  "Html5",
  "Curso básico de html 5 con buenas prácticas",
  "https://programacion.net/files/article/article_02174_.jpg",
  "Rocio Pereyra"
);
let curso2 = new Curso(
  2,
  "CSS de cero a experto",
  "Curso de CSS donde aprenderás todo lo necesario para crear estilos espectaculares para tus sitios webs",
  "https://www.solucionex.com/sites/default/files/posts/imagen/css_blog.png",
  "Daniel Pastoruti"
);
let curso3 = new Curso(
  3,
  "Javascript básico",
  "Aprende los fundamentos del lenguaje por excelencia de la web y crea aplicaciones interactivas",
  "https://www.adictosaltrabajo.com/wp-content/uploads/2018/05/el_remozado_javascript.imagen.jpg",
  "Ludovico Peluche"
);
// cursos.push(curso1,curso2,curso3);
// localStorage.setItem('cursos', JSON.stringify(cursos))

function agregarCurso(e){
    e.preventDefault();
    let id = new Date().getTime()
    let titulo = document.getElementById('titulo').value;
    let descripcion = document.getElementById('desc').value;
    let imagen = document.getElementById('imagen').value;
    let mentor = document.getElementById('mentor').value;
    let precio = document.getElementById('precio').value;
    cursos.push(new Curso(id,titulo,descripcion,imagen,mentor,precio))
    localStorage.setItem('cursos', JSON.stringify(cursos));
    document.getElementById('formulario').reset();
    document.getElementById('titulo').focus();
    cargarTabla();

}

const cargarTabla = () => {
  tableBody.innerHTML = "";

  cursos.map(function (curso, index) {
    let tr = document.createElement("tr");
    let celda = `<th scope="row">${index + 1}</th>
        <td>${curso.titulo}</td>
        <td>${curso.descripcion}</td>
        <td>${curso.mentor}</td>
        <td>${curso.precio}</td>`;

    tr.innerHTML = celda;
    tableBody.appendChild(tr);
  });
};
document.getElementById('formulario').addEventListener('submit',agregarCurso)







