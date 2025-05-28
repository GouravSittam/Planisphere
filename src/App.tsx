import React from "react";
import { PricingToggle } from "./components/pricing-toggle";
import { PricingCard } from "./components/pricing-card";
import { FeatureComparison } from "./components/feature-comparison";
import { FaqSection } from "./components/faq-section";
import { SmoothCursor } from "./components/ui/smooth-cursor";

const pricingPlans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    description: "Perfect for side projects and simple applications",
    features: [
      "Up to 3 projects",
      "Basic analytics",
      "Community support",
      "1GB storage"
    ]
  },
  {
    name: "Pro",
    price: { monthly: 29, yearly: 279 },
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Team collaboration"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: { monthly: 99, yearly: 949 },
    description: "For large organizations with custom needs",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "24/7 phone support",
      "Unlimited storage",
      "SLA guarantee"
    ]
  }
];

export default function App() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <>
      <SmoothCursor />
      <div className="relative min-h-screen w-full overflow-x-hidden bg-black">
        <div className="min-h-screen bg-gradient-to-b from-default-50 to-content2 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="h-full overflow-auto bg-white">
              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-16">
                  <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Simple, Transparent Pricing</h1>
                  <p className="text-xl text-default-600 max-w-2xl mx-auto">
                    Choose the perfect plan for your needs. No hidden fees.
                  </p>
                </div>

                {/* Pricing Toggle */}
                <PricingToggle isYearly={isYearly} onChange={setIsYearly} />

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                  {pricingPlans.map((plan) => (
                    <PricingCard
                      key={plan.name}
                      plan={plan}
                      isYearly={isYearly}
                    />
                  ))}
                </div>

                {/* Feature Comparison */}
                <div className="mb-24 bg-content1 p-8 rounded-xl shadow-md">
                  <h2 className="text-3xl font-bold text-center mb-8">Compare Features</h2>
                  <FeatureComparison />
                </div>

                {/* FAQ Section */}
                <div className="max-w-4xl mx-auto bg-content1 p-8 rounded-xl shadow-md">
                  <FaqSection />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}