export interface Article {
  title: string
  slug: string
  description: string
  date: string
  tags: string[]
  image: string
  content: string
}

export const articles: Article[] = [
  {
    title: 'How to build a blog with Astro',
    slug: 'how-to-build-a-blog-with-astro',
    description: 'Learn how to build a blog with Astro',
    date: '2023-01-01',
    tags: ['astro', 'blog'],
    image: '',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc eget aliquam ultricies, nunc nisl aliquam nunc, eget aliquam nunc nisl eget nunc. Sed euismod, nunc eget aliquam ultricies, nunc nisl aliquam nunc, eget aliquam nunc nisl eget nunc.',
  },
]

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug)
}
