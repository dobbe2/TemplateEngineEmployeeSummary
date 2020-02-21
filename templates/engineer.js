function htmlEngineer(data) {
    return `
<div class="col card">
    <div class="card" id="engineer">
        <h4>Engineer: ${data.name}</h4>
        <p>ID: ${data.id}</p>
        <p>Email: ${data.email}</p>
        <p>GitHub: ${data.github}</p>
    </div>
</div>`
}

module.exports = htmlEngineer