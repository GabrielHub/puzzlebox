// Disable form submissions if there are invalid fields from w3schools
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        //check if correct text
        var user = $('#uname').val();
        var pass = $('#pwd').val();

        if (user === 'keyboardpapi@protonmail.com' && pass === 'agnes2019') {
          event.preventDefault();
          event.stopPropagation();

          ShowEmails();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

  
function ShowEmails() {
  $('#login').remove();

  $('.row #email').each(function() {
    $(this).addClass("d-block")

    $(this).addClass("animated fadeInUp");
  });
}