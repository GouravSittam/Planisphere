import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

const faqs = [
  {
    question: "How does the billing cycle work?",
    answer: "Your billing cycle starts on the day you subscribe. You'll be billed the same day each month for monthly plans, or annually for yearly plans."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. The new rate will be prorated based on the time remaining in your current billing cycle."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For Enterprise plans, we also accept bank transfers."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact our support team for a full refund."
  }
];

export function FaqSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion 
        variant="splitted"
        className="gap-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            title={faq.question}
            classNames={{
              title: "text-lg font-medium",
              content: "text-default-600 px-2",
              base: "bg-content2 hover:bg-content3/50 transition-all"
            }}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}