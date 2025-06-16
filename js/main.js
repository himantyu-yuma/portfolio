import { webWorks, gameWorks, videoWorks } from './works.js';

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
    if (workImg.endsWith('.png') || workImg.endsWith('.jpg') || workImg.endsWith('.jpeg')) {
      work.innerHTML = `
        <img src="${this.work.image}" alt="${this.work.title}" loading="lazy">
      `;
    } else if (workImg.endsWith('.mp4') || workImg.endsWith('.webm')) {
      work.innerHTML = `
        <video preload="none" muted loop alt="${this.work.title}" data-src="${this.work.image}">
          <source data-src="${this.work.image}" type="video/mp4">
        </video>
      `;
    };

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

    // Intersection Observer for lazy loading videos
    const video = work.querySelector('video');
    if (video) {
      this.setupVideoLazyLoading(video);
    }

    return work;
  }

  setupVideoLazyLoading(video) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          const src = videoElement.dataset.src;
          if (src && !videoElement.src) {
            videoElement.src = src;
            videoElement.load();
            
            // Start playing when video is loaded and ready
            videoElement.addEventListener('loadeddata', () => {
              videoElement.play().catch(e => {
                // Autoplay might be blocked, that's okay
                console.log('Autoplay blocked:', e);
              });
            });
          }
          observer.unobserve(videoElement);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    observer.observe(video);
  }
}

const webWorksContainer = document.querySelector('#web-works');
webWorks.forEach(work => {
  const workInstance = new Work(work);
  webWorksContainer.appendChild(workInstance.createDom());
});

const gameWorksContainer = document.querySelector('#game-works');
gameWorks.forEach(work => {
  const workInstance = new Work(work);
  gameWorksContainer.appendChild(workInstance.createDom());
});

const videoWorksContainer = document.querySelector('#video-works');
videoWorks.forEach(work => {
  const workInstance = new Work(work);
  videoWorksContainer.appendChild(workInstance.createDom());
});
