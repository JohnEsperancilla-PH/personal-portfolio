import { Logo } from "@/once-ui/components";

const person = {
  firstName: "John",
  lastName: "Esperancilla",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Student",
  avatar: "/images/avatar.jpg",
  email: "johnleonardesperancilla@gmail.com",
  location: "Asia/Manila",
  languages: ["English", "Filipino"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I write about software development, technology trends, and share insights from my engineering journey.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JohnEsperancilla-PH",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/john-esperancilla/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Creating Content Beyond Boundaries</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Portfolio Website</strong></>,
    href: "/work/portfolio-website",
  },
  subline: (
    <>
      I'm John, a Computer Science student at the University of St. La Salle.
      I am a content creator and owner of <a href="https://nolastudios.net" target="_blank" rel="noopener noreferrer" className="text-brand-background-strong hover:text-accent-background-strong transition-colors">NOLA Studios</a>, a content creation company that creates content for various platforms.
      And I am studying areas like data science and machine learning.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/johnesperancilla",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        John is a Bacolod-based contnt creator and digital marketer with expertise in upscaling a business from zero to hero.
        He focuses on creating efficient, maintainable and delivering exceptional content for his clients.
        
        <br /><br />
        
        He is also a student of Computer Science at the University of St. La Salle. Focusing his studies on areas like
        data science and machine learning.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "NOLA Studios",
        timeframe: "2024 - Present",
        role: "Creative Director and Owner",
        achievements: [
          <>
            Created a local marketing agency that creates content for various platforms. Focusing on creating content for social media platforms like Instagram and TikTok.
          </>,
        ],
        images: [],
      },
      {
        company: "StalWrites",
        timeframe: "2024 - 2025",
        role: "SEO Content Writer",
        achievements: [
          <>
            Created blogs and articles for clients around the world that focus on SEO and content marketing.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of St. La Salle",
        description: <>Bachelor of Science in Computer Science</>,
        timeframe: "2022 - Present"
      },
      {
        name: "Liceo de La Salle",
        description: <>Senior High School Education</>,
        timeframe: "2020 - 2022"
      },
      {
        name: "Philippine Normal University Visayas",
        description: <>Basic Education</>,
        timeframe: "2010 - 2020"
      },
    ],
  },
  technical: {
    display: true,
    title: "Certifications",
    skills: [
      {
        title: "Semrush Digital Marketing Certification",
        description: <><a href="https://static.semrush.com/academy/certificates/34e0be8019/john-leonard-esperancilla_27.pdf" target="_blank" rel="noopener noreferrer" className="text-brand-background-strong hover:text-accent-background-strong transition-colors">Digital Marketing Certification</a> - Proficient in Digital Marketing.</>,
        images: [],
      },
      {
        title: "HubSpot Academy Digital Marketing Certification",
        description: <><a href="http://app-na2.hubspot.com/academy/achievements/wdl67g44/en/1/john-leonard-tayapad-esperancilla/digital-marketing" target="_blank" rel="noopener noreferrer" className="text-brand-background-strong hover:text-accent-background-strong transition-colors">Digital Marketing Certification</a> - Proficient in Digital Marketing.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
