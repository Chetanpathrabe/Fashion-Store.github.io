import React from 'react'
import Image from 'next/image'
import img from '../src/assets/feature.png'
import Link from 'next/link'

const FeaturesBanner = () => {
  return (
    <section className='features-section'>
      <div className='title'>
        <h1>Unique and Authentic Vintage Designer Jewellery</h1>
      </div>

      <div className='content'>
        <div className='left'>
          <div className="feature-background">
            Different from others
          </div>
          <div>
            <h3>Using Good Quality Materials</h3>
            <p>Quality Materials Are More Durable and Look Better.</p>
          </div>
          <div>
            <h3>100% Handmade Products</h3>
            <p>Every product is Handmade with Love by the Artist.</p>
          </div>
          <div>
            <h3>Modern Fashion Design</h3>
            <p>Modern Fashion Design is influenced by culture and different trends, and has varied over time and place.</p>
          </div>
          <div>
            <h3>Discount for Bulk Orders</h3>
            <p>The discount type applies to customers who purchase items in bulk.</p>
          </div>
        </div>

        <div className='right'>
          <Image src={img} width={300} height={350} alt='img' />
          <div>
            <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'/products'}>
              <button className='btn' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBanner