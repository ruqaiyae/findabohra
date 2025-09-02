type Profile = {
  name: string;
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
};

type CarouselItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  phoneContent?: PhoneContent;
  chatContent?: ChatContent;
};

export type {
  Profile,
  Tip,
  MessageItem,
  ChatContent,
  PhoneContent,
  CarouselItem,
};
