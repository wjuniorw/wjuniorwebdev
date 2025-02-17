import { Github, Gitlab, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer id='footer' className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <p className='mb-4 md:mb-0'>
            &copy; 2025 Wilson F. S. Junior. Todos os direitos reservados.
          </p>
          <div className='flex space-x-4'>
            <a
              href='https://github.com/wjuniorw'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'>
              <Github size={20} />
            </a>
            <a
              href='https://gitlab.com/wjunior'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'>
              <Gitlab size={20} />
            </a>
            <a
              href='https://linkedin.com/in/wjuniorw'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'>
              <Linkedin size={20} />
            </a>
            <a
              href='https://twitter.com/wfs_junior'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-300 hover:text-white transition-colors'>
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
