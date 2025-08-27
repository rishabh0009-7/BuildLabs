"use client"

import React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-full border bg-white text-center font-medium transition-colors duration-200",
        className
      )}
      {...props}
    >
      <div className="relative flex items-center justify-center">
        <span className="block transition-all duration-300 group-hover:-translate-x-3 group-hover:text-white">
          {text}
        </span>
        <span className="absolute right-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4">
          <ArrowRight size={16} className="group-hover:text-white text-gray-600" />
        </span>
      </div>
    </button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"

export { InteractiveHoverButton }
