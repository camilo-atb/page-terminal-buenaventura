const pass = document.getElementById("pass"), 
    icon = document.querySelector(".bx");

const iconoHamburguesa = document.querySelector(".icono__hamburguesa");
const menuNavegacion = document.querySelector(".menu__navegacion");

function eventoIconoHamburguesa(e){
    iconoHamburguesa.classList.toggle("icono__hamburguesa--active");
    menuNavegacion.classList.toggle("menu__navegacion--active");
}


iconoHamburguesa.addEventListener("click", eventoIconoHamburguesa);

icon.addEventListener("click", e => {
        if (pass.type === "password") {
            pass.type = "text";
        } else {
            pass.type = "password"
        }
})

