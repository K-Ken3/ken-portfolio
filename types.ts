
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
