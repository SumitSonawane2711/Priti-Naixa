'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
type data = {
    year: number;
    content: {
        title: string;
        description: string;
    }[];
}
export const Timeline = () => {
    const ref = useRef<HTMLDivElement>(null)
    const isInview = useInView(ref, { once: true, amount: 0.6 })
    const data: data[] = [
  {
    year: 2025,
    content: [
      {
        title: "Incorporation as Private Limited",
        description:
          "Registered and established as Priti Naixa Private Limited in March 2025. Expanded rapidly with a strong team of 25–30 professionals and adopted the best workplace standards for employee engagement and satisfaction.",
      },
    ],
  },
  {
    year: 2018,
    content: [
      {
        title: "Beginning of the Journey",
        description:
          "Started as a proprietorship under the name Yogendra Singh Tours and Travels in May 2018, focusing on the T-permit used car buy & selling business.",
      },
    ],
  },
];

    return (
        <div ref={ref} className='py-6'>
            {data.map((year, idx) => (
                <div key={year.year} className='mb-4'>
                    <motion.h2
                        animate={{
                            filter: isInview ? "blur(0px)" : 'blur(10px)',
                            opacity: isInview ? 1 : 0
                        }}
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: 0.1 * idx,
                        }}

                        className='font-bold text-black'>
                        {year.year}
                    </motion.h2>
                    <div className='flex flex-col gap-4'>
                        {year.content.map((item, idx) => (
                            <div key={item.title} className='pl-4'>
                                <Step isInview={isInview} idx={idx}>
                                    <motion.h3
                                        animate={{
                                            opacity: isInview ? 1 : 0,
                                            y: isInview ? 0 : 10
                                        }}
                                        transition={{
                                            duration: 0.3,
                                            ease: 'easeInOut',
                                            delay: 0.1 * idx,
                                        }}
                                        className='text-neutral-800 font-semibold'
                                    >{item.title}</motion.h3>
                                </Step>

                                {item.description && <p className='text-neutral-600 max-w-2xl pt-1 text-sm md:text-base'>{item.description}</p>}
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
}

const Step = (
    { children, className,isInview,idx }: { children: React.ReactNode; className?: string, isInview: boolean, idx: number }) => {
    return <motion.div 
    animate={{
        opacity:isInview ? 1 : 0,
        y: isInview ? 0 : 10
    }}
    transition={{
        duration:0.3,
        ease: 'easeInOut',
        delay: 0.2 * idx
    }}
    className={cn('flex items-start gap-2', className)}>
        <IconCircleCheckFilled className='h-5 w-5 mt-1 text-blue-500' />
        {children}
    </motion.div>
}