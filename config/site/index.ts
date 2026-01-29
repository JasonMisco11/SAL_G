// config/site/index.tsx

export const siteConfig = {
  name: "SAF Interior Limited",
  description: "Modern Interior Design Platform",
  
  //  UPDATED LINKS: Using '#' to link to sections on the page
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" }, 
    { label: "Projects", href: "#projects" }, 
    { label: "Contact", href: "#contact" },   
  ],

  heroStats: [
    { count: "400+", label: "Project Complete" },
    { count: "600+", label: "Satisfied Clients" },
    { count: "100+", label: "Unique Styles" },
  ],


  
  galleryImages: [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop", // Modern Kitchen
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", // Archway
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=800&auto=format&fit=crop", // Living Room
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop", // Minimal Chair
    "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop", // Cozy Office
  ],


  services: [
    {
      title: "Interior Design",
      description: "Comprehensive interior design services that transform your space into a masterpiece of style and comfort.",
      icon: "palette", 
    },
    {
      title: "Architecture",
      description: "Bridging the gap between aesthetics and structure with our modern architectural planning and execution.",
      icon: "layout",
    },
    {
      title: "Lighting Design",
      description: "Enhance the mood and functionality of your environment with our custom lighting solutions.",
      icon: "lamp",
    },
  ],

  contact: {
    email: "safinteriorlimited@gmail.com",
    phone: "+233208861880", 
    address: "Accra, Ghana", 
  }
};
