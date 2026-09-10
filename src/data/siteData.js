import pic1 from '../assets/images/pic1.webp';
import pic2 from '../assets/images/pic2.webp';
import pic3 from '../assets/images/pic3.webp';
import pic4 from '../assets/images/pic4.webp';
import pic5 from '../assets/images/pic5.webp';
import pic6 from '../assets/images/pic6.webp';
import pic7 from '../assets/images/pic7.webp';
import pic8 from '../assets/images/pic8.webp';
import pic9 from '../assets/images/pic9.webp';
import pic10 from '../assets/images/pic10-hd.jpg';
import pic11 from '../assets/images/pic11.webp';
import pic12 from '../assets/images/pic12.webp';

export const siteData = {
  company: {
    name: "SM Driver Center",
    legalName: "S.M. Driver Service Centre & Aya Service Centre",
    shortName: "SM",
    tagline: "Your Journey, Our Responsibility",
    heroHeading: "Professional Drivers For All Your Needs",
    description: "Since March 2017, SM Driver Center has been providing trusted, background-verified personal drivers, commercial chauffeurs, car rentals, and compassionate AYA patient/companion care in Kolkata, South 24 Parganas, and surrounding districts.",
    established: "March 2017",
    experienceYears: "6+",
    happyClients: "500+",
    verifiedDrivers: "50+",
    availability: "24/7",
    reliability: "100%",
    rating: 4.8,
    reviewsCount: 196,
  },

  contact: {
    primaryPhone: "8820119452",
    alternatePhone: "9748305462",
    primaryPhoneFormatted: "+91 88201 19452",
    alternatePhoneFormatted: "+91 97483 05462",
    email: "samsulmondal389@gmail.com",
    whatsappNumber: "918820119452",
    whatsappUrl: "https://wa.me/918820119452?text=Hello%20SM%20Driver%20Center,%20I%20would%20like%20to%20inquire%20about%20your%20driver%20and%20car%20rental%20services.",
    addressLine1: "EM Bypass Near Pepsi Company",
    addressLine2: "Fartabad EM Bypass Gate",
    area: "South 24 Parganas",
    city: "Kolkata",
    state: "West Bengal",
    pincode: "700084",
    fullAddress: "EM Bypass Near Pepsi Company, Fartabad EM Bypass Gate, South 24 Parganas, Kolkata, West Bengal 700084",
    mapUrl: "https://maps.app.goo.gl/uwkoMP7qMyo6jQdcA",
    mapEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.3053310289756!2d88.3947464!3d22.4551576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02719277db87eb%3A0xb041472e7f3c3e0d!2sSM%20DRIVER%20CENTER!5e0!3m2!1sen!2sin!4v1749452853181!5m2!1sen!2sin"
  },

  businessHours: [
    { days: "Monday - Friday", hours: "6:00 AM - 10:00 PM" },
    { days: "Saturday", hours: "7:00 AM - 10:00 PM" },
    { days: "Sunday", hours: "7:00 AM - 9:00 PM" },
    { days: "Emergency Bookings", hours: "24/7 Available" }
  ],

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },

  navigation: [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ],

  images: {
    logo: "/logo.png",
    heroDesk: pic3,
    kiaCar: pic10,
    aboutTeam: pic12,
    gallery: [
      { id: 1, src: pic1, title: "On-Duty Chauffeur Service", category: "Drivers", description: "Punctual and courteous driver on city transit duty" },
      { id: 2, src: pic2, title: "Executive Car Travel", category: "Car Rental", description: "Clean, air-conditioned vehicle ready for corporate trips" },
      { id: 3, src: pic3, title: "SM Driver Center Head Office", category: "Office", description: "Official office desk and banner at EM Bypass, Kolkata" },
      { id: 4, src: pic4, title: "Family Highway Journey", category: "Outstation", description: "Safe intercity ride on Bengal highways" },
      { id: 5, src: pic5, title: "Sedan Fleet Maintenance", category: "Fleet", description: "Thoroughly inspected vehicle prepared for client dispatch" },
      { id: 6, src: pic6, title: "Airport Pickup Assistance", category: "Airport", description: "Timely arrival for CCU airport terminal transfers" },
      { id: 7, src: pic7, title: "Night Travel Readiness", category: "Drivers", description: "Experienced driver trained for night highway driving" },
      { id: 8, src: pic8, title: "Medical Patient Escort", category: "AYA", description: "Compassionate hospital transit assistance for elderly clients" },
      { id: 9, src: pic9, title: "Local Kolkata Commute", category: "City", description: "Navigating busy Kolkata streets with smooth professionalism" },
      { id: 10, src: pic10, title: "Premium Kia SUV Fleet", category: "Car Rental", description: "Modern SUV available with chauffeur for family and business trips" },
      { id: 11, src: pic11, title: "Long-Distance Outstation Tour", category: "Outstation", description: "Intercity tour from Kolkata across West Bengal & neighboring states" },
      { id: 12, src: pic12, title: "SM Driver Service Team", category: "Team", description: "Dedicated drivers and operators serving since March 2017" }
    ]
  },

  stats: [
    { number: "24/7", label: "Availability", desc: "Emergency calls answered anytime" },
    { number: "100%", label: "Reliability", desc: "Verified drivers & on-time guarantee" },
    { number: "500+", label: "Happy Clients", desc: "Across Kolkata & South 24 Parganas" },
    { number: "6+", label: "Years Experience", desc: "Trusted service since March 2017" }
  ],

  whyChooseUs: [
    {
      id: "verified-drivers",
      icon: "ShieldCheck",
      title: "Verified & Trained Drivers",
      description: "All our drivers undergo rigorous background checks, police record screening, route knowledge verification, and courteous etiquette training."
    },
    {
      id: "well-maintained-fleet",
      icon: "Car",
      title: "Well-Maintained Fleet",
      description: "Regularly serviced vehicles with air conditioning, complete safety features, clean interiors, and full commercial insurance for your peace of mind."
    },
    {
      id: "competitive-pricing",
      icon: "BadgeIndianRupee",
      title: "Competitive & Fair Pricing",
      description: "Transparent billing with zero hidden costs. Affordable hourly, daily, weekly, and monthly packages tailored to your exact budget."
    },
    {
      id: "round-the-clock",
      icon: "Clock",
      title: "24/7 Availability",
      description: "Round-the-clock driver availability for emergency hospital runs, late-night arrivals, early morning flights, and last-minute outstation trips."
    }
  ],

  services: [
    {
      id: "professional-driver-services",
      slug: "professional-driver",
      title: "Professional Driver Services",
      icon: "UserCheck",
      accent: "from-blue-500 to-cyan-500",
      summary: "Hire experienced personal or business drivers on daily, weekly, or monthly arrangements.",
      description: "Need a skilled driver for your personal car? Whether you require daily city driving through Kolkata's dense traffic, weekend family shopping, or regular office commutes, our verified professionals ensure a comfortable and stress-free journey.",
      features: [
        "City driving & shortcut experts",
        "Punctual, dependable & polite",
        "Well-groomed & courteous professionals",
        "Flexible daily, weekly & monthly plans",
        "Manual & automatic transmission experience"
      ]
    },
    {
      id: "car-rental-with-driver",
      slug: "car-rental",
      title: "Car Rental with Driver",
      icon: "Car",
      accent: "from-amber-500 to-yellow-500",
      summary: "Rent a car with our professional chauffeur included. Choose from hatchbacks, sedans, and SUVs.",
      description: "Travel in comfort without the hassle of driving. We offer clean, sanitized vehicles accompanied by certified chauffeurs for city commutes, family celebrations, weddings, and local sight-seeing.",
      features: [
        "Hatchbacks, Sedans, SUVs & Luxury Cars",
        "Flexible hourly, half-day & full-day hire",
        "All-India commercial permits",
        "Clean, sanitized & air-conditioned cabins",
        "Fuel & toll management available"
      ]
    },
    {
      id: "aya-companion-services",
      slug: "aya-services",
      title: "AYA & Companion Services",
      icon: "HeartHandshake",
      accent: "from-emerald-500 to-teal-500",
      summary: "Reliable accompanying and assistance services for elderly individuals, children, or hospital patients.",
      description: "We understand that loved ones often need compassionate support when traveling. Our trained AYA companions assist senior citizens, post-operative patients, and children during hospital check-ups, appointments, and social visits.",
      features: [
        "Trained & patient medical companions",
        "Wheelchair & patient handling experience",
        "Compassionate, respectful care",
        "Assistance with hospital appointments & pharmacy",
        "Safe door-to-door escorting"
      ]
    },
    {
      id: "outstation-driver-services",
      slug: "outstation-driver",
      title: "Outstation Driver Services",
      icon: "Compass",
      accent: "from-indigo-500 to-purple-500",
      summary: "Experienced highway drivers for long distance journeys across cities, hills, and neighboring states.",
      description: "Planning a road trip to Digha, Mandarmani, Purulia, Siliguri, or neighboring states? Sit back and enjoy the scenery while our experienced long-distance drivers navigate highways, mountain curves, and toll checkpoints safely.",
      features: [
        "Intercity & state highway masters",
        "Safe night-time driving certified",
        "Comprehensive toll & fuel management",
        "Round-trip and one-way options",
        "Drivers experienced with all vehicle sizes"
      ]
    },
    {
      id: "corporate-car-services",
      slug: "corporate-services",
      title: "Corporate Car Services",
      icon: "Briefcase",
      accent: "from-rose-500 to-pink-500",
      summary: "Dedicated corporate transportation solutions for executives, company delegations, and business events.",
      description: "Keep your business moving seamlessly. We provide punctual, discreet, and polished transportation services for corporate executives, client pick-ups, conference logistics, and long-term enterprise monthly contracts.",
      features: [
        "Corporate monthly contract options",
        "Discreet, English/Hindi/Bengali-fluent chauffeurs",
        "Custom billing & GST invoices",
        "Priority VIP booking status",
        "Fleet coordination for corporate events"
      ]
    },
    {
      id: "airport-transfer-services",
      slug: "airport-transfers",
      title: "Airport Transfer Services",
      icon: "PlaneTakeoff",
      accent: "from-violet-500 to-blue-600",
      summary: "Prompt pick-up and drop services to/from Netaji Subhash Chandra Bose International Airport (CCU).",
      description: "Never worry about missing a flight again. Our drivers monitor real-time flight schedules to guarantee on-time terminal pickups and stress-free drop-offs at Kolkata Airport at any hour of the day or night.",
      features: [
        "Real-time flight arrival & delay monitoring",
        "Meet & greet terminal assistance",
        "Luggage loading & unloading help",
        "24/7 midnight & dawn transfer availability",
        "Fixed transparent airport rates"
      ]
    }
  ],

  howItWorks: [
    {
      step: "01",
      icon: "PhoneCall",
      title: "Contact Us",
      description: "Give us a call at 8820119452 or send a quick WhatsApp message specifying your date, time, and service requirement."
    },
    {
      step: "02",
      icon: "CarFront",
      title: "Choose Your Service",
      description: "Select whether you need a personal driver for your own car, a rental vehicle with chauffeur, or an AYA companion."
    },
    {
      step: "03",
      icon: "CheckCircle2",
      title: "Instant Confirmation",
      description: "Receive instant booking confirmation and driver verification details. Your professional driver arrives right on schedule!"
    }
  ],

  timeline: [
    {
      year: "2017",
      title: "Founded SM Driver Center",
      description: "Started in March 2017 with a dedicated team of 5 vetted drivers, providing trustworthy local driver services across South Kolkata and EM Bypass."
    },
    {
      year: "2019",
      title: "Expanded Fleet & Outstation Routes",
      description: "Added dedicated car rental options and long-distance outstation travel, growing our active driver roster to over 20+ experienced professionals."
    },
    {
      year: "2021",
      title: "500+ Satisfied Clients Milestone",
      description: "Celebrated surpassing 500 loyal regular clients across South 24 Parganas with an outstanding 98% customer satisfaction rating."
    },
    {
      year: "2023",
      title: "Corporate Partnerships & AYA Services",
      description: "Expanded into executive corporate fleet solutions and specialized AYA healthcare companion transit for hospitals along EM Bypass."
    }
  ],

  coreValues: [
    {
      icon: "ShieldCheck",
      title: "Trust & Reliability",
      description: "Every driver undergoes background verification, credential checks, and road testing for your safety."
    },
    {
      icon: "Clock",
      title: "Strict Punctuality",
      description: "We value your schedule. Our drivers arrive at your designated pick-up spot ahead of time, every time."
    },
    {
      icon: "Sparkles",
      title: "Premium Experience",
      description: "Well-maintained vehicles, clean interiors, and polite chauffeurs for an enjoyable travel experience."
    },
    {
      icon: "BadgeIndianRupee",
      title: "Fair & Honest Pricing",
      description: "Completely transparent billing with upfront estimates and zero hidden fees."
    },
    {
      icon: "PhoneCall",
      title: "24/7 Emergency Support",
      description: "Round-the-clock availability for urgent hospital visits, odd-hour departures, and emergencies."
    },
    {
      icon: "MapPin",
      title: "Kolkata City Route Experts",
      description: "Extensive knowledge of EM Bypass, Central Kolkata, Salt Lake, New Town, and state highways."
    }
  ],

  testimonials: [
    {
      name: "Amit Roy",
      role: "Outstation Client",
      quote: "Excellent driver service! The staff is punctual and professional. I booked a driver for outstation and the experience was very smooth.",
      rating: 5,
      date: "Recent Trip"
    },
    {
      name: "Sutapa Sen",
      role: "AYA Service Client",
      quote: "I hired their AYA service for my elderly parents. The companion was trained, polite and extremely helpful. Highly recommended.",
      rating: 5,
      date: "Elderly Care Transit"
    },
    {
      name: "Rajiv Sharma",
      role: "Car Rental Client",
      quote: "I rented a car with a driver from SM Driver Center. The vehicle was clean, and the driver was very knowledgeable about routes.",
      rating: 5,
      date: "City & Outstation Trip"
    },
    {
      name: "Preeti Dey",
      role: "Regular City Commute",
      quote: "Reliable and trusted service. Used their driver center multiple times. Always on time and professional!",
      rating: 5,
      date: "Regular Client"
    },
    {
      name: "Alok Sinha",
      role: "Corporate Commuter",
      quote: "Great service for corporate travel. We now use them regularly for our executives' pick and drop.",
      rating: 5,
      date: "Corporate Contract"
    }
  ]
};

