function loadPage(page) {
  const contentDiv = document.querySelector('.content');

  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = 'Vui lòng đợi, trang web đang được tải...';
  loadingMessage.style.color = 'blue';

  contentDiv.innerHTML = '';
  contentDiv.appendChild(loadingMessage);

  const iframe = document.createElement('iframe');
  iframe.src = "views/" + page;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';

  contentDiv.innerHTML = '';
  contentDiv.appendChild(iframe);
}
