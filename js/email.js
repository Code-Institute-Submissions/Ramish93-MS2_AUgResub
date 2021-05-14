 $("#contact-form").submit(function (e) {
     e.preventDefault();
     emailjs.sendForm('service_l2rsbpu', 'template_pkpm2ad', '#contact-form')
         .then(function (response) {
             alert('SUCCESS!', response.status, response.text);
         }, function (error) {
             alert('FAILED...', error);
         });
 });