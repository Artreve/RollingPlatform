let usuarios =JSON.parse(localStorage.getItem('usuarios'))||[];
function handleSubmit(e){
    e.preventDefault();
    let email = document.querySelector('#text_email').value;
    let pass = document.querySelector('#text_password').value;
     //buscar email en el arreglo
     let validar = usuarios.find((user)=>{
        return user.email === email; //el find devuelve todos los datos
     })
     if(validar){
         if(validar.password === pass){
             localStorage.setItem('user', JSON.stringify(validar));//guardamos al usuario
             location.replace('../pages/home.html');//lo rediregimos a home
         }else{
             alert('El correo o el password es incorrecto');
         }
     }else{
        alert('El correo o el password es incorrecto'); //si el correo esta mal 
     }
}

document.getElementById('formulario').addEventListener('submit',handleSubmit);