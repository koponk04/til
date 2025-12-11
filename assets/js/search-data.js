// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/til/";
    },
  },{id: "dropdown-basics",
              title: "Basics",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/til/programming_basics/";
              },
            },{id: "dropdown-mini-projects",
              title: "Mini Projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/til/programming_mini_projects/";
              },
            },{id: "dropdown-algorithms",
              title: "Algorithms",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/til/programming_algorithms/";
              },
            },{id: "nav-exploration",
          title: "Exploration",
          description: "empty",
          section: "Navigation",
          handler: () => {
            window.location.href = "/til/exploration/";
          },
        },{id: "dropdown-2026",
              title: "2026",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-2025",
              title: "2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-2026",
              title: "2026",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-2025",
              title: "2025",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "articles-december-2025",
          title: 'December 2025',
          description: "",
          section: "Articles",handler: () => {
              window.location.href = "/til/articles/2025/december.html";
            },},{id: "articles-january-2026",
          title: 'January 2026',
          description: "",
          section: "Articles",handler: () => {
              window.location.href = "/til/articles/2026/january.html";
            },},{id: "daily_reports-december-2025",
          title: 'December 2025',
          description: "",
          section: "Daily_reports",handler: () => {
              window.location.href = "/til/daily_reports/2025/december.html";
            },},{id: "daily_reports-january-2026",
          title: 'January 2026',
          description: "",
          section: "Daily_reports",handler: () => {
              window.location.href = "/til/daily_reports/2026/january.html";
            },},{id: "projects-hello-world",
          title: 'Hello World',
          description: "Output a simple greeting message to familiarize with syntax and output commands.",
          section: "Projects",handler: () => {
              window.location.href = "/til/projects/001_project.html";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("https://docs.google.com/document/d/1C61eoeJJQESKOdaOVKHlcQcvN7uBQr8H/edit?usp=sharing&ouid=117547304901709608223&rtpof=true&sd=true", "_blank");
        },
      },{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/311117981516169218", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%64%68%69%61%6E%37%37%37@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/ardhian.nugroho", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/koponk04", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/koponk04", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ardhiannugroho", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/koponk04", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
