import Mail from './mail.svg'
import Github from './github.svg'

const components = {
  mail: Mail,
  github: Github,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      {SocialSvg != null && (
        <SocialSvg
          className={`fill-current text-gray-700 hover:text-primary-400 dark:text-gray-200 dark:hover:text-primary-500 h-${size} w-${size}`}
        />
      )}
    </a>
  )
}

export default SocialIcon
