export const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

export const panelVariantsSm = {
  open: {
    width: "100%",
    height: "300px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

export const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};
