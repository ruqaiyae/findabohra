type Profile = {
  name: string;
  image?: string;
  bgImage?: string;
  location: string;
  time?: string;
  about?: string;
};

type Tip = {
  icon: string;
  title: string;
  description: string;
};

type MessageItem = {
  name: string;
  time: string;
  message: string;
  notification?: number;
};

type NotificationItem = {
  id: number;
  message: string;
  date: string;
  type: "like" | "message";
};

type ChatContent = {
  name: string;
  messages: string[];
};

type PhoneContent = {
  title?: string;
  content?: string;
  profiles?: Profile[];
  subtitle?: string;
  description?: string;
  tips?: Tip[];
  messageContent?: MessageItem[];
  notifications?: NotificationItem[];
};

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  phoneContent?: PhoneContent;
  chatContent?: ChatContent;
};

export type {
  Profile,
  Tip,
  MessageItem,
  NotificationItem,
  ChatContent,
  PhoneContent,
  CarouselItem,
};
