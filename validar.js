const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  const password = document.getElementById('password').value;
  const confirmar = document.getElementById('confirmar').value;

  if (password !== confirmar) {
    Swal.fire({
  title: 'Error!',
  text: 'la contraseña no coincide',
  icon: 'error',
  confirmButtonText: 'Cool'
})
    event.preventDefault(); // evita que el formulario se envíe
  }
});
