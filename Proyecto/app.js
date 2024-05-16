function mostrar(id) {
    const elemento = document.getElementById(id);
    // Verificar si el elemento está visible
    if (elemento.style.display === "none") {
        // Si está oculto, mostrarlo
        elemento.style.display = "block";
    } else {
        // Si está visible, ocultarlo
        elemento.style.display = "block";
    }
}

function mostrarOcultar(id) {
    const elemento = document.getElementById(id);
    // Verificar si el elemento está visible
    if (elemento.style.display === "none") {
        // Si está oculto, mostrarlo
        elemento.style.display = "block";
    } else {
        // Si está visible, ocultarlo
        elemento.style.display = "none";
    }
}

function parseCSV(csvData) {
    const rows = csvData.split("\n");
    const table = document.getElementById('csvTable');
    table.innerHTML = ''; // Limpiar tabla antes de agregar datos

    rows.forEach(row => {
        const columns = row.split(',');
        const tr = document.createElement('tr');
        columns.forEach(column => {
            const td = document.createElement('td');
            td.textContent = column;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}

function readCSV(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        const csvData = e.target.result;
        parseCSV(csvData);
    };
    reader.readAsText(file);
}

document.getElementById('inputCSV').addEventListener('change', function(e) {
    const file = e.target.files[0];
    readCSV(file);
});

// Esta función inserta una nueva fila en la tabla al final
function insertarFila() {
    const table = document.getElementById('csvTable');
    const newRow = table.insertRow();
    
    // Inserta celdas en la nueva fila y convierte cada celda en un campo de entrada de texto
    for (let i = 0; i < table.rows[0].cells.length; i++) {
        const cell = newRow.insertCell(i);
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Nuevo dato';
        cell.appendChild(input);
    }
}

function borrarFila() {
    const table = document.getElementById('csvTable');
    const lastRowIndex = table.rows.length - 1;
    if (lastRowIndex >= 0) {
        table.deleteRow(lastRowIndex);
    }
}
