import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  image: string
}

export default function ProjectCard({ title, description, category, image }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 group-hover:opacity-0 transition-opacity z-10"></div>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <Badge className="mb-2 bg-purple-100 text-purple-700 hover:bg-purple-100 border-purple-200">{category}</Badge>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <Link
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="text-purple-600 font-medium flex items-center gap-1 hover:text-purple-700 group-hover:gap-2 transition-all"
        >
          View Project <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
