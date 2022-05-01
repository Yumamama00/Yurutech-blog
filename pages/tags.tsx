import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import kebabCase from '@/lib/utils/kebabCase'
import { getAllTags } from '@/lib/utils/contentlayer'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'

export const getStaticProps: GetStaticProps<{ tags: Record<string, number> }> = async () => {
  const tags = await getAllTags(allBlogs)
  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.title}`} description={`${siteMetadata.description}`} />

      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div className="space-x-2 pt-6 pb-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>

        <div className="flex max-w-lg flex-wrap pt-4 md:pt-0">
          {sortedTags.map((tag) => {
            return (
              <div key={tag} className="mt-2 mb-2 mr-5 flex flex-row">
                <Tag text={tag} />
                <Link
                  href={`/tags/${kebabCase(tag)}`}
                  className="-ml-1 text-xl font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {`(${tags[tag]})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
