import { notFound } from 'next/navigation'
import { getArticleBySlug } from '@/lib/articles'
import { ArticleBody } from '@/components/ArticleBody'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className='mx-auto max-w-2xl'>
      <h1 className='text-3xl font-bold mb-4'>{article.title}</h1>
      <ArticleBody content={article.content} />
    </article>
  )
}
