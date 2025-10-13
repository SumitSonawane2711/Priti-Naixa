'use client';

import React from 'react';
import { SubHeading } from './subheading';

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
          {reviews.map((review) => (
            <div
              key={review.id}
              className=" w-[35vh] md:w-full flex-shrink-0 bg-gradient-to-t from-yellow-400 to-white via-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 snap-center"
            >
              <iframe
                className="w-full h-64  rounded-t-xl"
                src={review.videoUrl}
                title={review.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4 rounded-b-xl  ">
                <SubHeading className="text-gray-900 font-bold">
                  {review.title}
                </SubHeading>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
