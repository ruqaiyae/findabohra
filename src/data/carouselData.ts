export const carouselItems = [
  {
    id: 0,
    title: "Tradition Meets Modern",
    description:
      "Rooted in culture, built for today. The best of both worlds in one app.",
  },
  {
    id: 1,
    title: "Chat for Free",
    description:
      "Match made? Conversation unlocked. Your chance to spark something real.",
    phoneContent: {
      title: "Messages",
      messageContent: [
        {
          name: "Hamza",
          image: "/profile-1.png",
          time: "now",
          message: "Typing...",
          notification: 2,
        },
        {
          name: "Burhanuddin",
          image: "/profile-2.png",
          time: "23m ago",
          message: "Hey! How are you?",
        },
        {
          name: "Ammar",
          image: "/profile-3.png",
          time: "30m ago",
          message: "I'm in LA!",
        },
        {
          name: "Yusuf",
          image: "/profile-4.png",
          time: "1h ago",
          message: "Image",
        },
      ],
    },
    chatContent: {
      name: "Fatema",
      messages: [
        "Hi, how are you? I saw on the app that we&apos;ve crossed paths several times this week ⬛",
        "Haha truly! Nice to meet you Grace! What about a cup of coffee today evening? ⬛",
        "📷",
        "Great I will write later the exact time and place. See you soon!",
      ],
    },
  },
  {
    id: 2,
    title: "See Who Likes You",
    description:
      "Instant feedback. No guessing. Know who's into you right away.",
    phoneContent: {
      title: "Likes",
      content:
        "People think you're sweeter than mango barfi! Curious who they are?",
      profiles: [
        {
          name: "Hamza Bohra, 28",
          location: "Delhi",
          time: "2 minutes ago",
          image: "/profile-1.png",
        },
        {
          name: "Burhanuddin, 29",
          location: "Mumbai",
          time: "19 minutes ago",
          image: "/profile-2.png",
        },
        {
          name: "Raj Motiwala, 23",
          location: "Pune",
          time: "22 minutes ago",
          image: "/profile-5.png",
        },
        {
          name: "Aziz Kapadia, 28",
          location: "Surat",
          time: "15 minutes ago",
          image: "/profile-6.png",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Browse & Connect",
    description:
      "Swipe less, connect more. Explore profiles that actually fit your vibe and values.",
    phoneContent: {
      profiles: [
        {
          name: "Rukaiya Merchant, 27",
          image: "/profile-girl-1.png",
          bgImage: "/profile-girl-2.png",
          location: "Los Angeles, CA, USA",
          about:
            "Curious mind, chai lover, weekend explorer. Friends say I&apos;m thoughtful with a sarcastic sense of humor. I love deep talks, cozy cafés, and spontaneous hikes.",
        },
        {
          name: "Hatim Diwan, 21",
          image: "/profile-5.png",
          bgImage: "/profile-7.png",
          location: "Mumbai, Maharashtra, India",
          about:
            "Tech enthusiast with a passion for innovation and community building. Friends describe me as ambitious yet grounded, with a love for meaningful conversations and exploring new ideas. I enjoy coding, reading, and connecting with people who share similar values.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Boost Your Profile",
    description:
      "Be seen first. A quick boost gets your profile in front of more Bohra singles, fast.",
    phoneContent: {
      profiles: [
        {
          name: "Yusuf Shakir, 29",
          image: "/profile-3.png",
          location: "Indore, Madhya Pradesh, India",
          about:
            "Lawyer committed to upholding integrity and fairness. I value honesty, family, and meaningful connections.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Message Priority",
    description:
      "Cut through the noise. Make sure your messages are always noticed.",
    phoneContent: {
      title: "Chat",
      subtitle: "Keep the Spark, Skip the Sharks!",
      description:
        "Before diving in, here are some tips to keep your chats safe and enjoyable:",
      tips: [
        {
          icon: "BiCool",
          title: "Be Kind, Be Cool",
          description:
            "Treat others with respect, just like you'd like to be treated.",
        },
        {
          icon: "FaUser",
          title: "Keep It Real",
          description: "Be yourself, and be honest.",
        },
        {
          icon: "FaShieldAlt",
          title: "Protect Your Privacy",
          description: "Don't share personal information too soon.",
        },
        {
          icon: "FaExclamationTriangle",
          title: "If Something's Off, Report It",
          description: "If you see something suspicious, let us know.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Keep the Momentum",
    description:
      "Playful nudges remind you to stay active. Because matches don't wait.",
    phoneContent: {
      title: "Notifications",
      notifications: [
        {
          id: 1,
          message: "Sarah liked your profile! Tap to learn more.",
          date: "09-22-2025",
          type: "like" as const,
        },
        {
          id: 2,
          message: "Zainab liked your profile! Tap to learn more.",
          date: "09-18-2025",
          type: "like" as const,
        },
        {
          id: 3,
          message: "You have a new message from Sakina! Check it out!",
          date: "09-05-2025",
          type: "message" as const,
        },
        {
          id: 4,
          message: "Khadija liked your profile! Tap to learn more.",
          date: "09-17-2025",
          type: "like" as const,
        },

        {
          id: 5,
          message: "You have a new message from Zahra! Check it out!",
          date: "09-05-2025",
          type: "message" as const,
        },
        {
          id: 6,
          message: "You have a new message from Fatema! Check it out!",
          date: "08-24-2025",
          type: "message" as const,
        },
      ],
    },
  },
];
