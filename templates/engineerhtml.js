function engineerCard(data) {
  return `
    <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
        <div class="card employee-card m-2 col-3">
        <div class="card-header">
        <i class="fas fa-glasses team-icon engineer-icon shadow"></i>
            <h2 class="card-title">${data.engineerName}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${data.engineerId}</li>
                <li class="list-group-item">Email: <a href="mailto:${data.engineerEmail}">${data.engineerEmail}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${data.engineerGithub}" target="_blank" rel="noopener noreferrer">${data.github}</a></li>
            </ul>
        </div>
    </div>
    `;
}
module.exports = engineerCard;
