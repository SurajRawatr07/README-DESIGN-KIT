// GitHub API types
export interface GitHubFile {
  path: string;
  type: 'blob' | 'tree';
  sha: string;
}

