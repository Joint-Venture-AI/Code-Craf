// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// type TeamMember = {
//   id: number;
//   name: string;
//   role: string;
//   description: string;
//   image: string;
//   bio: string;
// };

// const teamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Abdul Sattar",
//     role: "Software Engineer",
//     image: "/satter.png",
//     bio: "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
//     description:
//       "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
//   },
//   {
//     id: 2,
//     name: "Sharif Hossain",
//     role: "AI Engineer",
//     image: "/sharif.png",
//     bio: "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
//     description:
//       "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
//   },
//   {
//     id: 3,
//     name: "Md Rakibul Islam",
//     role: "Full-Stack Developer",
//     image: "/rakib.png",
//     bio: "Expert in building robust backend systems and intuitive frontends for AI-powered applications.",
//     description:
//       "Expert in building robust backend systems and intuitive frontends for AI-powered applications.",
//   },
//   {
//     id: 4,
//     name: "Zaman Sheikh",
//     role: "Mobile App Developer",
//     image: "/zaman.png",
//     bio: "Creates seamless mobile experiences that integrate advanced AI capabilities for iOS and Android.",
//     description:
//       "Creates seamless mobile experiences that integrate advanced AI capabilities for iOS and Android.",
//   },
//   {
//     id: 5,
//     name: "Zakaria Rabby",
//     role: "UI/UX Designer",
//     image: "/zakaria.png",
//     bio: "Designs intuitive interfaces that make complex AI technologies accessible and user-friendly.",
//     description:
//       "Designs intuitive interfaces that make complex AI technologies accessible and user-friendly.",
//   },
//   {
//     id: 6,
//     name: "Kamal Hassan",
//     role: "Data Scientist",
//     image: "/placeholder.svg?height=400&width=400",
//     bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     description:
//       "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//   },
//   {
//     id: 7,
//     name: "Khandaker Z",
//     role: "Software Engineer",
//     image: "/khandaker.png",
//     bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     description:
//       "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//   },
//   {
//     id: 8,
//     name: "Sadiqul Islam",
//     role: "Software Engineer",
//     image: "/sadiqul-islam.png",
//     bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     description:
//       "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//   },
// ];

// export default function TeamCarousel() {
//   const marqueeRef = useRef<HTMLDivElement>(null);

//   // Duplicate the team members to create a seamless loop
//   const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

//   return (
//     <section  className='w-full max-w-7xl mx-auto px-4 pb-4'>
// <div className='text-center mb-12'>
//   <h2 className='text-4xl font-bold'>
//     Our <span className='text-purple-600'>Team</span>
//   </h2>
//   <p className='text-gray-600 mt-4 max-w-3xl mx-auto'>
//     Meet the talented professionals behind CodeCraf innovative AI
//     solutions.
//   </p>
// </div>

