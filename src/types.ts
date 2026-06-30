/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Ingredient {
  id: string;
  name: string;
  arabicName: string;
  description: string;
  benefits: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  city: string;
  text: string;
  isVerified: boolean;
  avatar?: string;
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OrderInput {
  name: string;
  phone: string;
  city: string;
  address: string;
  quantity: number;
}
