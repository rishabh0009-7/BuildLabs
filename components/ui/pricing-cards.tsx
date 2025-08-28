"use client"

import React from "react"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PricingFeature {
  text: string
  included: boolean
}

interface PricingPlan {
  name: string
  description: string
  price: string
  period?: string
  features: PricingFeature[]
  buttonText: string
  popular?: boolean
  recommended?: boolean
}

interface PricingCardsProps {
  plans: PricingPlan[]
  onPlanSelect?: (planName: string) => void
}

export function PricingCards({ plans, onPlanSelect }: PricingCardsProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={cn(
            "relative p-8 bg-white hover:shadow-xl transition-all duration-300 group",
            plan.popular || plan.recommended
              ? "border-2 border-blue-500 shadow-lg scale-105"
              : "border border-gray-200 hover:border-blue-300"
          )}
        >
          {(plan.popular || plan.recommended) && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm font-medium rounded-full">
                {plan.popular ? "Most Popular" : "Recommended"}
              </Badge>
            </div>
          )}

          <CardContent className="p-0">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-500 text-lg">/{plan.period}</span>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={cn(
                      "w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0",
                      feature.included 
                        ? "bg-blue-500" 
                        : "bg-gray-200"
                    )}>
                      <Check className={cn(
                        "h-3 w-3",
                        feature.included ? "text-white" : "text-gray-400"
                      )} />
                    </div>
                    <span className={cn(
                      "text-sm leading-relaxed",
                      feature.included ? "text-gray-700" : "text-gray-400"
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onPlanSelect?.(plan.name)}
              className={cn(
                "w-full py-4 px-6 rounded-full font-semibold transition-all duration-200 group-hover:scale-105",
                plan.popular || plan.recommended
                  ? "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl"
                  : "bg-white text-blue-500 border-2 border-blue-500 hover:bg-blue-50 hover:border-blue-600"
              )}
            >
              {plan.buttonText}
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
