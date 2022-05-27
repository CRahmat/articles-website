import Navbar from '../components/Navbar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PostMetaTitle from '../components/PostMetaTitle'
import PostAuthor from '../components/PostAuthor'

export default function Details() {
  return (
    <Layout>
      <Head>
        <title>Details &mdash; Next App</title>
      </Head>
    <Navbar />
      <Container>
        <div className='w-6/12 mx-auto text-center flex flex-col items-center'>
            <PostMetaTitle
            postCategory= "UI Design"
            postDate= "July 2, 2021"
            postTitle="Understanding color theory: the color wheel and finding complementary colors"
            />
            <PostAuthor
            image="/thumbnail-3.png"
            author="Leslie Alexander"
            authorTitle="UI Desainer"
            />
            <div className="w-full lg:w-10/12 pr-8 my-10">
                    <img src="/thumbnail-4.png" className="rounded-xl w-full"/>
            </div>
            <div className="w-full pr-8 my-10 text-left">
                <p className='text-sm mb-4'>
                Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they're their brought seas isn't, to day from bearing grass third midst after beginning man which you're. Dry, gathering beginning given made them evening.
                </p>
                <p className='text-xs mb-4'>
                Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Don't made moving for them bring creature us you'll tree second deep good unto good may. Us yielding.
                </p>
                <p className='text-xs mb-4'>
                Have. Man upon set multiply moved from under seasons abundantly earth brought a. They're open moved years saw isn't morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won't and him Third fourth moving him whales behold. Beast second stars lights great was don't green give subdue his. Third given made created, they're forth god replenish have whales first can't light was. Herb you'll them beast kind divided. Were beginning fly air multiply god Yielding sea don't were forth.
                </p>
            </div>
        </div>
    </Container>
    <Footer />
  </Layout >
  )
}
