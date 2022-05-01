import { PageSEO } from '@/components/SEO'
import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name } = content

  return (
    <>
      <PageSEO title={`About - ${siteMetadata.title}`} description={`About - ${name}`} />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10">
            About
          </h1>
        </div>

        <div className="prose max-w-none px-4 pt-8 pb-8 dark:prose-dark xl:col-span-2">
          {children}
        </div>
      </div>
    </>
  )
}
