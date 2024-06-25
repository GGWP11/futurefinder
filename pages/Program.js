const Company = [
  {
    id: 1,
    programme: 'NextGen Leaders Program',
    length: 'Period: 4 months',
    name: 'XYZ Inc.',
    location: 'Kuala Lumpur',
    industry: 'Information Technology',
    description:
      'The IT Graduate Trainee will be responsible for supporting the development and maintenance of software applications for various clients. The candidate will go through the modules of Web Development, Mobile Development, Data Networking and  Security Technology.',
    totalRatings: 1000,
    ratingScore: 4.5,
    image: 'https://dummyimage.com/300x200/000/fff&text=XYZ+Inc.',
    reviews: [
      {
        rating: 5,
        comment:
          'I loved working at XYZ Inc. The company culture was great and everyone was really supportive.',
      },
      {
        rating: 4,
        comment:
          'XYZ Inc. provided me with valuable learning experiences during my internship. The team was very helpful and I learned a lot from them.',
      },
    ],
  },
  {
    id: 2,
    programme: 'Catalyst Career Program',
    length: '3 months',
    name: 'ABC Corp',
    location: 'Penang',
    description:
      'The Manufacturing Graduate Trainee will be responsible for working with the production team to optimize manufacturing processes, perform quality control checks, and manage inventory.',
    industry: 'Manufacturing',
    totalRatings: 500,
    ratingScore: 4.0,
    image: 'https://dummyimage.com/300x200/000/fff&text=ABC+Corp',
    reviews: [
      {
        rating: 3,
        comment:
          "I enjoyed my time at ABC Corp, but I felt that there wasn't enough opportunity for growth within the company.",
      },
      {
        rating: 5,
        comment:
          'ABC Corp was an amazing place to work. The team was friendly and supportive, and I learned a lot about sustainable manufacturing practices.',
      },
      {
        rating: 4,
        comment:
          'I had a great experience interning at ABC Corp. The team was very helpful and I learned a lot about the industry.',
      },
    ],
  },
  {
    id: 3,
    programme: 'LaunchPad Program',
    length: '6 months',
    name: 'Acme Inc.',
    location: 'Selangor',
    description:
      'This 6-month program is geared towards graduates with a background in AI or related fields. Over the 6 months, trainee will go through 4 modules, which included Machine Learning, Data Analyst, Web-Development and Business Analytics.',
    industry: 'Information Technology',
    totalRatings: 1234,
    ratingScore: 4.5,
    image: 'https://dummyimage.com/300x200/000/fff&text=Acme+Inc.',
    reviews: [
      {
        comment:
          "I had a great experience working under Acme Inc. The team was professional and always guided me when I'm stuck.",
        rating: 5,
      },
      {
        comment:
          "I was impressed with Acme Inc.'s expertise in digital marketing. There's also free flow of snacks in the office!",
        rating: 4,
      },
      {
        comment:
          "Great place to work with as we often have team bonding activities and lunch together. One downside was that there's no ample parking spaces.",
        rating: 5,
      },
      {
        comment:
          'I found my supervisor in Acme Inc. to be very responsive and easy to work with. It was a pleasant experience.',
        rating: 4,
      },
    ],
  },
  {
    id: 4,
    programme: 'Ignite Program',
    length: '5 months',
    name: 'Global Logistics',
    location: 'Selangor',
    description:
      'The Logistics Graduate Trainee will be responsible for coordinating transportation and distribution of goods, monitoring inventory levels, and implementing process improvements.',
    industry: 'Logistics',
    totalRatings: 876,
    ratingScore: 4.2,
    image: 'https://dummyimage.com/300x200/ffffff/fff&text=Global+Logistics',
    reviews: [
      {
        comment:
          'Great working culture and great place for career development.',
        rating: 4,
      },
      {
        comment:
          'Had a great time joining the company as a fresh graduate. The team was very supportive and I learned a lot from them.',
        rating: 4,
      },
    ],
  },
  {
    id: 5,
    programme: 'Propel Program',
    length: '1 year',
    name: 'TechWave',
    location: 'Johor',
    description:
      'This 1-year program is designed for recent computer science graduates who are passionate about developing software applications. Trainees will learn to design, develop, and test high-quality software products that meet the needs of customers. The trainee will get the chances to hands-on mobile development, web development, product design, quality assurance, desktop application development and UI/UX design',
    industry: 'Information Technology',
    totalRatings: 132,
    ratingScore: 4.5,
    image: 'https://dummyimage.com/300x200/000/fff&text=TechWave',
    reviews: [
      {
        comment:
          'TechWave has a great team of developers who are knowledgeable and easy to work with. I learned a lot when working with my supervisors.',
        rating: 5,
      },
      {
        comment:
          "I had a great experience working with TechWave on a custom software project. There are multiple things that couldn't be learned in university.",
        rating: 4,
      },
      {
        comment:
          'TechWave is such a good company for people especially students to start out. Highly recommend!',
        rating: 4.5,
      },
    ],
  },
  {
    id: 6,
    programme: 'Elite Path Program',
    length: '12 months',
    name: 'Smith & Co Law Firm',
    location: 'Kuala Lumpur',
    description:
      'The Law Graduate Trainee will be responsible for assisting attorneys with research, drafting legal documents and participating in client meetings. The modules that trainee will be hands-on in 12 months are Legal Consultant, Lawyer and Paralegal.',
    industry: 'Law',
    totalRatings: 65,
    ratingScore: 4.7,
    image: 'https://dummyimage.com/300x200/000/fff&text=Smith+%26+Co+Law+Firm',
    reviews: [
      {
        comment:
          'I was impressed by the level of expertise and professionalism shown by the attorneys at Smith & Co. It inspired me to be like them.',
        rating: 5,
      },
      {
        comment:
          "Although the recruiting process to land an internship role is very daunting, I'm glad that I took the leap and applied. A great experience!",
        rating: 4.5,
      },
      {
        comment:
          'I would recommend Smith & Co to anyone looking to work in a challenging yet satisfying law firm.',
        rating: 5,
      },
    ],
  },
  {
    id: 7,
    programme: 'Infinity Program',
    length: '10 months',
    name: 'Haegen Accounting Services',
    location: 'Kedah',
    description:
      'The Accounting Graduate Trainee will be responsible for assisting with financial statement preparation, tax compliance, and audit engagements.',
    industry: 'Accounting',
    totalRatings: 43,
    ratingScore: 4.2,
    image:
      'https://dummyimage.com/300x200/000/eeff00&text=Haegen+Accounting+Services',
    reviews: [
      {
        comment:
          'Haegen Accounting taught me multiple ways on how to be a good and competent employee.',
        rating: 4,
      },
      {
        comment:
          'I appreciate the personalized attention I received from my supervisor at Haegen Accounting.',
        rating: 4.5,
      },
      {
        comment:
          "If you're looking to work in a chill and stress-free environment. Join Haegen now!",
        rating: 4.5,
      },
    ],
  },
]

export default Company
