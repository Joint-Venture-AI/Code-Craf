"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
}

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  // const projects: Project[] = [
  //   {
  //     id: "ai-chatbot",
  //     title: "E-commerce AI Chatbot",
  //     description:
  //       "Intelligent customer service chatbot for a major e-commerce platform that increased customer satisfaction by 35%.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "chatbot",
  //     technologies: ["GPT-4", "React", "Node.js", "MongoDB"],
  //     link: "https://example.com/project1",
  //     featured: true,
  //   },
  //   {
  //     id: "sentiment-analysis",
  //     title: "Social Media Sentiment Analysis",
  //     description:
  //       "Real-time sentiment analysis tool for brand monitoring across social media platforms.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "analytics",
  //     technologies: ["Python", "TensorFlow", "React", "AWS"],
  //     link: "https://example.com/project2",
  //     github: "https://github.com/example/sentiment-analysis",
  //     featured: true,
  //   },
  //   {
  //     id: "image-recognition",
  //     title: "Medical Image Recognition",
  //     description:
  //       "AI-powered diagnostic tool that helps identify anomalies in medical imaging with 98% accuracy.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "computer-vision",
  //     technologies: ["PyTorch", "Python", "Flask", "TensorFlow"],
  //     featured: true,
  //   },
  //   {
  //     id: "language-translator",
  //     title: "Real-time Language Translator",
  //     description:
  //       "Advanced NLP-based translator that works across 24 languages with contextual understanding.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "nlp",
  //     technologies: ["Transformer Models", "React Native", "Node.js"],
  //     link: "https://example.com/project4",
  //     featured: false,
  //   },
  //   {
  //     id: "recommendation-engine",
  //     title: "Content Recommendation Engine",
  //     description:
  //       "Personalized content recommendation system for a streaming platform that increased user engagement by 42%.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "analytics",
  //     technologies: ["Python", "Collaborative Filtering", "AWS", "Redis"],
  //     featured: true,
  //   },
  //   {
  //     id: "voice-assistant",
  //     title: "Custom Voice Assistant",
  //     description:
  //       "Industry-specific voice assistant for healthcare providers that streamlines patient information retrieval.",
  //     image: "/placeholder.svg?height=600&width=800",
  //     category: "nlp",
  //     technologies: ["Speech Recognition", "GPT-3", "React", "Node.js"],
  //     link: "https://example.com/project6",
  //     featured: false,
  //   },
  // ];

  const projects = [
    {
      id: 1,
      title: "AI-powered audio recording app",
      description:
        "CleverTalk is an AI-powered app that captures audio, converts speech to text, and organizes it efficiently. It offers real-time transcription, summaries, and searchable notes, with cloud syncing. Ideal for professionals, students, and content creators, it helps manage meetings, conversations, and personal reminders easily. ",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/c06fa8c89c34bade6a515da316f76f8a-1742277575237/AI-powered%20audio%20recording%20app.png",
      tags: ["Smart Summaries", "High-Quality Recording", "AI Transcription"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdkOTBjNDI1MjVlMTMwMDAxOWI3NTE1",
    },
    {
      id: 2,
      title: "Health & Fitness app",
      description:
        "Kardena is a smart Watch App – Your All-in-One Health & Fitness Companion Elevate your wellness journey with our cutting-edge Smart Watch App, designed to seamlessly integrate with your smartwatch and provide real-time health insights. Whether you're tracking your daily activity, monitoring vital health metrics, or setting personalized fitness goals, this app empowers you to take charge of your well-being effortlessly.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/c09cbf5fbc825c4a04f68a3750d3e11d-1742806343469/Fitness%20app.png",
      tags: ["Health", "Fitness", "Fitness Companion"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdlMTFlNjg3ZWZlOGUwMDAxODcwNGYw",
    },
    {
      id: 3,
      title: "Currency Exchange App",
      description:
        "With Cashly, we’ve built a smart, secure, and user-friendly currency exchange app that travelers, investors, and global businesses can rely on. Real-time rates, instant conversions, a multi-currency wallet, and powerful analytics—all in one sleek platform. It’s everything global users need to manage and exchange money with confidence. ",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/bc7819f521fa87eaf2493c455f46ee58-1742807407684/Currency%20Exchange%20or%20Forex%20Management%20App.png",
      tags: ["Cash", "Finance", "Real-time"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdlMTIxYzM2OTRmNzIwMDAxNmEyMmY2",
    },
    {
      id: 4,
      title: "Medical booking app",
      description:
        "This user-friendly mobile app that allows patients to quickly book doctor appointments, access medical records, receive appointment reminders, and consult with healthcare professionals via video calls. Designed to simplify healthcare access, the app connects users with clinics, hospitals, and specialists anytime, anywhere.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/92e403cd61d9ca9a5f3e1ead4c6f89ab-1743055194192/Doctors.png",
      tags: ["Mobile App", "AI", "Health"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdlNGVhNmQ4NzQ3ZmEwMDAxM2E5ODVi",
    },
    {
      id: 5,
      title: "Umrah Guide App",
      description:
        "Umrah Guide & Connection – Your Ultimate Pilgrimage Companion Embark on your spiritual journey with confidence using Umrah Guide & Connection, the ultimate app designed to assist pilgrims at every step of their Umrah. Whether you're a first-time traveler or an experienced pilgrim, this app provides essential guidance, real-time support, and seamless connectivity with fellow travelers and service providers, ensuring a smooth and spiritually fulfilling experience.",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/4b2c1feaea14d25da73157f912943484-1743055958434/Umrah%20Guide%20App.png",
      tags: ["Education", "ChatGPT", "Guidance"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdlNGVkMmU4NzQ3ZmEwMDAxM2E5OTMw",
    },
    {
      id: 6,
      title: "Language learning app",
      description:
        "DianaDiaz is an immersive language learning app designed to build your fluency through real-time feedback, AI-powered practice, and interactive lessons. Whether you’re a beginner, intermediate, or advanced learner, DianaDiaz helps you master pronunciation, expand vocabulary, and gain the confidence to speak naturally. ",
      image:
        "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/project_item/attachment/5e98c8c8a74bfede81c681896638d63a-1743850588729/Language%20learning%20app%20.jpg",
      tags: ["Learn", "AI", "Real-time"],
      link: "https://www.fiverr.com/users/code_craf/portfolio/NjdmMTBkMGQ2NmRjN2YwMDAxYmI2Y2Ew",
    },
  ];
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "chatbot", name: "Chatbots" },
    { id: "analytics", name: "Analytics" },
    { id: "computer-vision", name: "Computer Vision" },
    { id: "nlp", name: "NLP" },
  ];

  // const filteredProjects =
  //   activeFilter === "all"
  //     ? projects
  //     : projects.filter((project) => project.category === activeFilter);

  return (
    <div id="portfolio" className='py-20 bg-white relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-40 left-0 w-64 h-64 bg-purple-100/50 rounded-full -translate-x-1/2 blur-3xl'></div>
      <div className='absolute bottom-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full translate-x-1/2 blur-3xl'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Badge className='mb-4 text-base bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-5 py-1'>
              Our Portfolio
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Recent <span className='text-purple-600'>AI Projects</span>
            </h2>
            <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
              Explore our latest AI solutions that have helped businesses
              transform their operations and customer experiences.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        {/* <motion.div
          className='flex flex-wrap justify-center gap-3 mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`rounded-full ${
                activeFilter === category.id
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "text-gray-700 hover:text-purple-600 hover:border-purple-300"
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group ${
                true ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
            >
              <div className='relative overflow-hidden'>
                <div className='aspect-video bg-gradient-to-br from-purple-100 to-indigo-100'>
                  <Image
                    width={700}
                    height={700}
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                  <div className='p-6 w-full'>
                    <div className='flex justify-end gap-3'>
                      {project.link && (
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors'
                        >
                          <ExternalLink className='h-4 w-4 text-white' />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-3'>
                  {project.tags.map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs font-medium bg-purple-50 text-purple-600 px-2 py-1 rounded-md'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4'>{project.description}</p>
                <Button
                  variant='link'
                  className='p-0 h-auto text-purple-600 hover:text-purple-700 font-medium flex items-center gap-1 group/btn'
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project Details
                  <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1' />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className='text-center mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
          id="about"
            className='bg-purple-600 hover:bg-purple-700 text-white'
            onClick={() =>
              window.open(
                "https://www.fiverr.com/users/code_craf/portfolio/",
                "_blank"
              )
            }
          >
            View All Projects on Fiverr <ArrowRight className='ml-2 h-4 w-4' />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
