import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'
import { TagIcon } from '@heroicons/react/outline'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`} passHref>
      <div className="mr-2 flex cursor-pointer flex-row items-center justify-center rounded-xl bg-primary-400 px-2 font-semibold text-gray-700 shadow-sm dark:bg-primary-500 dark:text-white dark:shadow-none">
        <TagIcon className="mr-1 h-3 w-3" />
        <div className="pb-0.5 text-sm">{text.split(' ').join('-')}</div>
      </div>
    </Link>
  )
}

export default Tag
