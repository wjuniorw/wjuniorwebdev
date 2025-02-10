interface ArticleBodyProps {
  content: string
}

export const ArticleBody: React.FC<ArticleBodyProps> = ({ content }) => {
  return (
    <article className='prose prose-lg dark:prose-invert max-w-none'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

export default ArticleBody
