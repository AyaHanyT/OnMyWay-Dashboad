(function ($) {
  'use strict';
  $(function () {

    if ($('#circleProgress1').length) {
      var bar = new ProgressBar.Circle(circleProgress1, {
        color: '#001737',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#3A5ACD',
          width: 6
        },
        to: {
          color: '#3A5ACD',
          width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var V = Math.round(circle.value() * 100)

          var value = '<li>' + V + '% ذكر</li>';
          var otherValue = '<li> ' + (100 - V) + '% أنثى </li>';

          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + otherValue);
          }

        }
      });

      bar.text.style.position = 'relative';
      bar.animate(.65); // Number from 0.0 to 1.0

    }

    if ($('#circleProgress3').length) {
      var bar = new ProgressBar.Circle(circleProgress3, {
        color: '#001737',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#3A5ACD',
          width: 6
        },
        to: {
          color: '#3A5ACD',
          width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var V = Math.round(circle.value() * 100)

          var value = '<li>' + V + '% ذكر</li>';
          var otherValue = '<li> ' + (100 - V) + '% أنثى </li>';

          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + otherValue);
          }

        }
      });

      bar.text.style.position = 'relative';
      bar.animate(.65); // Number from 0.0 to 1.0

    }

    if ($('#circleProgress2').length) {
      var bar = new ProgressBar.Circle(circleProgress2, {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        trailColor: '#969696',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#0d6600',
          width: 6
        },
        to: {
          color: '#0d6600',
          width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var V = Math.round(circle.value() * 100)

          var value = '<li>' + V + '% سعودي</li>';
          var otherValue = '<li> ' + (100 - V) + '% غير ذلك </li>';

          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + otherValue);
          }

        }
      });

      bar.animate(.75); // Number from 0.0 to 1.0
    }

    if ($('#circleProgress4').length) {
      var bar = new ProgressBar.Circle(circleProgress4, {
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 6,
        trailWidth: 6,
        easing: 'easeInOut',
        trailColor: '#969696',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#0d6600',
          width: 6
        },
        to: {
          color: '#0d6600',
          width: 6
        },
        // Set default step function for all animate calls
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          var V = Math.round(circle.value() * 100)

          var value = '<li>' + V + '% سعودي</li>';
          var otherValue = '<li> ' + (100 - V) + '% غير ذلك </li>';

          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value + otherValue);
          }

        }
      });

      bar.animate(.75); // Number from 0.0 to 1.0
    }


  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });
  
  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });



  });
})(jQuery);

if ($('.auth').length) {
  const togglePassword = document.querySelector('#togglePassword');
  togglePassword.classList.add('fi-rr-eye')
  const password = document.querySelector("input[type='password']");
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fi-rr-eye');
    this.classList.toggle('fi-rr-eye-crossed');
  });
}

$(document).ready(function () {
  $('.dtBasicExample').DataTable();
  $('.dataTables_length').addClass('bs-select');
});

$('.dtBasicExample').DataTable( {
    ordering: false,
    responsive: true
} );

$('.remove-row').click(function () {
  $(this).parents('tr').remove();
});


$('.viewMore').click(function () {
  $(this).parent().children('p').toggleClass('more')
});





