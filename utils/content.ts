export const NAVLINKS= [
  {
    label: 'Home',
    url: '#hero'
  },
  {
    label : 'About',
    url: '#about'
  },
  {
    label : 'Works',
    url: '#work'
  },
  {
    label : 'Service',
    url: '/#service'
  },
  
]

export const PROFILE = {
  firstname : 'Alexey',
  lastname: 'Shagiakhmetov',
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  },
  role : 'Front-End Developer & Team Lead',
  avatar: '/images/profile.jpg'
}

export const HERO = {
  badge: 'Available for freelance',
  headline: `Hey, I'm ${PROFILE.fullname}. A ${PROFILE.role}`,
  subline : "I am a fullstack developer and designer with an incredibly impressive experience working on various tasks who has a passion for building responsive, cool looking, and easy to visit website applications."
}

export const SERVICE = {
  label: 'service',
  headline: 'Custom frontend and backend solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  services: [
    {
      name: "Web Development",
      icon: 'Scroll',
      description: 'Web development refers to building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet, i.e., websites.'
    },
    {
      name: "Mobile Development",
      icon: 'MobileProgramming',
      description: 'Mobile application development is the process of making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.'
    },
    {
      name: "UI/UX Design",
      icon: 'PenTool2',
      description: 'In digital design, user interface (UI) refers to the interactivity, look, and feel of a product screen or web page, while user experience (UX) covers a user’s overall experience with the product or website'
    },
   
  ]
}

export const WORK = {
  label: 'work',
  headline: 'Custom IT solutions for your requirements.',
  subline: 'I specialize in crafting user-centered solutions for businesses and individuals. Let’s create something extraordinary together.',
  works: [
    {
      name: "Boats shop",
      live_demo: 'https://tactic-boat.ru/',
      thumbnails: 'boats-1.webp',
      type: 'Full development cycle'
    },
    {
      name: "KIBERone",
      thumbnails: 'kiberone-1.webp',
      type: 'IT school website'
    },
    {
      name: "Let's Food UI Kit",
      thumbnails: 'kaif-1.webp',
      type: 'Layout'
    },
    {
      name: "Residential complex",
      live_demo: 'https://xn--39-6kcax9acocikv8pd.xn--p1ai/',
      thumbnails: 'lesnaya-polyana-1.webp',
      type: 'Landing page'
    },
    {
      name: "Fitness Studio Website",
      live_demo: 'https://odin-fitness.ru/',
      thumbnails: 'odin-1.webp',
      type: 'Full development cycle'
    },
    {
      name: "Event agency",
      thumbnails: 'projector-1.webp',
      type: 'Landing page'
    },
  ]
}

export const ABOUT = {
  label: 'Let me introduce myself',
  introduce: [
    `My name is ${PROFILE.fullname}, and I am a passionate ${PROFILE.role}. I specialize in creating seamless and visually appealing user interfaces, combining design and development to enhance user experiences.`,
    "I love turning ideas into interactive and functional web applications. Excited to collaborate and build amazing digital products together!"
  ]
}

export const CTA = {
  label: 'Let’s Build Something Great Together',
  description: 'Looking for a modern, seamless website or app interface? I`m here to bring your ideas to life.'
}