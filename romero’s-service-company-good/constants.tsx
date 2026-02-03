import React from 'react';
import { 
  Droplet, 
  Zap, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  Home, 
  Building2,
  HardHat,
  Stethoscope,
  ClipboardCheck
} from 'lucide-react';

export const COMPANY_NAME = "Romero’s Service Company";
export const PHONE = "(337) 962-7879";
export const EMAIL = "support@romerosservicecompany.com";
export const SERVICE_AREAS = ["Lafayette", "Acadiana", "Broussard", "Youngsville", "Scott", "Rayne", "Surrounding Parishes"];

export const CORE_VALUES = [
  {
    title: "One Call. Real Solutions.",
    description: "Single point of contact for all repairs.",
    icon: <Wrench className="w-6 h-6" />
  },
  {
    title: "Fast Response",
    description: "Prompt service and efficient scheduling.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Licensed & Insured",
    description: "Professional work with full protection.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "No Money Upfront",
    description: "Simple, trustworthy. Quality first.",
    icon: <Calendar className="w-6 h-6" />
  }
];

export const PRIMARY_SERVICES = [
  {
    id: "plumbing",
    title: "Plumbing Services",
    description: "Leaks, drain clogs, fixtures, shutoff valves, supply lines, and minor pipe repairs for residential and commercial properties.",
    icon: <Droplet className="w-12 h-12" />
  },
  {
    id: "general",
    title: "General Repairs & Maintenance",
    description: "Drywall, painting, trim, doors, caulking, and ongoing multi-trade maintenance.",
    icon: <Wrench className="w-12 h-12" />
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description: "Light fixtures, switches, outlets, ceiling fans, and minor electrical repairs.",
    icon: <Zap className="w-12 h-12" />
  },
  {
    id: "installations",
    title: "Installations",
    description: "Appliances, fixtures, doors, windows, shelving, and hardware.",
    icon: <Home className="w-12 h-12" />
  },
  {
    id: "exterior",
    title: "Exterior & Structural Services",
    description: "Siding, fascia and soffit, fencing, decks, small concrete repairs, and pressure washing.",
    icon: <HardHat className="w-12 h-12" />
  },
  {
    id: "turnovers",
    title: "Demolition, Cleanup & Disposal",
    description: "Make-ready units, punch lists, light demolition, debris removal, and post-repair cleanup.",
    icon: <ClipboardCheck className="w-12 h-12" />
  }
];