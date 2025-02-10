import { ArticleList } from '../components/ArticleList'

export default function ArticlesPage() {
  return (
    <div className='container mx-auto px-4 py-20'>
      <h1 className='text-4xl font-bold mb-8'>Artigos Técnicos</h1>
      <ArticleList />
    </div>
  )
}
