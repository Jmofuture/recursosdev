

//Funcion que captura el evento de seleccion 
 let selectGenre = document.getElementsByClassName("btn").addEventListener("click", (e) => {
   let option = e.target.value;
   setUrl(option)
 })
 
 
 //Funcion que recibe el evento y asigna a una variable la opcion seleccionada y a su vez asigna la url por defecto al cargar la pagina
 function setUrl(opt) {
   const optionUrls = {
     html:  "../json/html.json",
     css:  "../json/css.json",
     javascript:  "../json/js.json",
     vue: "../json/vue.json"

   }
   
   const urlDefault = "../json/html.json"
 selectUrl = optionUrls[opt];
 console.log(selectUrl, urlDefault)
 
 displayList(selectUrl, urlDefault)
 }