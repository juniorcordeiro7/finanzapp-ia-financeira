import React from 'react';

export type Language = 'pt' | 'es' | 'en';

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface ChatMessage {
  sender: 'user' | 'agent';
  text: string;
  time: string;
  type?: 'text' | 'image' | 'audio';
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}