export const subNavLink = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const currentLink = {
  hovered: {
    y: "-200%",
  },
  initial: {
    y: 0,
  },
};

export const underLink = {
  initial: {
    y: "200%",
  },
  hovered: {
    y: 0,
  },
};
