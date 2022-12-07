import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Nate Geslin
          </h1>
        </div>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          Experienced Senior Software Engineer with a demonstrated history of working in the
          information technology and services industry. Skilled in Typescript, HTML, CSS, Node,
          Ruby, Python, and Golang.
        </div>
      </div>
    </>
  )
}
