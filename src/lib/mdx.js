import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from 'rehype-mermaid';

/**
 * Read and serialize an MDX file for use with MDXRemote
 * @param {string} contentPath - Relative path from project root (e.g., 'content/projects/circuit-builder.mdx')
 * @returns {Promise<Object>} - Serialized MDX source ready for MDXRemote
 */
export async function compileMDXFile(contentPath) {
  const fullPath = path.join(process.cwd(), contentPath);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`MDX file not found: ${fullPath}`);
  }
  
  const source = fs.readFileSync(fullPath, 'utf8');
  
  const mdxSource = await serialize(source, {
    parseFrontmatter: false,
    scope: {},
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath],
      rehypePlugins: [
        rehypeKatex,
        [rehypeMermaid, {
          mermaidConfig: {
            theme: 'base',
            themeVariables: {
              // Background
              primaryColor: '#0a0e17',           // Deep space bg
              primaryTextColor: '#e8eaf2',       // Light text
              primaryBorderColor: '#22d3ee',     // Cyan accent
              lineColor: '#94a3b8',              // Muted lines
              
              // Secondary elements
              secondaryColor: '#1a2335',         // Panel bg
              secondaryTextColor: '#cbd5e1',     // Panel text
              tertiaryColor: '#23304a',          // Darker panel
              
              // Accent colors
              edgeLabelBackground: '#0a0e17',
              nodeBorder: '#22d3ee',
              clusterBorder: '#22d3ee',
              clusterBkg: '#111827',
              defaultLinkColor: '#94a3b8',
              titleColor: '#22d3ee',
              edgeLabelColor: '#94a3b8',
              
              // Fonts
              fontFamily: '"Orbitron", "Oswald", sans-serif',
              fontSize: '16px', // <---- This is intentionally bigger than the font size below so that mermaid renders a big enough box for the given text
            },
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis',
            },
            sequence: {
              useMaxWidth: true,
              wrap: true,
              diagramMarginX: 50,
              diagramMarginY: 20,
              actorMargin: 50,
              width: 150,
              height: 65,
              boxMargin: 10,
              boxTextMargin: 5,
              noteMargin: 10,
              messageMargin: 25,
              mirrorActors: true,
              fontFamily: '"Orbitron", "Oswald", sans-serif',
              fontSize: 14,
            },
            securityLevel: 'loose', // Required for iframe-less rendering
          }
        }]
      ],
    },
  });
  
  return mdxSource;
}

/**
 * Check if a project has MDX content
 * @param {Object} project - Project object from data
 * @returns {boolean}
 */
export function hasMDXContent(project) {
  return project.contentPath && typeof project.contentPath === 'string';
}