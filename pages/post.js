import Navbar from '../components/Navbar'
import Head from 'next/head'
import CardPost from '../components/CardPost'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PostData from '../utils/post.json'
import { useState } from 'react'
import SectionHeader from '../components/SectionHeader'

export default function Post() {
  const [posts, setPosts] = useState(PostData);
  return (
    <Layout>
      <Head>
        <title>Posts &mdash; Next App</title>
      </Head>
    <Navbar />
      <Container>
      <SectionHeader>UI Design</SectionHeader>
      {
        !posts.length ? (
          <div className='text-center min-h-[70vh] flex h-full justify-center flex-col'>
            <h2 className='text-6xl mb-6'>No result 😥</h2>
            <p className='text-xl md:w-6/12 w-full mx-auto'>We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-y-6 mt-10">
          {
            posts.map(post => (
              <article key={post.id} className="sm:w-6/12 lg:w-4/12 px-4">
                <CardPost {...post} />
              </article>
            ))}
        </div>
        )}
    </Container>
    <Footer />
  </Layout >
  )
}
