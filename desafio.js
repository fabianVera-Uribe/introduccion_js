var datos = {
  nombre: "Fabián",
  apelido: "Vera",
  "¿Eres desarrollador de aplicaciones web?": true,

}
url = "https://irp-cdn.multiscreensite.com/3af19a39/files/uploaded/EL%20HOMBRE%20MAS%20RICO%20DE%20BABILONIA%20-%20GEORGE%20S.%20CLASON%20-%2086%20PAGINAS%282%29.pdf"
datos.nacimiento = "28.04.1997"
datos.libroFavorito = {
  titulo: "El hombre más rico de Babilonia",
  autor:  "George S. Clason",
  fecha: 1926,
  url: url
}

datos.pasatiempos = ["Estudiar", "Leer", "Jugar"]
datos.funcion = function miActividadFavorita() {
  return "Estar con mi pareja"
}

console.table(datos)