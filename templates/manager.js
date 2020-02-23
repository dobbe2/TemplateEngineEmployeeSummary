function htmlManager(data) {
    return `
<div class="col card">
    <div class="card" id="manager">
        <h4>Manager:${data.name}</h4>
        <p>ID: ${data.id}</p>
        <p>Email: ${data.email}</p>
        <p>Office Number: ${data.officeNumber}</p>
    </div>
</div>`
}

module.exports = htmlManager