/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Lighten AI',
    position: 'Founding Engineer',
    url: 'https://www.lighten-ai.com/',
    startDate: '2023-06',
    highlights: [
    ],
  },
  {
    name: 'McKinsey & Co.',
    position: 'Senior Engineer 2',
    url: 'https://www.mckinsey.com/',
    startDate: '2021-07',
    endDate: '2023-05',
    highlights: [
      'Redesigned engineering processes for bug tracking, meetings, and standups. Improved culture for code reviews, blameless post-mortems, and retrospectives.',
      'Re-architected engineering hiring and onboarding processes. Recruited several strong engineers.',
      'Reorged engineering teams to focus on product delivery. Created a new team to focus on ML infrastructure.',
      'Lead re-design of internal APIs for inference. Built new computer vision pipelines for industry leading certifications (NIST/iBeta liveness).',
      'Pitched, designed, developed, deployed, and maintain a fraud detection product based on 1-N facial recognition using embeddings and vector search.',
    ],
  },
  {
    name: 'McKinsey & Co.',
    position: 'Summer Digital Analyst',
    url: 'https://www.mckinsey.com/',
    startDate: '2020-05',
    endDate: '2020-08',
    highlights: [
      'Guided digital business strategy for a Fortune 500 utility client to decrease company operational costs by 15% (reduced call volume) through development of online payment arrangement enrollment and online payment offerings; Ranked top customer utility site for customer experience after completion of engagement; Instituted and coached client team on Agile project management best practices.',
      'Developed .NET Web APIs and Angular PWAs; Responsible for DevOps, including automated testing, build/release pipelines.',
    ],
  },
  {
    name: 'Google',
    position: 'Software Engineering Intern',
    url: 'https://google.com',
    startDate: '2019-05',
    endDate: '2019-08',
    highlights: [
      'Migrated the Google News content recommendation and user engagements machine learning model into a TensorFlow Extended pipeline.',
      'Increased recommendation model clickthrough rate (CTR) by 1-3% daily via TFX pipeline that would clean inputted data, train a new model run model validation, and automatically push to production daily, including monitoring of system.',
      "Technologies: Python, TensorFlow, TensorFlow Extended (TFX), Deep Neural Networks",
    ],
  },
  {
    name: 'Google',
    position: 'Engineering Practicum Intern',
    url: 'https://google.com',
    startDate: '2018-05',
    endDate: '2018-08',
    highlights: [
      'Increased face detection speeds within Google Photos iOS by 14x through designing and implementing a single shot convolutional neural network on the GPU. Developed a testing framework in TensorFlow to compare results from mobile application.',
      "Technologies: Python, TensorFlow, C++, Objective C, Metal Performance Shaders, Convolutional Neural Networks",
    ],
  },
];

export default work;
