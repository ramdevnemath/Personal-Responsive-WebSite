/**
* PHP Email Form Validation - v3.5
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
/*(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                php_email_form_submit(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error)
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        php_email_form_submit(thisForm, action, formData);
      }
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
*/

    function namecheck() {
      let name = document.getElementById("name").value
      let nm = null
      nm = name.trim()
      var letters = /^[A-Za-z]+$/;
      var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
      document.getElementById("name").value = nm;
      if (nm == "" || name== null) {
        document.getElementById("namelabel").style.display = "block"
        return false
      }
      else if (!nm.match(letters)) {
        document.getElementById("namelabel").style.display = "none"
        document.getElementById("namelabel2").style.display = "block"
        return false
      }
      else if (nm.match(spc)) {
        document.getElementById("namelabel").style.display = "none"
        document.getElementById("namelabel2").style.display = "none"
        document.getElementById("namelabel3").style.display = "block"
        return false
      }
      else {
        document.getElementById("namelabel").style.display = "none"
        document.getElementById("namelabel2").style.display = "none"
        document.getElementById("namelabel3").style.display = "none"
        return true

      }
    }


    function emailcheck() {
      var val = document.getElementById("email").value
      var v = null
      v = val.trim()
      document.getElementById("email").value = v;
      if (v == "" || val == null) {
        document.getElementById("emaillabel").style.display = "block"
        return false
        }
      else if (!isNaN(v[0])) {
        document.getElementById("emaillabel").style.display = "none"
        document.getElementById("emaillabel2").style.display = "block"
        return false
      }
      else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
        document.getElementById("emaillabel").style.display = "none"
        document.getElementById("emaillabel2").style.display = "none"
        document.getElementById("emaillabel3").style.display = "block"
        return false
      }
      // alert("You have entered an invalid email address!")
      // return (false)
      else {
        document.getElementById("emaillabel").style.display = "none"
        document.getElementById("emaillabel2").style.display = "none"
        document.getElementById("emaillabel3").style.display = "none"
        return true

      }
    }

    function subcheck() {

      var val = document.getElementById("subject").value
      var v = null
      v = val.trim()
      document.getElementById("subject").value = v;
      var n = v.length
      console.log(n)
      if (v == "" || val == null) {
        document.getElementById("subjectlabel").style.display = "block"
        return false
      }
      else {
        document.getElementById("subjectlabel").style.display = "none"
        return true
      }
    }



