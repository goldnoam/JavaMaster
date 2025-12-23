
export interface VersionUpdate {
  version: string;
  description: string;
}

export interface JavaTopic {
  id: string;
  title: string;
  category: 'Basics' | 'Modern Java' | 'GUI' | 'Networking' | 'Enterprise' | 'Architecture';
  version?: string;
  description: string;
  codeSnippet: string;
  explanation: string;
  expectedOutput?: string;
  versionHistory?: VersionUpdate[];
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
