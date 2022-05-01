import Link from '@/components/Link'

export default function FourZeroFour() {
  return (
    <div className="my-auto flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
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
  )
}
