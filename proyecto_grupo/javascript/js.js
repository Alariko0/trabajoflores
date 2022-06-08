function validarformulario(nombre, apellido, telefono, email) {
    if (nombre||apellido||telefono||email)
        alert('INTRODUCE TODOS LOS CAMPOS')
}
function displayimg(box){
    var floresimg= new Array(5);
    floresimg[0]="C:\Users\manana\Documents\proyecto_grupo\imagenes\rosas_blancas.jpg";
    floresimg[1]="C:\Users\manana\Documents\proyecto_grupo\imagenes\rosas_multi.jpg";
    floresimg[2]="C:\Users\manana\Documents\proyecto_grupo\imagenes\rosas_amarillas.jpg";
    floresimg[3]="C:\Users\manana\Documents\proyecto_grupo\imagenes\rosas_rosas.jpg";
    floresimg[4]="C:\Users\manana\Documents\proyecto_grupo\imagenes\rosas_rojas.jpg";
    document.getElementById('flores').scr=
    floresimg[parseInt(box.value)];
}