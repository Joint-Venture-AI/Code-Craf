"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abdul Sattar",
    role: "Software Engineer",
    image: "/satter.png",
    bio: "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
    description:
      "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
  },
  {
    id: 2,
    name: "Sharif Hossain",
    role: "AI Engineer",
    image: "/sharif.png",
    bio: "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
    description:
      "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
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
    name: "Kamal Hassan",
    role: "Data Scientist",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
    description:
      "Expert in data analysis and visualization with a focus on extracting actionable insights.",
  },
  {
    id: 7,
    name: "Khandaker Z",
    role: "Software Engineer",
    image: "/khandaker.png",
    bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
    description:
      "Expert in data analysis and visualization with a focus on extracting actionable insights.",
  },
  {
    id: 8,
    name: "Sadiqul Islam",
    role: "Software Engineer",
    image: "/sadiqul-islam.png",
    bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
    description:
      "Expert in data analysis and visualization with a focus on extracting actionable insights.",
  },
];

export default function TeamCarousel() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Duplicate the team members to create a seamless loop
  const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

  return (
    <section className='w-full max-w-7xl mx-auto  px-4'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>
          Our <span className='text-purple-600'>Team</span>
        </h2>
        <p className='text-gray-600 mt-4 max-w-3xl mx-auto'>
          Meet the talented professionals behind CodeCraf innovative AI
          solutions.
        </p>
      </div>

      <div ref={marqueeRef} className='relative overflow-hidden'>
        <div className='flex overflow-hidden'>
          <motion.div
            className='flex gap-6'
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set of cards */}
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className='bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs'
              >
                <div className='aspect-square relative'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold'>{member.name}</h3>
                  <p className='text-purple-600 mb-3'>{member.role}</p>
                  <p className='text-gray-600 text-sm'>{member.description}</p>
                </div>
              </div>
            ))}

            {/* Duplicated set for seamless looping */}
            {teamMembers.map((member) => (
              <div
                key={`dup-${member.id}`}
                className='bg-white rounded-lg overflow-hidden shadow-md flex-shrink-0 w-full max-w-xs'
              >
                <div className='aspect-square relative'>
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold'>{member.name}</h3>
                  <p className='text-purple-600 mb-3'>{member.role}</p>
                  <p className='text-gray-600 text-sm'>{member.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, Linkedin, Twitter, Github } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   bio: string;
// }

// export default function TeamSection() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   // Parallax effect on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const teamElements = document.querySelectorAll(".team-member-card");

//       teamElements.forEach((element, index) => {
//         const offset = scrollPosition * (0.02 + index * 0.01);
//         (element as HTMLElement).style.transform = `translateY(${
//           offset * -1
//         }px)`;
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const teamMembers: TeamMember[] = [
//     {
//       name: "Abdul Sattar",
//       role: "Software Engineer",
//       image: "/satter.png",
//       bio: "AI expert with 7+ years of experience in developing cutting-edge solutions for businesses worldwide.",
//     },
//     {
//       name: "Sharif Hossain",
//       role: "AI Engineer",
//       image: "/sharif.png",
//       bio: "Specializes in machine learning algorithms and neural networks with expertise in TensorFlow and PyTorch.",
//     },
//     {
//       name: "Md Rakibul Islam",
//       role: "Full-Stack Developer",
//       image: "/rakib.png",
//       bio: "Expert in building robust backend systems and intuitive frontends for AI-powered applications.",
//     },
//     {
//       name: "Zaman Sheikh",
//       role: "Mobile App Developer",
//       image: "/zaman.png",
//       bio: "Creates seamless mobile experiences that integrate advanced AI capabilities for iOS and Android.",
//     },
//     {
//       name: "Zakaria Rabby",
//       role: "UI/UX Designer",
//       image: "/zakaria.png",
//       bio: "Designs intuitive interfaces that make complex AI technologies accessible and user-friendly.",
//     },
//     {
//       name: "Kamal Hassan",
//       role: "Data Scientist",
//       image: "/placeholder.svg?height=400&width=400",
//       bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     },
//     {
//       name: "Khandaker Z",
//       role: "Software Engineer",
//       image: "/khandaker.png",
//       bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     },
//     {
//       name: "Sadiqul Islam",
//       role: "Software Engineer",
//       image: "/sadiqul-islam.png",
//       bio: "Expert in data analysis and visualization with a focus on extracting actionable insights.",
//     },
//   ];

//   return (
//     <div className='py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden'>
//       {/* Abstract Background Elements */}
//       <div className='absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl'></div>
//       <div className='absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl'></div>

//       <div className='container mx-auto px-4 relative z-10'>
//         <div className='text-center mb-12'>
//           <motion.h2
//             className='text-3xl md:text-4xl font-bold'
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             Our <span className='text-purple-600'>Team</span>
//           </motion.h2>
//           <motion.p
//             className='mt-4 text-gray-600 max-w-3xl mx-auto'
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             Meet the talented professionals behind NexusAI's innovative AI
//             solutions.
//           </motion.p>
//         </div>

//         <div className='relative'>
//           {/* Navigation Arrows */}
//           <div className='hidden md:block'>
//             <Button
//               variant='outline'
//               size='icon'
//               className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md'
//               onClick={scrollLeft}
//             >
//               <ArrowLeft className='h-5 w-5' />
//             </Button>

//             <Button
//               variant='outline'
//               size='icon'
//               className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md'
//               onClick={scrollRight}
//             >
//               <ArrowRight className='h-5 w-5' />
//             </Button>
//           </div>

//           {/* Scrollable Container */}
//           <div
//             ref={scrollContainerRef}
//             className='flex overflow-x-auto gap-6 pb-8 pt-4 px-4 -mx-4 snap-x scrollbar-hide'
//             style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//           >
//             {teamMembers.map((member, index) => (
//               <motion.div
//                 key={index}
//                 className='team-member-card flex-shrink-0 w-[280px] md:w-[320px] snap-center'
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 whileHover={{ y: -10 }}
//               >
//                 <div className='bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full'>
//                   <div className='relative overflow-hidden group'>
//                     <div className='aspect-square bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center overflow-hidden'>
//                       <img
//                         src={member.image || "/placeholder.svg"}
//                         alt={member.name}
//                         className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
//                       />
//                     </div>
//                     <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
//                       <div className='p-4 w-full'>
//                         <div className='flex justify-center gap-3'></div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='p-6'>
//                     <h3 className='text-xl font-bold text-gray-900 mb-1'>
//                       {member.name}
//                     </h3>
//                     <p className='text-purple-600 mb-3'>{member.role}</p>
//                     <p className='text-gray-600 text-sm'>{member.bio}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
