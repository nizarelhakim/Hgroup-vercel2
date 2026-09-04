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
  { src: "/images/img2.jpg", title: "Urban Loft Interior", category: "Interior" },
  { src: "/images/img3.jpg", title: "Modern Escape", category: "Residential" },
  { src: "/images/img1.jpg", title: "Residential Luxury", category: "Residential" },
  { src: "/images/YGWO5492.JPG", title: "AUB Comic Center", category: "Commercial" },
  { src: "/images/SLDP6569.JPG", title: "Residential Luxury II", category: "Residential" },
  { src: "/images/t4.jpg", title: "Award Winning Office", category: "Commercial" },
  { src: "/images/verdun-883.jpg", title: "Verdun 883", category: "Residential" },
  { src: "/images/achrafie-883.jpg", title: "Achrafie 883", category: "Residential" },
  { src: "/images/building-2190.jpg", title: "Building 2190", category: "Residential" },
  { src: "/images/building-clemenceau.jpg", title: "Building Clemenceau", category: "Residential" },
  { src: "/images/maymouna-office.jpg", title: "Maymouna Office", category: "Commercial" },
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
