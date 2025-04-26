"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
  rating: number
  date?: string
}

export default function TestimonialCard({ quote, author, position, avatar, rating, date }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <Star className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-600 italic mb-6">"{quote}"</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-10 h-10 rounded-full overflow-hidden"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <img src={avatar || "/placeholder.svg"} alt={author} className="w-full h-full object-cover" />
          </motion.div>

          <div>
            <h4 className="font-bold text-gray-900">{author}</h4>
            <p className="text-gray-500 text-sm">{position}</p>
          </div>
        </div>

        {date && <span className="text-gray-400 text-sm">{date}</span>}
      </div>
    </motion.div>
  )
}
