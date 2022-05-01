import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { InferGetStaticPropsType } from 'next'
import { allPolicies } from 'contentlayer/generated'

const DEFAULT_LAYOUT = 'PolicyLayout'

export const getStaticProps = async () => {
  const policy = allPolicies.find((p) => p.slug === 'default')
  return { props: { policy } }
}

export default function Policy({ policy }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={policy} toc={policy.toc} />
}
