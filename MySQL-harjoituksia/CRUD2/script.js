const dataTable = document.querySelector("#dataTable tbody");
const addForm = document.querySelector("#addForm");
const nameInput = document.querySelector("#name");

const fetchData = async () => {
    const response = await fetch("read.php");
    const data = await response.json();
    renderTable(data);
};

const renderTable = (data) => {
    dataTable.innerHTML = "";
    data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td><input type="text" value="${item.name}" data-id="${item.id}"></td>
            <td>
                <button class="update" data-id="${item.id}">Update</button>
                <button class="delete" data-id="${item.id}">Delete</button>
            </td>
        `;
        dataTable.appendChild(row);
    });
};

addForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = nameInput.value;
    await fetch("create.php", {
        method: "POST",
        body: new URLSearchParams({ name }),
    });
    nameInput.value = "";
    fetchData();
});

dataTable.addEventListener("click", async (e) => {
    if (e.target.classList.contains("update")) {
        const id = e.target.dataset.id;
        const name = e.target.parentElement.previousElementSibling.firstElementChild.value;
        await fetch("update.php", {
            method: "POST",
            body: new URLSearchParams({ id, name }),
        });
        fetchData();
    }

    if (e.target.classList.contains("delete")) {
        const id = e.target.dataset.id;
        await fetch("delete.php", {
            method: "POST",
            body: new URLSearchParams({ id }),
        });
        fetchData();
    }
});

fetchData();
