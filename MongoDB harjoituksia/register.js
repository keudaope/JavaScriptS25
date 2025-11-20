// register.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const messageDiv = document.getElementById('register-message');
  
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      messageDiv.textContent = '';
      messageDiv.className = 'message';
  
      const username = form.username.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value.trim();
  
      if (!username || !password) {
        messageDiv.textContent = 'Käyttäjänimi ja salasana ovat pakollisia.';
        messageDiv.classList.add('error');
        return;
      }
  
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
        });
  
        const data = await response.json();
  
        if (data.success) {
          messageDiv.textContent = data.message || 'Rekisteröinti onnistui!';
          messageDiv.classList.add('success');
          // Tyhjennetään lomake
          form.reset();
  
          // Halutessasi voit automaattisesti ohjata kirjautumissivulle:
          // window.location.href = 'login.html';
        } else {
          messageDiv.textContent = data.message || 'Rekisteröinti epäonnistui.';
          messageDiv.classList.add('error');
        }
      } catch (err) {
        console.error(err);
        messageDiv.textContent = 'Virhe palvelimeen yhdistäessä.';
        messageDiv.classList.add('error');
      }
    });
  });
  