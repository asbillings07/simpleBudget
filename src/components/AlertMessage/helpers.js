export const getListCSS = (style) => ({
    "unstyled": `decimal outside none`,
    "number": `decimal outside none`,
    "circle": `circle outside none`,
    "disc": `disc outside none`,
    "square": `square outside none`,
    "default": `decimal outside none`
}[style])

export const getAlertType = (type) => ({
    "warning": `
          background-color: var(--pink);
          color: var(--dark-red);
          border-color: var(--light-red);
        `,
    "info": `
          background-color: var(--light-yellow);
          color: var(--black);
          border-color: var(--yellow);
        `,
    "success": `
          background-color: var(--light-green1);
          border-color: var(--light-green2);
          color: var(--green);
        `
}[type])