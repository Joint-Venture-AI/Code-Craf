"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Star,
  Clock,
  MessageSquare,
  Bot,
  Code,
  Smartphone,
  Network,
  Brain,
  Zap,
  Database,
  CheckCircle2,
  Award,
  ThumbsUp,
  ExternalLink,
  ChevronsLeftRightEllipsis,
  ChevronsLeftRightEllipsisIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServicePackage from "@/components/service-package";
import TestimonialCard from "@/components/testimonial-card";
import TeamSection from "@/components/team-section";
import ProjectSection from "@/components/project-section";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <div className='relative overflow-hidden bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900'>
        {/* Background Pattern */}
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-full h-full'>
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className='absolute rounded-full bg-white'
                initial={{ opacity: 0 }}
                animate={{ opacity: Math.random() * 0.5 + 0.3 }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className='container mx-auto px-4 py-16 md:py-24 relative z-10'>
          <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
            {/* Left Content */}
            <motion.div
              className='flex-1 text-center md:text-left'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Badge className='mb-4 bg-purple-500/20 text-purple-200 hover:bg-purple-500/20 border-purple-400/30 px-3 py-1'>
                Level 2 on Fiverr
              </Badge>

              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight'>
                Professional{" "}
                <motion.span
                  className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300'
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  AI Solutions
                </motion.span>{" "}
                on Fiverr
              </h1>

              <p className='text-lg md:text-xl text-purple-100/90 mb-8 max-w-2xl'>
                We deliver premium AI development services on Fiverr with 100%
                satisfaction guarantee. From chatbots to custom AI solutions, we
                bring your ideas to life.
              </p>

              <div className='flex flex-wrap gap-4 justify-center md:justify-start mb-8'>
                <motion.div
                  className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Star className='h-4 w-4 text-yellow-300' />
                  <span className='text-white font-medium'>
                    5.0 Rating (200+ Reviews)
                  </span>
                </motion.div>

                <motion.div
                  className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Clock className='h-4 w-4 text-green-300' />
                  <span className='text-white font-medium'>Fast Delivery</span>
                </motion.div>

                <motion.div
                  className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Award className='h-4 w-4 text-blue-300' />
                  <span className='text-white font-medium'>Level 2 Seller</span>
                </motion.div>
              </div>

              <motion.div
                className='flex flex-wrap gap-4 justify-center md:justify-start'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {/* <Button
                  size='lg'
                  className='bg-[#1dbf73] hover:bg-[#19a463] text-white border-none'
                  onClick={() =>
                    window.open("https://www.fiverr.com/", "_blank")
                  }
                >
                  View Fiverr Profile <ArrowRight className='ml-2 h-4 w-4' />
                </Button> */}

                <Button
                  onClick={() =>
                    window.open("https://www.fiverr.com/code_craf", "_blank")
                  }
                  size='lg'
                  className='bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white border-none'
                >
                  View Fiverr Profile <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - AI Visual */}
            <motion.div
              className='flex-1 relative'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <div className='relative w-full aspect-square max-w-md mx-auto'>
                <motion.div
                  className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full'
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
                <motion.div
                  className='absolute inset-4 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full'
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                ></motion.div>
                <motion.div
                  className='absolute inset-8 bg-gradient-to-r from-purple-500/40 to-cyan-500/40 rounded-full'
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                ></motion.div>

                <div className='absolute inset-0 flex items-center justify-center'>
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    {/* <Brain className='h-48 w-48 text-white' /> */}
                    <Image
                      src={"/main.webp"}
                      className='rounded-full'
                      width={300}
                      height={300}
                      alt={"Shuvon"}
                    />
                  </motion.div>
                </div>

                <div className='hidden md:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full'>
                  <motion.div
                    className='bg-gradient-to-r from-purple-600/80 to-indigo-600/80 backdrop-blur-md rounded-xl p-4 text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h3 className='text-white text-lg font-bold'>Shovon</h3>
                    <p className='text-purple-200 text-sm'>CEO at CodeCraf</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Service Categories */}
          <motion.div
            className='mt-16 md:mt-24 flex flex-wrap justify-center gap-6'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { icon: <Bot className='h-5 w-5' />, label: "AI Chatbots" },
              { icon: <Code className='h-5 w-5' />, label: "GPT Integration" },
              {
                icon: <Smartphone className='h-5 w-5' />,
                label: "Mobile Apps",
              },
              {
                icon: <ChevronsLeftRightEllipsisIcon className='h-5 w-5' />,
                label: "Web Application",
              },
              {
                icon: <Network className='h-5 w-5' />,
                label: "Neural Networks",
              },
              {
                icon: <Database className='h-5 w-5' />,
                label: "Data Analytics",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className='flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className='text-white'>{item.icon}</div>
                <span className='text-white font-medium'>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='py-16 bg-white' ref={targetRef}>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <motion.div
              style={{ opacity, scale }}
              transition={{ duration: 0.5 }}
            >
              <Badge className='mb-4 text-base bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-5 py-1'>
                Why Choose Us
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Your Trusted <span className='text-purple-600'>AI Partner</span>{" "}
                on Fiverr
              </h2>
              <p className='mt-4 text-base text-gray-600 max-w-3xl mx-auto'>
                With over 5 years of experience in AI development and 200+
                satisfied clients, we deliver exceptional results that exceed
                expectations.
              </p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: "Expertise & Experience",
                description:
                  "Expert-vetted AI developer with 5+ years' experience in AI, NLP, and mobile app development.",
                icon: <Award className='h-8 w-8 text-purple-600' />,
              },
              {
                title: "100% Client Satisfaction",
                description:
                  "Maintaining a perfect 5-star rating with over 200+ reviews on Fiverr through exceptional service and results.",
                icon: <ThumbsUp className='h-8 w-8 text-purple-600' />,
              },
              {
                title: "Timely Delivery",
                description:
                  "Consistently deliver projects promptly without compromising on quality.",
                icon: <Clock className='h-8 w-8 text-purple-600' />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <motion.div
                  className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4'
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#9333ea",
                    color: "#ffffff",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with New Background */}
      <div className='py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden'>
        {/* Abstract Background Elements */}
        <motion.div
          className='absolute top-0 right-0 w-64 h-64 bg-purple-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-0 left-0 w-96 h-96 bg-indigo-200/30 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        ></motion.div>

        <div className='container mx-auto px-4 relative z-10'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className='mb-4 text-base bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-5 py-1'>
                Our Services
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Professional{" "}
                <span className='text-purple-600'>AI Services</span>
              </h2>
              <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
                We offer a range of specialized AI development services on
                Fiverr to help businesses leverage the power of artificial
                intelligence.
              </p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: "AI Chatbot Development",
                description:
                  "Custom chatbots built with the latest AI technologies to enhance customer service and engagement on your website or app.",
                icon: <Bot className='h-8 w-8 text-purple-600' />,
                features: [
                  "24/7 Customer Support",
                  "Personalized Responses",
                  "Multi-platform Integration",
                ],
                price: "Starting at $150",
              },
              {
                title: "GPT Integration",
                description:
                  "Seamless integration of OpenAI's GPT models into your applications for content generation, summarization, and more.",
                icon: <Code className='h-8 w-8 text-purple-600' />,
                features: [
                  "API Implementation",
                  "Custom Prompts",
                  "Response Optimization",
                ],
                price: "Starting at $120",
              },
              {
                title: "AI-Powered Analytics",
                description:
                  "Transform your data into actionable insights with machine learning algorithms and predictive analytics.",
                icon: <Zap className='h-8 w-8 text-purple-600' />,
                features: [
                  "Data Visualization",
                  "Predictive Models",
                  "Business Intelligence",
                ],
                price: "Starting at $200",
              },
              {
                title: "Computer Vision Solutions",
                description:
                  "Image recognition and processing capabilities to extract valuable insights from visual data for your business.",
                icon: <Sparkles className='h-8 w-8 text-purple-600' />,
                features: [
                  "Object Detection",
                  "Image Classification",
                  "Visual Search",
                ],
                price: "Starting at $250",
              },
              {
                title: "Natural Language Processing",
                description:
                  "Process and analyze human language to enable sentiment analysis, text classification, and more.",
                icon: <MessageSquare className='h-8 w-8 text-purple-600' />,
                features: [
                  "Sentiment Analysis",
                  "Text Classification",
                  "Language Translation",
                ],
                price: "Starting at $180",
              },
              {
                title: "Custom AI Development",
                description:
                  "Tailored AI solutions designed specifically for your unique business challenges and objectives.",
                icon: <Brain className='h-8 w-8 text-purple-600' />,
                features: [
                  "Consultation",
                  "Custom Development",
                  "Ongoing Support",
                ],
                price: "Starting at $300",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className='bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-[#a03ac962] group-hover:text-white transition-colors duration-300'
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-600 mb-4'>{service.description}</p>

                <ul className='mb-6 space-y-2'>
                  {service.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className='flex items-center gap-2 text-gray-700'
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className='h-4 w-4 text-green-500' />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className='flex items-center justify-between'>
                  {/* <span className='font-bold text-purple-600'>
                    {service.price}
                  </span> */}
                  <Button
                    size='sm'
                    className='bg-[#1dbf73] hover:bg-[#19a463] text-white'
                    onClick={() =>
                      window.open("https://www.fiverr.com/code_craf", "_blank")
                    }
                  >
                    Order Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <ProjectSection />

      {/* Team Section */}
      <TeamSection />

      {/* Popular Packages Section */}
      <div className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className='mb-4 text-base bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-5 py-1'>
                Fiverr Packages
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Choose Your{" "}
                <span className='text-purple-600'>Perfect Package</span>
              </h2>
              <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
                Select from our most popular Fiverr packages, designed to meet
                different needs and budgets.
              </p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <ServicePackage
              title='Basic'
              price={99}
              description='Perfect for startups and small businesses looking to explore AI solutions.'
              features={[
                "Basic AI Chatbot",
                "1 Platform Integration",
                "Basic Training Data",
                "2 Days Delivery",
                "2 Revisions",
              ]}
              isPopular={false}
            />

            <ServicePackage
              title='Standard'
              price={199}
              description='Ideal for growing businesses that need more comprehensive AI solutions.'
              features={[
                "Advanced AI Chatbot",
                "Multi-platform Integration",
                "Custom Training Data",
                "3 Days Delivery",
                "5 Revisions",
                "30 Days Support",
              ]}
              isPopular={true}
            />

            <ServicePackage
              title='Premium'
              price={349}
              description='Enterprise-grade AI solutions with full customization and priority support.'
              features={[
                "Enterprise AI Solution",
                "Full API Integration",
                "Advanced Training & Analytics",
                "5 Days Delivery",
                "Unlimited Revisions",
                "60 Days Support",
                "Source Code Included",
              ]}
              isPopular={false}
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='py-20 bg-gradient-to-br from-purple-50 to-indigo-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className='mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-3 py-1'>
                Client Feedback
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold'>
                What Our <span className='text-purple-600'>Clients Say</span>
              </h2>
              <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
                Read reviews from satisfied clients who have experienced our AI
                services on Fiverr.
              </p>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <TestimonialCard
              quote='The chatbot solution exceeded my expectations. Response times have decreased by 80% while customer satisfaction has increased significantly.'
              author='Sarah Johnson'
              position='E-commerce Store Owner'
              avatar='/placeholder.svg?height=100&width=100'
              rating={5}
              date='2 weeks ago'
            />
            <TestimonialCard
              quote='Incredible work on our GPT integration. The implementation was smooth and the results have been fantastic. Will definitely order again!'
              author='Michael Chen'
              position='Tech Startup Founder'
              avatar='/placeholder.svg?height=100&width=100'
              rating={5}
              date='1 month ago'
            />
            <TestimonialCard
              quote='The custom AI solution for our healthcare practice has improved patient outcomes and streamlined our administrative processes. Truly transformative.'
              author='Dr. Emily Rodriguez'
              position='Medical Practice Director'
              avatar='/placeholder.svg?height=100&width=100'
              rating={5}
              date='3 months ago'
            />
          </div>

          <div className='text-center mt-12'>
            <Button
              className='bg-white hover:bg-gray-50 text-purple-600 border border-purple-200'
              onClick={() => window.open("https://www.fiverr.com/", "_blank")}
            >
              View All Reviews on Fiverr <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id='contact' className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge className='mb-4 bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200 px-3 py-1'>
                Get In Touch
              </Badge>
              <h2 className='text-3xl md:text-4xl font-bold'>
                Ready to <span className='text-purple-600'>Work Together</span>?
              </h2>
              <p className='mt-4 text-gray-600 max-w-3xl mx-auto'>
                Place an order on Fiverr to get started with your AI project
                today.
              </p>
            </motion.div>
          </div>

          <div className='max-w-4xl mx-auto'>
            <motion.div
              className='bg-white rounded-xl p-8 border border-gray-100 shadow-md'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className='flex flex-col md:flex-row items-center gap-8'>
                <div className='w-full md:w-1/2'>
                  <div className='flex items-center gap-3 mb-6'>
                    <div className='w-10 h-10 bg-[#1dbf73] rounded-full flex items-center justify-center'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17 10.2V7C17 5.9 16.1 5 15 5H9C7.9 5 7 5.9 7 7V10.2C5.8 10.6 5 11.7 5 13V19H19V13C19 11.7 18.2 10.6 17 10.2ZM9 7H15V10H9V7ZM17 17H7V13C7 12.4 7.4 12 8 12H16C16.6 12 17 12.4 17 13V17Z'
                          fill='white'
                        />
                      </svg>
                    </div>
                    <h3 className='text-xl font-bold'>
                      Fiverr Contact Options
                    </h3>
                  </div>

                  <div className='space-y-6'>
                    <motion.div
                      className='flex items-start gap-4'
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0'>
                        <Award className='h-5 w-5 text-purple-600' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900'>
                          Top Rated Seller
                        </h4>
                        <p className='text-gray-600'>
                          Level 2 seller with 120+ positive reviews
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className='flex items-start gap-4'
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0'>
                        <Clock className='h-5 w-5 text-purple-600' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900'>
                          Fast Delivery
                        </h4>
                        <p className='text-gray-600'>
                          Most projects delivered within 2-3 days
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className='flex items-start gap-4'
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0'>
                        <MessageSquare className='h-5 w-5 text-purple-600' />
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900'>
                          Responsive Communication
                        </h4>
                        <p className='text-gray-600'>
                          Quick responses to all messages and inquiries
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className='w-full md:w-1/2 border-t md:border-t-0 md:border-l border-gray-200 pt-6 md:pt-0 md:pl-8'>
                  <h3 className='text-lg font-bold mb-4'>How to Order</h3>
                  <ol className='space-y-4'>
                    <motion.li
                      className='flex items-start gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#1dbf73] text-white flex items-center justify-center text-sm font-bold'>
                        1
                      </div>
                      <p className='text-gray-700'>
                        Visit our Fiverr profile and select the service that
                        matches your needs
                      </p>
                    </motion.li>
                    <motion.li
                      className='flex items-start gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#1dbf73] text-white flex items-center justify-center text-sm font-bold'>
                        2
                      </div>
                      <p className='text-gray-700'>
                        Choose your package (Basic, Standard, or Premium)
                      </p>
                    </motion.li>
                    <motion.li
                      className='flex items-start gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#1dbf73] text-white flex items-center justify-center text-sm font-bold'>
                        3
                      </div>
                      <p className='text-gray-700'>
                        Provide project details and requirements
                      </p>
                    </motion.li>
                    <motion.li
                      className='flex items-start gap-3'
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className='flex-shrink-0 w-6 h-6 rounded-full bg-[#1dbf73] text-white flex items-center justify-center text-sm font-bold'>
                        4
                      </div>
                      <p className='text-gray-700'>
                        Complete your order and we'll start working immediately
                      </p>
                    </motion.li>
                  </ol>

                  <div className='mt-8'>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        className='w-full bg-[#1dbf73] hover:bg-[#19a463] text-white flex items-center justify-center gap-2 py-6'
                        onClick={() =>
                          window.open("https://www.fiverr.com/", "_blank")
                        }
                      >
                        Visit Our Fiverr Profile{" "}
                        <ExternalLink className='h-4 w-4' />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
