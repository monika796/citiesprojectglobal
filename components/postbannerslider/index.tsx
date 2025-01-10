'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { gql } from '@apollo/client'
import client from 'apollo-client'

const POSTS_QUERY = gql`
  query {
    posts {
      nodes {
        featuredImage {
          node {
            link
          }
        }
        title
        id
        slug
      }
    }
  }
`

interface Post {
  featuredImage?: {
    node?: {
      link: string
    }
  }
  title: string
  id: string
  slug: string
}

const SwiperSection = () => {
  const [posts, setPosts] = useState<Post[]>([])

  // Fetch data with Apollo client
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        })
        // Limit posts to the first 4
        setPosts(data?.posts?.nodes?.slice(0, 4) || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="max-w-[1480px] mx-auto  flex items-center justify-center">
        <div className="w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            draggable={true}
            pagination={{
              clickable: true,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            loop={true}
            cssMode
            className="w-full h-auto"
          >
            {posts.map((post, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center text-lg bg-white">
                <div className="flex">
                  <div
                    className="w-1/3  relative  bg-cover bg-center"
                    // style={{ backgroundImage: `url('${post.featuredImage?.node?.link}')` }}>
                  >
                    {/* <Image src=
                      alt={post.title} width={1000} height={1000} /> */}
                    <Image
                      src={post.featuredImage?.node?.link || '/No_Image.jpg'} // Fallback image
                      layout="fill"
                      objectFit="cover"
                      alt={post.title || 'Default title'} // Provide a fallback title
                    />
                  </div>
                  <Link href={`/articles/${post.slug}`}>
                    <div className="w-2/3 grid p-2">
                      <div>
                        <p className="inline px-2 py-1 text-[11px] bg-[#000000] uppercase h-auto text-white font-bold text-center rounded-[20px] ">
                          News
                        </p>
                      </div>
                      <p className="text-[16px] h-[84px] font-bold text-black pl-1 leading-normal">
                        {post.title.replace(/<[^>]*>/g, '') || 'Untitled'}
                      </p>
                      <p className="text-[13px] underline uppercase text-black">Read more</p>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default SwiperSection
