function internCard(data) {
  return `
    <script src="https://kit.fontawesome.com/7b4d2fea99.js" crossorigin="anonymous"></script>
    <div class="card employee-card m-2 col-3">
    <div class="card-header">
        <h2 class="card-title">${data.interName}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>
    <div class="card-body">
    <i class="fas fa-graduation-cap team-icon intern-icon shadow"></i>
        <ul class="list-group">
            <li class="list-group-item">ID: ${data.internId}</li>
            <li class="list-group-item">Email: <a href="mailto:${data.interEmail}">${data.internEmail}</a></li>
            <li class="list-group-item">School: ${data.internSchool}</li>
        </ul>
    </div>
</div>
`;
}
module.exports = internCard;
