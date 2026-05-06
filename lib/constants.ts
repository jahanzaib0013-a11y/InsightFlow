export const SITE_NAME = 'InsightFlow';
export const SITE_DESCRIPTION = 'Upload documents and chat with AI to extract insights';

export const NAVIGATION = [
  { name: 'Welcome', href: '/dashboard', icon: 'home' },
  { name: 'Upload', href: '/dashboard/upload', icon: 'cloud_upload' },
  { name: 'Ask', href: '/dashboard/search', icon: 'search' },
  { name: 'Documents', href: '/dashboard/documents', icon: 'description' },
];

export const FEATURES = [
  {
    title: 'Smart Upload',
    description: 'Upload documents and let our AI automatically extract key insights',
    icon: 'cloud_upload',
  },
  {
    title: 'AI Chat',
    description: 'Ask any question about your documents and get instant answers',
    icon: 'chat',
  },
  {
    title: 'Document Highlights',
    description: 'Automatically highlighted key findings, people, and timeline events',
    icon: 'highlight',
  },
  {
    title: 'Secure Storage',
    description: 'Your documents are encrypted and stored securely',
    icon: 'lock',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Upload',
    description: 'Drag and drop your documents or click to browse',
  },
  {
    number: '02',
    title: 'Process',
    description: 'Our AI analyzes your documents in seconds',
  },
  {
    number: '03',
    title: 'Discover',
    description: 'Get insights with our interactive search',
  },
];

export const METRICS = [
  { label: 'Documents Processed', value: '1M+' },
  { label: 'User Base', value: '50K+' },
  { label: 'Uptime', value: '99.9%' },
  { label: 'Response Time', value: '<500ms' },
];
