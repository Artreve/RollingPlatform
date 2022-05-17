let usuario = JSON.parse(localStorage('user')) || null //porque no hay usuarios logueado
 let contenedorLista =document.getElementById('menu_lista');
if (usuario){
     if(usuario.rol === 'admin'){
         let item = document.createElement('li')
         item.classList='nav-item';
         let option = `<a class="nav-link" aria-current="pague" href="./admin.html">Administracion</a>`;
        item.innerHTML=option;
        contenedorLista.appendChild(item);
     }
 }