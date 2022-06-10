const MuestraM = document.querySelector('.MuestraM')
const modal = document.querySelector('.modal')
const CloseModal = document.querySelector('.modal-close')


MuestraM.addEventListener('click', () => {
    modal.classList.add('Seve')

    console.log('Sale');
})

CloseModal.addEventListener('click', () => {
    modal.classList.remove('Seve')

    console.log('Funciona');
})


/*-------*/

const lola = document.querySelector('.Lola')
const GD = document.querySelector('.GD')
const G = document.querySelector('.G')
const Viene = document.querySelector('.viene')

GD.addEventListener('click', () => {
    if (G.matches('.G')) {
        G.classList.add('.pone')
        G.classList.remove('.G')
            console.log('Okas');
    } else {
        
    }

})
console.log(lola);

lola.addEventListener('click', (e) =>{
 //   console.log(e.target);
    if (e.target.matches(".info")) {
        const img = e.target.parentElement.nextElementSibling
        const allInfo = e.target.parentElement.nextElementSibling.nextElementSibling

        img.classList.toggle('pone')
        allInfo.classList.toggle('pone')
    }
})


const modo = document.querySelector('.Modo')
const mn = document.querySelector('.Mn')

modo.addEventListener('click', (e) => {
    mn.classList.toggle('active')
})



/*-*/


const form = document.getElementById("recibe");
const alert = document.querySelector(".alert");
const inputName = form.name;
const inputEmail = form.email;
const inputArea = form.message;

const rexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const rexEmail =
/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const rexMessage = /^[\s\S]{5,255}$/;

const validar = (input, texto, expresion) => {
if (expresion.test(input.value)) {
input.classList.remove("error");
input.classList.add("success");
} else {
alert.classList.add("alertError");
alert.textContent = texto;

input.classList.remove("success");
input.classList.add("error");

setTimeout(() => {
alert.classList.remove("alertError");
alert.textContent = "";
}, 5000);
}
};

inputName.addEventListener("blur", () => {
validar(inputName, "este nombre es incorrecto", rexName);
});

inputEmail.addEventListener("blur", () => {
validar(inputEmail, "este email es incorrecto", rexEmail);
});

inputArea.addEventListener("blur", () => {
validar(inputArea, "este mensaje es incorrecto", rexMessage);
});

const send = () => {
fetch("https://formsubmit.co/ajax/Mcorporan536@gmail.com", {
method: "POST",
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
body: JSON.stringify({
name: inputName.value,
email: inputEmail.value,
message: inputArea.value,
}),
})
.then((response) => response.json())
.then((data) => {
inputName.classList.remove("success", "error");
inputEmail.classList.remove("success", "error");
inputArea.classList.remove("success", "error");
form.reset();
})
.catch((error) => console.log(error));
};

form.addEventListener("submit", (e) => {
e.preventDefault();
if (
rexName.test(inputName.value) &&
rexEmail.test(inputEmail.value) &&
rexMessage.test(inputArea.value)
) {
send();

}
});
