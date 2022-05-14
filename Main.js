$(document).ready(function() {
 
    var form = $('#Formulario'),
        Email = $('#Email'),
        Topico = $('#td'),
        Message = $('#realmessage'),
        info = $('#info'),
        loader = $('#loader'),
        submit = $("#submit");
    
    form.on('input', '#Email, #realmessage, #td', function() {
      $(this).css('border-color', '');
      info.html('').slideUp();
    });
    
    submit.on('click', function(e) {
      info.html('Loading...').css('color', 'red').slideDown();
      e.preventDefault();
      if(validate()) {
        $.ajax({
          type: "POST",
          url: "enviar.php",
          data: form.serialize(),
          dataType: "json"
        }).done(function(data) {
          if(data.success) {
            Email.val('');
            Topico.val('');
            Message.val('');
            info.html('Messagem Enviada!').css('color', 'green').slideDown();
          } else {
            info.html('Email não foi enviado').css('color', 'red').slideDown();
          }
        });
      }
    });
    
    function validate() {
      var valid = true;
  
      
      return valid;
    }
   
  });