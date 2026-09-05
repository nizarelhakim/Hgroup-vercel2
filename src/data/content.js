export const FOUNDED_YEAR = 1999;
export const yearsOfExperience = new Date().getFullYear() - FOUNDED_YEAR;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const expertise = [
  {
    index: "01",
    title: "Development",
    desc: "Feasibility, planning, approvals, and end-to-end delivery.",
    img: "/images/development.jpg",
  },
  {
    index: "02",
    title: "Construction",
    desc: "Robust project execution with safety and performance standards.",
    img: "/images/construction.png",
  },
  {
    index: "03",
    title: "Interior Fit-Out",
    desc: "Tailored finishes with spatial harmony and technology integration.",
    img: "/images/fitout.png",
  },
  {
    index: "04",
    title: "Joinery & Finishes",
    desc: "Custom cabinetry and in-house craftsmanship.",
    img: "/images/joinery.png",
  },
];

export const portfolio = [
  { images: ["/images/img2.jpg"], title: "Urban Loft Interior", category: "Interior" },
  { images: ["/images/img3.jpg"], title: "Modern Escape", category: "Residential" },
  { images: ["/images/img1.jpg"], title: "Residential Luxury", category: "Residential" },
  { images: ["/images/YGWO5492.JPG"], title: "AUB Comic Center", category: "Commercial" },
  { images: ["/images/SLDP6569.JPG"], title: "Residential Luxury II", category: "Residential" },
  {
    images: ["/images/t4.jpg", "/images/t4-2.jpg", "/images/t4-3.jpg", "/images/t4-4.jpg"],
    title: "Award Winning Office",
    category: "Commercial",
  },
  {
    images: ["/images/verdun-883-1.jpg", "/images/verdun-883-2.jpg", "/images/verdun-883-3.jpg"],
    title: "Verdun 883",
    category: "Residential",
  },
  { images: ["/images/achrafie-883.jpg"], title: "Achrafie 883", category: "Residential" },
  {
    images: [
      "/images/building-2190-1.jpg",
      "/images/building-2190-2.jpg",
      "/images/building-2190-3.jpg",
      "/images/building-2190-4.jpg",
    ],
    title: "Building 2190",
    category: "Residential",
  },
  {
    images: [
      "/images/building-clemenceau-6.jpg",
      "/images/building-clemenceau-1.jpg",
      "/images/building-clemenceau-2.jpg",
      "/images/building-clemenceau-3.jpg",
      "/images/building-clemenceau-4.jpg",
      "/images/building-clemenceau-5.jpg",
      "/images/building-clemenceau-7.jpg",
      "/images/building-clemenceau-8.jpg",
      "/images/building-clemenceau-9.jpg",
    ],
    title: "Building Clemenceau",
    category: "Residential",
  },
  {
    images: [
      "/images/maymouna-office-1.jpg",
      "/images/maymouna-office-2.jpg",
      "/images/maymouna-office-3.jpg",
      "/images/maymouna-office-4.jpg",
      "/images/maymouna-office-5.jpg",
      "/images/maymouna-office-6.jpg",
    ],
    title: "Maymouna Office",
    category: "Commercial",
  },
].map((item, i) => ({ ...item, index: String(i + 1).padStart(2, "0") }));

export const values = [
  { title: "Trust", desc: "Relationships built on transparency and follow-through." },
  { title: "Craftsmanship", desc: "Meticulous execution, from structure to finish." },
  { title: "Enduring Design", desc: "Timeless spaces made to outlast trends." },
];

export const contact = {
  phones: ["+961 (01) 800 640", "+961 (03) 366 253"],
  fax: "+961 (01) 787 190",
  address: "Raouche, Australia St., Saad Bldg",
  poBox: "P.O.Box: 6907",
  email: "info@hgroup-lb.com",
  formAction: "https://formspree.io/f/meogqzpa",
  instagram: "https://www.instagram.com/yourhandle",
};
