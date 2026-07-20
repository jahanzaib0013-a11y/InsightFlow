export interface Document {
  id: string;
  name: string;
  type: string;
  uploadedAt: Date;
  size: number;
  findings?: string[];
  people?: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  relevance: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
}
