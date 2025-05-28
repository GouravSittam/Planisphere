import React from "react";
import { Switch } from "@heroui/react";

interface PricingToggleProps {
  isYearly: boolean;
  onChange: (checked: boolean) => void;
}

export function PricingToggle({ isYearly, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-5 mb-12 bg-content1 py-4 px-8 rounded-full shadow-md max-w-md mx-auto">
      <span className={`text-base transition-all ${!isYearly ? "font-semibold text-primary" : "text-default-600"}`}>Monthly</span>
      <Switch 
        isSelected={isYearly}
        onValueChange={onChange}
        size="lg"
        color="primary"
        className="data-[selected=true]:bg-primary"
      />
      <span className={`text-base transition-all flex items-center gap-2 ${isYearly ? "font-semibold text-primary" : "text-default-600"}`}>
        Yearly 
        <span className="text-xs font-medium bg-success/20 text-success px-2 py-1 rounded-full">Save 20%</span>
      </span>
    </div>
  );
}