import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ClockIcon, PencilIcon } from '@heroicons/react/outline'
import { ReactNode } from 'react'
import type { Blog } from 'contentlayer/generated'

interface Props {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: Props) {
  const { slug, date, title, lastmod } = content

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${slug}`} {...content} />

      <ScrollTopAndComment />

      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex flex-row justify-center space-x-4">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="flex flex-row items-center justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <ClockIcon className="mr-1 h-4 w-4" />
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                {lastmod != null && (
                  <dl>
                    <dt className="sr-only">LastUpdated at</dt>
                    <dd className="flex flex-row items-center justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <PencilIcon className="mr-1 h-4 w-4" />
                      <time dateTime={lastmod}>{formatDate(lastmod)}</time>
                    </dd>
                  </dl>
                )}
              </div>
            </div>
          </header>

          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>

            <Comments />

            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${prev.slug}`}
                      className="text-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/blog/${next.slug}`}
                      className="text-primary-600 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
