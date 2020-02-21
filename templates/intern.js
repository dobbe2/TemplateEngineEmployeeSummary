function htmlIntern(data) {
    return `
<div class="col card">
    <div class="card" id="intern">
        <h4>Intern: ${data.name}</h4>
        <p>ID: ${data.id}</p>
        <p>Email: ${data.email}</p>
        <p>School: ${data.school}</p>
    </div>
</div>`
}

module.exports = htmlIntern