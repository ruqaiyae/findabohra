"use client";

import { useState, useEffect } from "react";
import { Hearts } from "./ui/Hearts";
import Slide1 from "./carouselContent/Slide1";
import Slide2 from "./carouselContent/Slide2";
import Slide3 from "./carouselContent/Slide3";
import Slide4 from "./carouselContent/Slide4";
import Slide5 from "./carouselContent/Slide5";
import FeatureDescription from "./carouselContent/FeatureDescription";

const carouselItems = [
  {
    id: 1,
    title: "Chat for Free",
    description: `Welcome to your inbox — where sparks turn into conversations. Once you match with someone, start chatting to get to know them better. A simple "hi" could be the start of something amazing.`,
    image: "chat-feature",
    phoneContent: {
      title: "Messages",
      messageContent: [
        {
          name: "Hamza",
          time: "now",
          message: "Typing...",
          notification: 2,
        },
        {
          name: "Burhanuddin",
          time: "23 minutes ago",
          message: "Hey! How are you?",
        },
        {
          name: "Ammar",
          time: "30 minutes ago",
          message: "I'm in LA!",
        },
        {
          name: "Yusuf",
          time: "1 hour ago",
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
      "Stay ahead in your journey — get notified instantly when someone likes your profile. It's a thoughtful way to know who's interested without any pressure.",
    image: "likes-feature",
    phoneContent: {
      title: "Likes",
      content:
        "People think you're sweeter than mango barfi! Curious who they are?",
      profiles: [
        { name: "Burhanuddin, 29", location: "Mumbai", time: "19 minutes ago" },
        { name: "Zahra Bohra, 28", location: "Delhi", time: "2 minutes ago" },
        {
          name: "Arwa Motiwala, 23",
          location: "Pune",
          time: "22 minutes ago",
        },
        {
          name: "Aziz Kapadia, 28",
          location: "Surat",
          time: "15 minutes ago",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Browse & Connect",
    description:
      "Search through carefully reviewed profiles of Bohras who share your culture, values, and aspirations. Whether you're looking for a deep connection or just beginning your rishta journey, FindABohra helps you find real people with genuine intentions.",
    image: "browse-feature",
    phoneContent: {
      profiles: [
        {
          name: "Rukaiya Merchant, 27",
          location: "Los Angeles, CA, USA",
          about:
            "Curious mind, chai lover, weekend explorer. Friends say I&apos;m thoughtful with a sarcastic sense of humor. I love deep talks, cozy cafés, and spontaneous hikes.",
        },
        {
          name: "Hatim Diwan, 21",
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
      "Let your profile shine! Boost it to appear more often in searches and suggestions. More visibility means more connections — all while staying true to your values and intentions.",
    image: "boost-feature",
    phoneContent: {
      profiles: [
        {
          name: "Yusuf Shakir, 29",
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
      "Want your message to be seen first? With message priority, your texts are placed at the top of their inbox — increasing visibility and response chances, especially in busy conversations.",
    image: "message-priority-feature",
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
];

export function FeaturesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = carouselItems[currentIndex];

  return (
    <section
      id="features"
      className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 relative"
    >
      {/* Decorative hearts */}
      <div className="absolute bottom-5 left-0">
        <Hearts scale="scale-x-[-1]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Find Your Perfect Match
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtfully designed features that respect our traditions while
            embracing modern convenience.
          </p>
        </div>

        {/* Carousel Content */}
        <div className="grid lg:grid-cols-2 items-center">
          {currentItem.id === 1 && <Slide1 currentItem={currentItem} />}

          {currentItem.id === 2 && <Slide2 currentItem={currentItem} />}

          {currentItem.id === 3 && <Slide3 currentItem={currentItem} />}

          {currentItem.id === 4 && <Slide4 currentItem={currentItem} />}

          {currentItem.id === 5 && <Slide5 currentItem={currentItem} />}

          {/* Right - Feature Description */}
          <FeatureDescription currentItem={currentItem} />
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-12 space-x-3">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                index === currentIndex
                  ? "bg-[#67295F] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onMouseEnter={() => index === currentIndex && setIsPaused(true)}
              onMouseLeave={() => index === currentIndex && setIsPaused(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
