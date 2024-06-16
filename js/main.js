import { works } from './works.js';

class Work {
  /**
   * 
   * @param {import('./works.js').Work} work
   */
  constructor(work) {
    this.work = work;
  }

  createDom() {
    const work = document.createElement('div');
    work.classList.add('work');
    const workImg = this.work.image;
    if(workImg.endsWith('.png') || workImg.endsWith('.jpg') || workImg.endsWith('.jpeg')) {
      work.innerHTML = `
        <img src="${this.work.image}" alt="${this.work.title}">
      `;
    } else if(workImg.endsWith('.mp4') || workImg.endsWith('.webm')) {
      work.innerHTML = `
        <video src="${this.work.image}" alt="${this.work.title}" autoplay loop muted></video>
      `;
    }

    const workDetail = document.createElement('div');
    workDetail.classList.add('work-detail');
    workDetail.classList.add('d-none');
    workDetail.innerHTML = `
      <h3>${this.work.title}</h3>
      <p class="work-description">${this.work.description}</p>
    `;
    const links = document.createElement('ul');
    this.work.links.forEach(link => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${link.url}">${link.name}</a>`;
      links.appendChild(li);
    });
    workDetail.insertBefore(links, workDetail.childNodes[2]);
    work.addEventListener('mouseleave', () => workDetail.style.display = 'none');
    work.addEventListener('mouseenter', () => workDetail.style.display = 'flex');

    work.appendChild(workDetail);

    return work;
  }
}

const worksContainer = document.querySelector('#web-works');
works.forEach(work => {
  const workInstance = new Work(work);
  worksContainer.appendChild(workInstance.createDom());
});

