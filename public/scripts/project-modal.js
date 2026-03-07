const setupProjectModal = () => {
  const modal = document.querySelector('[data-project-modal]');
  if (!modal) return;

  const modalTitle = modal.querySelector('[data-project-modal-title]');
  const modalDetails = modal.querySelector('[data-project-modal-details]');

  document.querySelectorAll('[data-project-open]').forEach((button) => {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.getAttribute('data-project-title') || '';
      modalDetails.textContent = button.getAttribute('data-project-details') || '';
      modal.showModal();
    });
  });

  const close = () => modal.close();

  modal.querySelector('[data-project-close]')?.addEventListener('click', close);

  modal.addEventListener('click', (event) => {
    const dialogDimensions = modal.getBoundingClientRect();
    const isBackdropClick =
      event.clientX < dialogDimensions.left ||
      event.clientX > dialogDimensions.right ||
      event.clientY < dialogDimensions.top ||
      event.clientY > dialogDimensions.bottom;

    if (isBackdropClick) close();
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupProjectModal);
} else {
  setupProjectModal();
}
