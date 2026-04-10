// data.js
const companies = [
  {
    id: "alitas-ai",
    name: "Alitas AI",
    logo: "./assets/alitas/company_logo.png",
    link: "https://www.linkedin.com/company/106471380/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BoiZmvjH0RyyqlrNuRG2JKw%3D%3D",
    description:
      "Alitas AI uses advanced technology to overcome language barriers that hinder patient care, reducing considerable wait times.",
    apps: [
      {
        id: "alitas-ai-transcribe",
        name: "Alitas - (Consultation)",
        tagline:
          "The power of Artificial Intelligence to transform technology and lives.",
        icon: "./assets/alitas/transcribe/app_logo.png",
        tags: ["iPhone", "iPad", "Android"],
        phone_screenshots: [
          "./assets/alitas/transcribe_go/phone/01.webp",
          "./assets/alitas/transcribe_go/phone/02.webp",
          "./assets/alitas/transcribe_go/phone/03.webp",
          "./assets/alitas/transcribe_go/phone/04.webp",
          "./assets/alitas/transcribe_go/phone/05.webp",
          "./assets/alitas/transcribe_go/phone/06.webp",
          "./assets/alitas/transcribe_go/phone/07.webp",
          "./assets/alitas/transcribe_go/phone/08.webp",
        ],
        tablet_screenshots: [
          "./assets/alitas/transcribe/tablet/01.webp",
          "./assets/alitas/transcribe/tablet/02.webp",
          "./assets/alitas/transcribe/tablet/03.webp",
          "./assets/alitas/transcribe/tablet/04.webp",
          "./assets/alitas/transcribe/tablet/05.webp",
          "./assets/alitas/transcribe/tablet/06.webp",
        ],
      },
      {
        id: "alitas-ai-translation",
        name: "Alitas",
        tagline: "Enhancing Healthcare by Breaking Language Barriers.",
        icon: "./assets/alitas/company_logo.png",
        tags: ["iPhone", "iPad", "Android"],
        phone_screenshots: [
          "./assets/alitas/translation/phone/01.png",
          "./assets/alitas/translation/phone/02.png",
          "./assets/alitas/translation/phone/03.png",
          "./assets/alitas/translation/phone/04.png",
          "./assets/alitas/translation/phone/05.png",
        ],
        tablet_screenshots: [
          "./assets/alitas/translation/tablet/01.png",
          "./assets/alitas/translation/tablet/02.png",
          "./assets/alitas/translation/tablet/03.png",
        ],
        videos: ["./assets/alitas/translation/video/01.mp4"],
      },
    ],
  },
  {
    id: "pixa-nova",
    name: "Pixaverse Studios & Nova Meta Pvt. Ltd.",
    logo: "./assets/pixa_nove_logo.png",
    description: "Nova Meta pivots to Pixaverse Studios in 2024",
    apps: [],
  },
  {
    id: "pixa-ai",
    name: "Pixaverse Studios Pvt. Ltd.",
    logo: "./assets/pixa/company_logo.webp",
    link: "https://www.linkedin.com/company/104142742/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BoiZmvjH0RyyqlrNuRG2JKw%3D%3D",
    description: "AI toys that can listen & talk",
    apps: [
      {
        id: "pixa-ai",
        name: "Pixa - AI Toys",
        tagline: "AI toys that can listen & talk",
        links: {
          ios: "https://apps.apple.com/in/app/pixa-ai-toys/id6499566767",
          android:
            "https://play.google.com/store/apps/details?id=com.pixa.nimbus",
        },
        icon: "./assets/pixa/company_logo.webp",
        tags: ["iPhone", "Android"],
        phone_screenshots: [
          "./assets/pixa/phone/01.webp",
          "./assets/pixa/phone/02.webp",
          "./assets/pixa/phone/03.webp",
          "./assets/pixa/phone/04.webp",
          "./assets/pixa/phone/05.webp",
        ],
      },
    ],
  },
  {
    id: "nova-meta",
    name: "Nova Meta Pvt. Ltd.",
    logo: "./assets/nova/company_logo.webp",
    link: "https://www.linkedin.com/company/80771687/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BoiZmvjH0RyyqlrNuRG2JKw%3D%3D",
    description:
      "Nova is a career focused platform for teenagers to connect with like minded peers, explore various career interests and build their portfolio through work opportunities.",
    apps: [
      {
        id: "nova-social",
        name: "Nova Social",
        tagline: "Career Network for Teenagers",
        links: {
          ios: "https://apps.apple.com/in/app/nova-social/id6446203548",
        },
        icon: "./assets/nova/company_logo.webp",
        tags: ["iPhone", "Android"],
        phone_screenshots: [
          "./assets/nova/phone/01.webp",
          "./assets/nova/phone/02.webp",
          "./assets/nova/phone/03.webp",
          "./assets/nova/phone/04.webp",
          "./assets/nova/phone/05.webp",
          "./assets/nova/phone/06.webp",
          "./assets/nova/phone/07.webp",
        ],
      },
    ],
  },
  {
    id: "qoohoo",
    name: "qoohoo",
    logo: "./assets/qoohoo/company_logo.jpeg",
    description:
      "qoohoo is the ultimate platform for creators who are looking to build and monetize their community.",
    link: "https://www.linkedin.com/company/69903710/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_position_details%3BoiZmvjH0RyyqlrNuRG2JKw%3D%3D",
    apps: [
      {
        id: "qoohoo",
        name: "qoohoo",
        tagline: "monetize your audience across all platforms",
        links: {
          android:
            "https://play.google.com/store/apps/details?id=com.qoohoo_app",
        },
        icon: "./assets/qoohoo/company_logo.jpeg",
        tags: ["iPhone", "Android"],
        phone_screenshots: [
          "./assets/qoohoo/phone/01.jpeg",
          "./assets/qoohoo/phone/02.jpeg",
          "./assets/qoohoo/phone/03.jpeg",
        ],
      },
    ],
  },
];

globalThis.companiesData = companies;
