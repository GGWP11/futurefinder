const profiles = [];
for (let i = 1; i <= 6; i++) {
  profiles.push(require(`../assets/profile${i}.png`));
}

const Professional = [
    {
      id: 1,
      name: "John Doe",
      profession: "Engineer",
      imageUrl: profiles[0],
      address: "123 Main St, Anytown, USA",
      ratings: 10,
      ratingScore: 4.5,
      experience: [{year: 2020, profession: "Engineer"}, {year: 2021, profession: "Lead Engineer"}],
      description: "I'm a highly skilled engineer with a passion for problem-solving.",
      expertise: ["JavaScript", "React", "Node.js"]
    },
    {
      id: 2,
      name: "Jane Smith",
      profession: "Designer",
      imageUrl: profiles[1],
      address: "456 Broadway, Anytown, USA",
      ratings: 7,
      ratingScore: 4.0,
      experience: [{year: 2019, profession: "Designer"}, {year: 2020, profession: "Lead Designer"}],
      description: "I'm a creative designer who loves to make beautiful and functional designs.",
      expertise: ["UI/UX", "Photoshop", "Illustrator"]
    },
    {
      id: 3,
      name: "Bob Johnson",
      profession: "Developer",
      imageUrl: profiles[2],
      address: "789 Oak St, Anytown, USA",
      ratings: 15,
      ratingScore: 4.8,
      experience: [{year: 2018, profession: "Junior Developer"}, {year: 2019, profession: "Developer"}, {year: 2020, profession: "Senior Developer"}],
      description: "I'm a passionate developer who loves to build innovative and efficient solutions.",
      expertise: ["Java", "Spring", "SQL"]
    },
    {
      id: 4,
      name: "Alice Lee",
      profession: "Manager",
      imageUrl: profiles[3],
      address: "555 Elm St, Anytown, USA",
      ratings: 20,
      ratingScore: 4.9,
      experience: [{year: 2016, profession: "Manager"}, {year: 2017, profession: "Senior Manager"}, {year: 2018, profession: "Director"}, {year: 2019, profession: "VP"}, {year: 2020, profession: "Executive"}],
      description: "I'm a results-driven manager who excels at leading high-performing teams.",
      expertise: ["Leadership", "Project Management", "Communication"]
    },
    {
      id: 5,
      name: "Tom Smith",
      profession: "Engineer",
      imageUrl: profiles[4],
      address: "777 Main St, Anytown, USA",
      ratings: 12,
      ratingScore: 4.6,
      experience: [{year: 2017, profession: "Junior Engineer"}, {year: 2018, profession: "Engineer"}, {year: 2019, profession: "Lead Engineer"}, {year: 2020, profession: "Principal Engineer"}],
      description: "I'm a skilled engineer with a passion for innovation and problem-solving.",
      expertise: ["Python", "Django", "JavaScript"]
    },
    {
        id: 6,
        name: "Mary Brown",
        profession: "Designer",
        imageUrl: profiles[5],
        address: "123 Main St, Anytown USA",
        ratings: 15,
        ratingScore: 4.3,
        experience: [
          { year: 2018, profession: "Graphic Designer" },
          { year: 2019, profession: "UI Designer" },
          { year: 2020, profession: "Product Designer" },
          { year: 2021, profession: "Lead Designer" },
        ],
        description:
          "I'm a versatile designer with experience in graphic, UI, and product design. I specialize in creating engaging and user-friendly designs that drive business growth.",
          expertise: ["UI/UX Design", "Product Design", "Graphic Design"],
      },
      {
        id: 7,
        name: "Sam Williams",
        profession: "Developer",
        imageUrl: profiles[1],
        address: "456 Oak St, Anytown USA",
        ratings: 27,
        ratingScore: 4.8,
        experience: [
          { year: 2017, profession: "Web Developer" },
          { year: 2018, profession: "Full-Stack Developer" },
          { year: 2019, profession: "DevOps Engineer" },
          { year: 2020, profession: "Senior Developer" },
        ],
        description:
          "I'm a highly skilled developer with a strong focus on web development and DevOps. I enjoy building scalable and robust applications that solve real-world problems.",
          expertise: ["Web Development", "DevOps", "Full-Stack Development"],
      },
      {
        id: 8,
        name: "Emily Davis",
        profession: "Manager",
        imageUrl: profiles[0],
        address: "789 Maple Ave, Anytown USA",
        ratings: 10,
        ratingScore: 4.1,
        experience: [
          { year: 2019, profession: "Project Manager" },
          { year: 2020, profession: "Program Manager" },
          { year: 2021, profession: "Product Manager" },
        ],
        description:
          "I'm a seasoned manager with experience leading projects and teams to success. I specialize in product management and enjoy working with cross-functional teams to deliver high-quality products.",
          expertise: ["Product Management", "Project Management", "Team Leadership"],
      },
    ];
  
export default Professional