import { readFileSync } from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
 
const docsDirectory = join(process.cwd(), 'docs');
 
export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
 
  return { slug: realSlug, meta: data, content };
}