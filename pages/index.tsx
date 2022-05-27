import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import FeaturedPost from '../components/FeaturedPost'
import CardPost from '../components/CardPost'
import Footer from '../components/Footer'
import PostData from '../utils/post.json'
import Layout from '../components/Layout'
import Container from '../components/Container'

const Home: NextPage = () => {
  const [posts, setPosts] = useState(PostData);
  return (
    <Layout>
      <Head>
        <title>Home &mdash; Next App</title>
      </Head>
      <Navbar />
        <Container>
        <p className='flex lg:hidden justify-center text-3xl mt-4 mb-8'>Featured Post</p>
        <FeaturedPost />
        <p className='flex justify-center text-3xl mt-12 mb-0'>Another Post</p>
        <div className="flex justify-center flex-wrap gap-y-6 mt-10">
          {
            posts.map(post => (
              <article key={post.id} className="sm:w-6/12 lg:w-4/12 px-4">
                <CardPost {...post} />
              </article>
            ))}
        </div>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Home
