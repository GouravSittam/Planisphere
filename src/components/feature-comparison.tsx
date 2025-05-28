import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Feature {
  name: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
}

const features: Feature[] = [
  { name: "Unlimited Projects", free: true, pro: true, enterprise: true },
  { name: "API Access", free: false, pro: true, enterprise: true },
  { name: "Team Collaboration", free: false, pro: true, enterprise: true },
  { name: "Custom Domain", free: false, pro: true, enterprise: true },
  { name: "Priority Support", free: false, pro: false, enterprise: true },
  { name: "SLA", free: false, pro: false, enterprise: true },
];

export function FeatureComparison() {
  const renderCheck = (value: boolean) => (
    value ? (
      <div className="w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mx-auto">
        <Icon icon="lucide:check" className="text-success w-4 h-4" />
      </div>
    ) : (
      <div className="w-8 h-8 rounded-full bg-default-100 flex items-center justify-center mx-auto">
        <Icon icon="lucide:minus" className="text-default-400 w-4 h-4" />
      </div>
    )
  );

  return (
    <Table 
      aria-label="Feature comparison" 
      className="max-w-3xl mx-auto"
      removeWrapper
      shadow="none"
    >
      <TableHeader>
        <TableColumn className="text-lg font-semibold">Feature</TableColumn>
        <TableColumn className="text-center text-lg font-semibold">Free</TableColumn>
        <TableColumn className="text-center text-lg font-semibold">Pro</TableColumn>
        <TableColumn className="text-center text-lg font-semibold">Enterprise</TableColumn>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.name} className="hover:bg-default-50">
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell>{renderCheck(feature.free)}</TableCell>
            <TableCell>{renderCheck(feature.pro)}</TableCell>
            <TableCell>{renderCheck(feature.enterprise)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}