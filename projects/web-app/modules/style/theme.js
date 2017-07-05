export const fonts = {
  primary: '"Verdana", san-serif',
  secondary: '"Times New Roman", serif',
}

export const colors = {
  primary: '#333',
  primaryDark: '#222',
  accent1: '#ff0033', // pinky red
  grey: '#444',
  offWhite: '#EEE',
}

export const spacing = {
  pageGutter: `${25 / 16}rem`,
}

export const typography = {
  title: {
    color: colors.accent,
    fontSize: `${55 / 16}rem`,
    fontFamily: fonts.primary,
    fontWeight: 700,
  },
  subtitle: {
    fontSize: `${35 / 16}rem`,
    fontFamily: fonts.secondary,
    fontWeight: 300,
    letterSpacing: -1,
  },
}

export const common = {
  clearFix: {
    ':after': {
      content: '" "',
      display: 'table',
      clear: 'both',
    },
  },
}
