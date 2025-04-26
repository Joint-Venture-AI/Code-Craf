"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface ServicePackageProps {
  title: string
  price: number
  description: string
  features: string[]
  isPopular: boolean
}

export default function ServicePackage({ title, price, description, features, isPopular }: ServicePackageProps) {
  return (
    <motion.div
      className={`rounded-xl overflow-hidden transition-all duration-300 ${
        isPopular
          ? "border-2 border-purple-500 shadow-lg transform md:-translate-y-2"
          : "border border-gray-200 shadow-sm hover:shadow-md"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: isPopular ? -8 : -5 }}
    >
      {isPopular && (
        <motion.div
          className="bg-purple-600 text-white text-center py-2 font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Most Popular
        </motion.div>
      )}

      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline mb-4">
          <span className="text-3xl font-bold text-purple-600">${price}</span>
          <span className="text-gray-500 ml-1">/ project</span>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            className={`w-full ${
              isPopular ? "bg-[#1dbf73] hover:bg-[#19a463] text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
            onClick={() => window.open("https://www.fiverr.com/", "_blank")}
          >
            Order on Fiverr
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
