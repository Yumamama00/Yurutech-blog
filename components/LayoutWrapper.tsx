import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { TagIcon, UserIcon } from '@heroicons/react/outline'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between pt-6 pb-4 md:py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-1 md:mr-3">
                  <Logo />
                </div>

                <div className="text-lg font-bold md:text-2xl">{siteMetadata.headerTitle}</div>
              </div>
            </Link>
          </div>

          <div className="flex flex-row items-center text-base leading-5">
            <div className="hidden sm:flex sm:flex-row">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-primary-400 dark:text-gray-100 dark:hover:text-primary-500 sm:p-4"
                >
                  <div className="flex flex-row items-center">
                    {link.title === 'Tags' ? (
                      <TagIcon className="mr-1 h-4 w-4" />
                    ) : (
                      <UserIcon className="mr-1 h-4 w-4" />
                    )}
                    {link.title}
                  </div>
                </Link>
              ))}
            </div>

            <ThemeSwitch />

            <MobileNav />
          </div>
        </header>

        <main className="mb-auto">{children}</main>

        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
