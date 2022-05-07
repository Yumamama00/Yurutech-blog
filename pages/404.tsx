import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO
        title={`Page not found | ${siteMetadata.title}`}
        description="お探しのページは見つかりませんでした。"
      ></PageSEO>

      <div className="my-auto flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <span className="text-5xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            404
          </span>
        </div>

        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-xl">
            お探しのページは見つかりませんでした。
          </p>
          <Link href="/">
            <button className="focus:shadow-outline-primary inline rounded-lg border border-transparent bg-primary-500 px-4 py-2 text-sm font-semibold leading-5 text-white shadow transition-colors duration-150 hover:bg-primary-700 focus:outline-none dark:hover:bg-primary-500">
              ホーム画面に戻る
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
