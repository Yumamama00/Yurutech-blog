import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        </div>
        <Link
          href="/policy"
          className="mb-2 text-sm text-gray-500 hover:text-primary-400 dark:text-gray-400 dark:hover:text-primary-500"
        >
          プライバシーポリシー/免責事項
        </Link>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{`•`}</div>
          <div>{siteMetadata.title}</div>
        </div>
        <Link
          href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
          className="mb-2 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400"
        >
          <ExternalLinkIcon className="mr-1 h-4 w-4" />
          Tailwind Nextjs Theme
        </Link>
      </div>
    </footer>
  )
}
