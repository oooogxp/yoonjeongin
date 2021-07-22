export const teamDetailsSteup = () => {
  document.querySelectorAll('.team-details-toggle').forEach(element => {
    element.addEventListener('click', toggleTeamDetails);
  });
  document.querySelectorAll('.team-details-close').forEach(element => {
    element.addEventListener('click', closeTeamDetails);
  });
};

const toggleTeamDetails = (event) => {
  const member = event.target.getAttribute('member-slug');

  if (document.querySelector(`#team-details-${member}`).classList.contains('nav-toggle')) {
    document.querySelector(`#team-details-${member}`).classList.remove('nav-toggle');
    document.querySelector('#nav-toggle-backdrop').classList.remove('nav-toggle');
  }  
};

const closeTeamDetails = (event) => {
  const member = event.target.getAttribute('member-slug');
  if (!document.querySelector(`#team-details-${member}`).classList.contains('nav-toggle')) {
    document.querySelector(`#team-details-${member}`).classList.add('nav-toggle');
    document.querySelector('#nav-toggle-backdrop').classList.add('nav-toggle');

  }
};
