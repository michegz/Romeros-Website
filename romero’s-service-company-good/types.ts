/* Fixed: Added React import to resolve missing namespace 'React' across the file */
import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}