import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  company: string;
  tags: string[];
  coverImage: string;
  media: ProjectMedia[];
  content: string;
}

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getAllProjects(): Project[] {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  
  const allProjects = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug and content
      return {
        slug,
        title: matterResult.data.title,
        category: matterResult.data.category,
        company: matterResult.data.company,
        tags: matterResult.data.tags || [],
        coverImage: matterResult.data.coverImage,
        media: matterResult.data.media || [],
        content: matterResult.content,
      } as Project;
    });

  return allProjects;
}
