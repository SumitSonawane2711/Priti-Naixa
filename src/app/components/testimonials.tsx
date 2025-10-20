import React from 'react';
import Marquee from "react-fast-marquee";
import { SectionHeading } from './section-heading';
import { SubHeading } from './subheading';
import Image from 'next/image';

export const Testimonials = () => {
    const data = [
        {
            quote:
                "Good service and same things found whatever seen in videos. Staff behaivor is very good. We are happy.",
            name: "Sayyed Javed",
            avatar: ""
        },
        {
            quote:
                "Efficient service and helping staff are the USPs of Priti Naixa, Specially the owner, Priti mam is a very genuine and helping person.",
            name: "Balram sharan Singh dayal",
            avatar: ""
        },
        {
            quote:
                "I had an amazing experience with this company. The customer service was outstanding, and the product was exactly what I was looking for.",
            name: "Vivek Badhautiya",
            avatar: ""
        },

        {
            quote:
                "Very nice peoples and they are kind.If you want to buy a car go to Priti Naixa.Their work for the car's documents is very fast.",
            name: "Aaryan saroj",
            avatar: ""
        },
        {
            quote:
                "I have great experience at priti naixa Staff was really good specially jasmine And mam in very humble and kind women",
            name: "Renita Lopes",
            avatar: ""
        }
    ]
    return (
        <div className='pb-10 '>
            <SectionHeading delay={0.3}>
                What Our Clients Say
            </SectionHeading>
            <SubHeading>
                See what our happy customers say about us.
            </SubHeading>
            <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%, transparent)]">
                <Marquee speed={25} pauseOnHover gradient={false} className='py-4'>
                    {data.map((item, index) => (
                        <TestimonialCard key={index} {...item} />
                    ))}
                </Marquee>
            </div>

        </div>
    )
}


const TestimonialCard = ({ quote, name, avatar }: { quote: string, name: string, avatar: string }) => {
    return (
        <div className='flex flex-col bg-gray-50 justify-between gap-4 mx-2 rounded-xl h-50 w-full max-w-60 shadow-md p-4'>
            <p className='text-sm text-neutral-700'>{quote}</p>
            <div className='flex items-center gap-4'>
                {avatar ? <Image width={30} height={30} src={avatar} alt={name}
                    className='size-10 rounded-full object-cover'
                /> :
                    <div className="flex items-center object-contain justify-center w-10 h-10 p-2 rounded-full bg-gradient-to-r from-yellow-400 to-sky-500 text-yellow-900 text-md font-bold">
                        {name.charAt(0).toUpperCase()}
                    </div>}

                <p className='text-sm text-neutral-500'>{name}</p>
            </div>


        </div>
    )
}