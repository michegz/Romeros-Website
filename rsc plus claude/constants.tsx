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
  ClipboardCheck,
  Wind
} from 'lucide-react';

export const COMPANY_NAME = "Romero’s Service Company";
export const PHONE = "(337) 962-7879";
export const EMAIL = "support@romerosservicecompany.com";
export const SERVICE_AREAS = ["Lafayette", "Acadiana", "Broussard", "Youngsville", "Scott", "Rayne", "Surrounding Acadiana areas”

];


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
    title: "Plumbing & Drain Services",
    description: "Leak repairs, drain clogs, cleanouts, faucets/toilets, shutoff valves, supply lines, and minor pipe repair for homes and businesses.",
    icon: <Droplet className="w-12 h-12" />
  },
  {
    id: "electrical",
    title: "Electrical Services",
    description: "Troubleshooting, fixtures, switches/outlets, ceiling fans, repairs, and electrical work within applicable licensing and scope.",
    icon: <Zap className="w-12 h-12" />
  },
  {
    id: "hvac",
    title: "HVAC & A/C Service",
    description: "A/C repair and service, HVAC work within applicable licensing and scope, plus coordinated repairs that often go with HVAC issues.",
    icon: <Wind className="w-12 h-12" />
  },
  {
    id: "appliances",
    title: "Appliance Repair & Hookups",
    description: "Appliance repair and appliance hookups, plus related repairs like supply lines, shutoff valves, venting, and minor adjustments.",
    icon: <Wrench className="w-12 h-12" />
  },
  {
    id: "repairs",
    title: "Repairs, Drywall, Carpentry & Painting",
    description: "Drywall repair, trim/baseboards, doors, caulking, patch/paint, minor carpentry, and general property repairs.",
    icon: <HardHat className="w-12 h-12" />
  },
  {
    id: "turnovers",
    title: "Cleaning, Turnovers & Make-Ready",
    description: "Interior cleaning, rental turnovers, punch lists, light demo, debris removal, and job-site cleanup before and after work.",
    icon: <ClipboardCheck className="w-12 h-12" />
  }
];

export const SECONDARY_SERVICES = [
  "Flooring repair & replacement",
  "Doors, windows, and hardware installs",
  "Showers & toilets",
  "Pressure washing",
  "Fascia/soffit and siding repair",
  "Fence and deck repairs",
  "Small concrete repairs",
  "Light demolition and debris removal",
  "Storm prep and storm-damage repairs",
  "Rental make-readies and punch lists",
  "Appliance installs and fixture installs",
  "General maintenance and property repairs"
];
