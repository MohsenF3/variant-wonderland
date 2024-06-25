export const NAVIGATION_LINKS = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/text-variants", name: "Text Variant" },
  { id: 3, path: "/page-variants", name: "Page Variant" },
];

export const FAQ_QUESTIONS = [
  {
    id: 1,
    question: "How to use Variant Wonderland?",
    answer:
      "Using Variant Wonderland is as simple as ABC. All you need to do is install Framer Motion and copy and paste the code into your project.",
  },
  {
    id: 2,
    question: "What is framer motion and How to install it?",
    answer:
      "Framer Motion is a simple yet powerful motion library for React. Framer Motion requires React 18. Install framer-motion from npm: npm install framer-motion",
  },

  {
    id: 3,
    question: "What are variants in framer motion?",
    answer:
      "Setting animate as an object is useful for simple, single-component animations. But sometimes we want to create animations that propagate throughout the DOM, and orchestrate those animations in a declarative way. We can do so with variants.",
  },
];

export const PAGE_VARIANTS_TABS = [
  { id: 1, name: "Home", title: "Home" },
  { id: 2, name: "About", title: "About" },
  { id: 3, name: "Contact", title: "Contact" },
];
