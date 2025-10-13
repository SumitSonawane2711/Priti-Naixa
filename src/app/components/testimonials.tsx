import React from 'react';
import Marquee from "react-fast-marquee";
import { SectionHeading } from './section-heading';
import { SubHeading } from './subheading';
import Image from 'next/image';

export const Testimonials = () => {
    const data = [
        {
            quote:
                "I booked a T-permit cab from Priti Naixa for my Mumbai to Pune business trip. The service was punctual and the driver was extremely professional. Highly recommended!",
            name: "Rajesh Sharma",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
        },
        {
            quote:
                "Very smooth experience with Priti Naixa! The booking process was simple, and the car was in excellent condition. Best service for T-permit rentals.",
            name: "Sneha Patel",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
        },
        {
            quote:
                "I needed a T-permit car for airport transfers in Mumbai, and Priti Naixa made it completely hassle-free. Great communication and reliable drivers.",
            name: "Amit Deshmukh",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
        },
        {
            quote:
                "Superb service! The driver was polite, the vehicle was clean, and the trip from Nashik to Mumbai was very comfortable. Will definitely book again.",
            name: "Priya Iyer",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
        },
        {
            quote:
                "I often travel for work and Priti Naixa’s T-permit cars are my go-to choice. Affordable pricing and very professional team.",
            name: "Vikas Pawar",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
        },
        {
            quote:
                "Had a wonderful experience! The team helped me find a T-permit cab quickly for my family trip. Great service quality and customer support.",
            name: "Neha Joshi",
            avatar: "https://imgs.search.brave.com/OuO4Z-TnN7qPnap7daRqnxt8r_gV63ug1XQ-KbYcp30/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNz/LmNyYWl5b24uY29t/LzIwMjMtMTEtMTUv/R2FnWC00MDFSbUt6/aGs1SDZubm15US53/ZWJw"
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
                <Image width={30} height={30} src={avatar} alt={name}
                    className='size-10 rounded-full object-cover'
                />
                <p className='text-sm text-neutral-500'>{name}</p>
            </div>


        </div>
    )
}