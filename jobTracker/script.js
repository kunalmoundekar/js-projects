const jobForm = document.getElementById('jobForm');
const jobList = document.getElementById('jobList');

let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

function renderJobs() {
  jobList.innerHTML = '';
  jobs.forEach((job, index) => {
    const jobDiv = document.createElement('div');
    jobDiv.className = 'job';
    jobDiv.innerHTML = `
      <strong>${job.company}</strong> - ${job.role} [${job.status}]
      <button onclick="deleteJob(${index})">Delete</button>
    `;
    jobList.appendChild(jobDiv);
  });
}

jobForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const status = document.getElementById('status').value;
  jobs.push({ company, role, status });
  localStorage.setItem('jobs', JSON.stringify(jobs));
  renderJobs();
  jobForm.reset();
});

function deleteJob(index) {
  jobs.splice(index, 1);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  renderJobs();
}

renderJobs();
