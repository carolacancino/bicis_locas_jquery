function validateForm(){
    
    var letrasnormales = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

    function Nombre(){
        
        var Nombre =$("#name").val();
        if(Nombre == null || Nombre.length == 0 || /^\s+$/.test(Nombre)) {
            var mensaje = "Ingrese su nombre";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        }

       else if(!letrasnormales.test(Nombre)){
            var mensaje = "Ingrese solo letras";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        } 
        else if (Nombre.charAt(0) != Nombre.charAt(0).toUpperCase()) {
            var mensaje = "Debe comenzar con mayusculas";
            var span = $("#name").parent().append("<span>" + mensaje + "</span>");
        }
        
    }
    Nombre();

    function apellido(){
        var apellido = $('#lastname').val();
        if(apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
            var mensaje = "Ingrese su apellido";
            var span = $("#lastname").parent().append("<span>" + mensaje + "</span>");
            return false;
        }

        else if(!letrasnormales.test(apellido)){
            var mensaje = "Ingrese solo letras ";
            var span = $("#lastname").parent().append("<span>" + mensaje + "</span>");
        }
           
        else if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
            var mensaje = "Debe comenzar con mayusculas";
            var span = $("#lastname").parent().append("<span>" + mensaje + "</span>");
        }    
    }
    apellido();

    function correo(){
        var caracteres = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        var correo = $('#input-email').val();
        /*var correo = document.getElementById('input-email').value;*/
        if(correo === null || correo.length === 0){
            var mensaje = "Ingrese su correo electronico";
            var span = $('#input-email').parent().append("<span>" + mensaje + "</span>");
        }
       else if(caracteres.test(correo)){
            var mensaje = "Verifique su correo electronico'";
            var span = $('#input-email').parent().append("<span>" + mensaje + "</span>");
        }
    }
    correo();

    function contras(){

        var contras = $('#input-password').val();
        if(contras == null || contras.length === 0){
            var mensaje = "Ingrese una contraseña";
            var span = $('#input-password').parent().append("<span>" + mensaje + "</span>");
        } 
        else if (contras.length < 6) {
            var mensaje = "La contraseña tiene que ser minimo de 6 letras";
            var span = $('#input-password').parent().append("<span>" + mensaje + "</span>");
        }
    }
    contras();

    function tipoBici(){
      var tipoBici = $('select').val();
      if(tipoBici == 0){
        var mensaje = "selecciona una opcion";
        $('select').parent().append("<span>" + mensaje + "</span>");
      }
    }
    tipoBici();
}

validateForm();
