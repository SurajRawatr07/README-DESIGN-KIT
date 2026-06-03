// GitHub API types
export interface GitHubFile {
  path: string;
  type: 'blob' | 'tree';
  sha: string;
}

// Source reference for AI responses
export interface Source {
  uri: string;
  title?: string;
}

// 
