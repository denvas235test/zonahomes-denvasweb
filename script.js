(function () {
  var form = document.getElementById('quote-form');
  var status = document.getElementById('form-status');
  var submit = document.getElementById('form-submit');
  var service = document.getElementById('f-service');

  // Links such as "Get a quote" on a service card pre-select that service in the form.
  document.querySelectorAll('a[data-service]').forEach(function (link) {
    link.addEventListener('click', function () {
      var wanted = link.getAttribute('data-service');
      for (var i = 0; i < service.options.length; i++) {
        if (service.options[i].text === wanted) { service.selectedIndex = i; break; }
      }
    });
  });

  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    status.className = 'form-status';
    status.textContent = 'Sending...';
    submit.disabled = true;

    fetch(form.action, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (result) {
        if (result.ok && result.data && result.data.success) {
          form.reset();
          status.className = 'form-status is-ok';
          status.textContent = 'Thanks, we got your request. We will call you back soon.';
        } else {
          throw new Error('Request failed');
        }
      })
      .catch(function () {
        status.className = 'form-status is-error';
        status.textContent = 'The form did not send. Please call (863) 449-1949 or try again.';
      })
      .then(function () { submit.disabled = false; });
  });
})();
