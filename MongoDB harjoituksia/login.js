// login.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const messageDiv = document.getElementById('login-message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      messageDiv.textContent = '';
      messageDiv.className = 'message';
  
      const username = form.username.value.trim();
      const password = form.password.value.trim();
  
      if (!username || !password) {
        messageDiv.textContent = 'Anna käyttäjänimi ja salasana.';
        messageDiv.classList.add('error');
        return;
      }
  
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (data.success) {
          // Onnistunut kirjautuminen -> ohjataan esim. welcome.html-sivulle
          window.location.href = 'welcome.html';
        } else {
          // Väärä käyttäjä tai salasana -> pysytään kirjautumissivulla
          messageDiv.textContent = data.message || 'Virheellinen käyttäjänimi tai salasana.';
          messageDiv.classList.add('error');
  
          // Halutessasi voit tyhjentää salasanakentän:
          form.password.value = '';
        }
      } catch (err) {
        console.error(err);
        messageDiv.textContent = 'Virhe palvelimeen yhdistäessä.';
        messageDiv.classList.add('error');
      }
    });
  });
  