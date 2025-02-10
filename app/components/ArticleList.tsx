import Link from 'next/link'

const articles = [
  {
    id: 1,
    title: 'Introdução ao Clean Architecture em Node.js',
    excerpt:
      'Aprenda como implementar Clean Architecture em suas aplicações Node.js para um código mais organizado e manutenível.',
    date: '2023-06-15',
  },
  {
    id: 2,
    title: 'Otimizando Performance em React Native',
    excerpt:
      'Dicas e truques para melhorar a performance de suas aplicações React Native.',
    date: '2023-07-02',
  },
  {
    id: 3,
    title: 'Explorando os Novos Recursos do TypeScript 5.0',
    excerpt:
      'Um overview das novas funcionalidades introduzidas no TypeScript 5.0 e como elas podem beneficiar seu desenvolvimento.',
    date: '2023-07-20',
  },
]

export function ArticleList() {
  return (
    <div className='space-y-8'>
      {articles.map(article => (
        <article
          key={article.id}
          className='border-b border-gray-200 pb-8 last:border-b-0'>
          <Link
            href={`/articles/${article.id}`}
            className='block hover:opacity-80 transition-opacity'>
            <h2 className='text-2xl font-semibold mb-2'>{article.title}</h2>
            <p className='text-foreground/60 mb-2'>{article.excerpt}</p>
            <time className='text-sm text-foreground/40'>{article.date}</time>
          </Link>
        </article>
      ))}
    </div>
  )
}
