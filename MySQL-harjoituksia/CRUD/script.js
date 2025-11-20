// Tapahtumankäsittelijä lomakkeen lähettämiseen
document.getElementById('customerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Estää sivun uudelleenlatautumisen

    // Haetaan lomakkeen kenttien arvot
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Lähetetään tiedot API:lle
    fetch('api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'add', name, email, phone }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadCustomers(); // Päivitetään asiakaslista
            document.getElementById('customerForm').reset(); // Tyhjennetään lomake
        } else {
            alert('Error: ' + data.message);
        }
    });
});

// Lataa asiakkaat taulukkoon
function loadCustomers() {
    fetch('api.php?action=read')
        .then(response => response.json())
        .then(data => {
            const customerTable = document.getElementById('customerTable');
            customerTable.innerHTML = ''; // Tyhjennetään taulukko
            data.forEach(customer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${customer.name}</td>
                    <td>${customer.email}</td>
                    <td>${customer.phone}</td>
                    <td>
                        <button onclick="deleteCustomer(${customer.id})">Delete</button>
                        <button onclick="editCustomer(${customer.id})">Edit</button>
                    </td>
                `;
                customerTable.appendChild(row); // Lisätään rivi taulukkoon
            });
        });
}

// Poista asiakas
function deleteCustomer(id) {
    fetch('api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'delete', id }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadCustomers(); // Päivitetään asiakaslista
        } else {
            alert('Error: ' + data.message);
        }
    });
}

// Muokkaa asiakasta
function editCustomer(id) {
    const name = prompt('Enter new name:');
    const email = prompt('Enter new email:');
    const phone = prompt('Enter new phone:');
    if (name && email && phone) {
        fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ action: 'update', id, name, email, phone }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                loadCustomers(); // Päivitetään asiakaslista
            } else {
                alert('Error: ' + data.message);
            }
        });
    }
}

// Lataa asiakkaat alussa
loadCustomers();
