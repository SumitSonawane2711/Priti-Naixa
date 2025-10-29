'use client';

import { SubHeading } from './subheading';
import { motion } from 'motion/react'

interface Review {
  id: string;
  title: string;
  videoUrl: string; // YouTube embed link
}

interface CustomerReviewsProps {
  reviews: Review[];
}

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ reviews }) => {
  if (reviews.length === 0) return null;

  return (
    <section className="pb-8">
      <div className="mx-auto">


        {/* ✅ Responsive wrapper: horizontal scroll on mobile */}
        <div
          className="flex gap-6 p-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {reviews.map((review,idx) => (
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)', y: 50 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: 'easeInOut'
              }}
              viewport={{ once: true }} 
              key={review.id}
              className=" w-[35vh] md:w-full flex-shrink-0 bg-gradient-to-t from-yellow-400 to-white via-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 snap-center"
            >
              <iframe
                className="w-full h-64  rounded-t-xl"
                src={review.videoUrl}
                title={review.title}
                loading='lazy'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 rounded-b-xl  ">
                <SubHeading className="text-gray-900 font-bold">
                  {review.title}
                </SubHeading>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
