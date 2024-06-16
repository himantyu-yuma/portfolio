/**
 * @typedef {Object} Link
 * @property {string} name
 * @property {string} url
 */

/**
 * @typedef {Object} Work
 * @property {string} title
 * @property {string} description
 * @property {string} image
 * @property {Array<Link>} links
 * 
 */

/**
 * @type {Array<Work>}
 */
export const works = [
  {
    title: 'Work 1',
    description: 'Description 1',
    image: 'https://via.placeholder.com/150',
    links: [
      {
        name: 'Link 1',
        url: 'https://www.google.com'
      },
      {
        name: 'Link 2',
        url: 'https://www.google.com'
      }
    ]
  },
  {
    title: 'Work 2',
    description: 'Description 2',
    image: 'https://via.placeholder.com/150',
    links: [
      {
        name: 'Link 1',
        url: 'https://www.google.com'
      },
      {
        name: 'Link 2',
        url: 'https://www.google.com'
      }
    ]
  },
  {
    title: 'Work 3',
    description: 'Description 3',
    image: 'https://via.placeholder.com/150',
    links: [
      {
        name: 'Link 1',
        url: 'https://www.google.com'
      },
      {
        name: 'Link 2',
        url: 'https://www.google.com'
      }
    ]
  }
]
