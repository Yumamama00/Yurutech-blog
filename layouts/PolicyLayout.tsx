import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ClockIcon } from '@heroicons/react/outline'
import { ReactNode } from 'react'
import type { Blog } from 'contentlayer/generated'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

interface Props {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
}

export default function PolicyLayout({ content, children }: Props) {
  const { date, title } = content

  return (
    <>
      <PageSEO
        title={`プライバシーポリシー - ${siteMetadata.title}`}
        description="プライバシーポリシー及び免責事項を表示するページです。"
      />

      <SectionContainer>
        <article>
          <div>
            <header>
              <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                <div>
                  <PageTitle>{title}</PageTitle>
                </div>
                <dl>
                  <div>
                    <dt className="sr-only">Published on</dt>
                    <dd className="flex flex-row items-center justify-center text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <ClockIcon className="mr-1 h-4 w-4" />
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </div>
                </dl>
              </div>
            </header>

            <div
              className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 "
              style={{ gridTemplateRows: 'auto 1fr' }}
            >
              <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
              </div>
            </div>
          </div>
        </article>
      </SectionContainer>
    </>
  )
}