//       <div ref={marqueeRef} className='relative overflow-hidden'>
//         <div className='flex overflow-hidden'>
//           <motion.div
//             className='flex gap-6'
//             animate={{
//               x: ["0%", "-50%"],
//             }}
//             transition={{
//               x: {
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "loop",
//                 duration: 20,
//                 ease: "linear",
//               },
//             }}
//           >
//             {/* First set of cards */}
//             {teamMembers.map((member) => (
//               <div
//                 key={member.id}
//                 className='bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs'
//               >
//                 <div className='aspect-square relative'>
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     fill
//                     className='object-cover'
//                   />
//                 </div>
//                 <div className='p-6'>
//                   <h3 className='text-xl font-semibold'>{member.name}</h3>
//                   <p className='text-purple-600 mb-3'>{member.role}</p>
//                   <p className='text-gray-600 text-sm'>{member.description}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Duplicated set for seamless looping */}
//             {teamMembers.map((member) => (
//               <div
//                 key={`dup-${member.id}`}
//                 className='bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs'
//               >
//                 <div className='aspect-square relative'>
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     fill
//                     className='object-cover'
//                   />
//                 </div>
//                 <div className='p-6'>
//                   <h3 className='text-xl font-semibold'>{member.name}</h3>
//                   <p className='text-purple-600 mb-3'>{member.role}</p>
//                   <p className='text-gray-600 text-sm'>{member.description}</p>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useMobile1 from "@/hooks/use-mobile1";
// import { useMobile } from "@/hooks/use-mobile"

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shovon",
    role: "CEO at CodeCraf",
    image: "/CodeCraf-removebg-preview2.png",
    bio: "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
    description:
      "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
  },
  {
    id: 2,
    name: "Saidul Mursalin Khan",
    role: "AI Engineer",
    image: "/saidul.jpg",
    bio: "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
    description:
      "AI expert with 2+ years of experience in developing cutting-edge solutions for businesses worldwide.",
  },

  {
    id: 3,
    name: "Md Rakibul Islam",
    role: "Full-Stack Developer",
    image: "/rakib.png",
    bio: "Expert in building robust backend systems and intuitive frontends for AI-powered applications.",
    description:
      "Expert in building robust backend systems and intuitive frontends for AI-powered applications.",
  },
  {
    id: 4,
    name: "Zaman Sheikh",
    role: "Mobile App Developer",
    image: "/zaman.png",
    bio: "Creates seamless mobile experiences that integrate advanced AI capabilities for iOS and Android.",
    description:
      "Creates seamless mobile experiences that integrate advanced AI capabilities for iOS and Android.",
  },
  {
    id: 5,
    name: "Zakaria Rabby",
    role: "UI/UX Designer",
    image: "/zakaria.png",
    bio: "Designs intuitive interfaces that make complex AI technologies accessible and user-friendly.",
    description:
      "Designs intuitive interfaces that make complex AI technologies accessible and user-friendly.",
  },
  {
    id: 6,
    name: "Sharif Mahamud",
    role: "Full-Stack Developer",
    image: "/sharif.png",
    bio: "Full-stack developer with a focus on building scalable and efficient applications.",
    description:
      "Full-stack developer with a focus on building scalable and efficient applications.",
  },
  {
    id: 7,
    name: "Sadiqul Islam",
    role: "Software Engineer",
    image: "/sadiqul-islam.png",
    bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
    description:
      "Expert in data analysis and visualization with a focus on extracting actionable insights.",
  },
  {
    id: 8,
    name: "Abdul Sattar",
    role: "Senior Software Engineer",
    image: "/satter.png",
    bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
    description:
      "Backend systems expert with a focus on building scalable and efficient applications.",
  },
];

export default function TeamCarousel() {
  const isMobile = useMobile1();

  // Determine number of slides to show based on screen size
  const slidesToShow = isMobile ? 1 : 3;

  return (
    <div className='relative container mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>
          Our <span className='text-purple-600'>Team</span>
        </h2>
        <p className='text-gray-600 mt-4 max-w-3xl mx-auto'>
          Meet the talented professionals behind CodeCraf innovative AI
          solutions.
        </p>
      </div>
      <div className='py-6  cursor-grab select-none'>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className='w-full'
        >
          <CarouselContent className='-ml-4'>
            {teamMembers.map((member) => (
              <CarouselItem
                key={member.id}
                className={`pl-4 ${
                  isMobile ? "basis-full" : "basis-1/3"
                } md:basis-1/3 lg:basis-1/3`}
              >
                <TeamMemberCard member={member} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='absolute left-2 top-56 transform-none mr-2' />
          <CarouselNext className='absolute right-2 top-56 transform-none ml-2' />
        </Carousel>
      </div>
    </div>
  );
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className='h-full overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      <div className='relative  w-full'>
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          height={80}
          width={200}
          className='lg:h-[400px] h-[300px]  w-full'
          sizes='(max-width: 768px) 100vw, 33vw'
        />
      </div>
      <CardContent className='p-6'>
        <h3 className='text-xl font-semibold mb-1'>{member.name}</h3>
        <p className='text-primary font-medium mb-3'>{member.role}</p>
        <p className='text-gray-600 text-sm'>{member.bio}</p>
      </CardContent>
    </Card>
  );
}
