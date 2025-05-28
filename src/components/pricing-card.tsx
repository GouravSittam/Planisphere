import React from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface PricingPlan {
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
}

export function PricingCard({ plan, isYearly }: PricingCardProps) {
  const price = isYearly ? plan.price.yearly : plan.price.monthly;
  
  return (
    <div className="relative group">
      {plan.isPopular && (
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 px-6 py-2 
                      text-sm font-medium bg-primary text-white rounded-full z-10 shadow-md">
          Most Popular
        </div>
      )}
      <Card 
        className={`w-full overflow-visible transition-all duration-300 hover:shadow-xl ${
          plan.isPopular 
            ? "border-2 border-primary scale-105 shadow-lg" 
            : "hover:scale-[1.02]"
        }`}
        shadow="md"
      >
        <CardHeader className="flex flex-col gap-3 pb-6">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <p className="text-default-500">{plan.description}</p>
          <div className="flex items-baseline mt-3">
            <span className="text-4xl font-bold">${price}</span>
            <span className="text-default-500 ml-2">/{isYearly ? "year" : "month"}</span>
          </div>
        </CardHeader>
        <CardBody className="gap-8">
          <ul className="space-y-4">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                  <Icon icon="lucide:check" className="text-success w-3 h-3" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            color={plan.isPopular ? "primary" : "default"}
            variant={plan.isPopular ? "shadow" : "bordered"}
            className="w-full py-6 text-base font-medium"
            radius="md"
          >
            Get Started
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}