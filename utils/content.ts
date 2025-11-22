export const NAVLINKS= [
  {
    label: 'Home',
    url: '#hero'
  },
  {
    label : 'About me',
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
  avatar: '/images/profile.webp'
}

export const HERO = {
  badge: 'Available for freelance',
  headline: "Hey, I&rsquo;m Alexey Shagiakhmetov. A&nbsp;Front-End Developer &amp;&nbsp;Team Lead",
  subline : "I&nbsp;am a&nbsp;fullstack developer and designer with an&nbsp;incredibly impressive experience working on&nbsp;various tasks who has a&nbsp;passion for building responsive, cool looking, and easy to&nbsp;visit website applications."
}

export const SERVICE = {
  label: 'service',
  headline: 'Custom frontend and backend solutions for your requirements.',
  subline: 'I&nbsp;specialize in&nbsp;creating user-centered solutions for businesses and individuals. Let&rsquo;s create something extraordinary together.',
  services: [
    {
      name: "Web Development",
      icon: 'Scroll',
      description: 'Web development refers to&nbsp;building, creating, and maintaining websites. It&nbsp;includes aspects such as&nbsp;web design, web publishing, web programming, and database management. It&nbsp;is&nbsp;the creation of&nbsp;an&nbsp;application that works over the internet, i.e., websites.'
    },
    {
      name: "Mobile Development",
      icon: 'MobileProgramming',
      description: 'Mobile application development is&nbsp;the process of&nbsp;making software for smartphones, tablets and digital assistants, most commonly for the Android and iOS operating systems.'
    },
    {
      name: "UI/UX Design",
      icon: 'PenTool2',
      description: 'In&nbsp;digital design, user interface (UI) refers to&nbsp;the interactivity, look, and feel of&nbsp;a&nbsp;product screen or&nbsp;web page, while user experience (UX) covers a&nbsp;user&rsquo;s overall experience with the product or&nbsp;website.'
    },
   
  ]
}

export const WORK = {
  label: 'works',
  headline: 'Custom IT&nbsp;solutions for your requirements.',
  subline: 'I&nbsp;specialize in&nbsp;creating user-centered solutions for businesses and individuals. Let&rsquo;s create something extraordinary together.',
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
      name: "Restaurant menu",
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
  label: 'Let me&nbsp;introduce myself',
  introduce: [
    "My&nbsp;name is&nbsp;Alexey Shagiakhmetov, and I&nbsp;am a&nbsp;passionate Front-End Developer &amp;&nbsp;Team Lead. I&nbsp;specialize in&nbsp;creating seamless and visually appealing user interfaces, combining design and development to&nbsp;enhance user experiences.",
    "I love turning ideas into interactive and functional web applications. Excited to collaborate and build amazing digital products together!",
    "More than 9 years of experience.",
    "Results-oriented."
  ]
}

export const CTA = {
  label: 'Let&rsquo;s Build Something Great Together',
  description: 'Looking for a&nbsp;modern, seamless website or&nbsp;app interface? I`m here to&nbsp;bring your ideas to&nbsp;life.'
}