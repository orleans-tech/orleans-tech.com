import Typography from 'typography'

const options = {
  baseFontSize: '18px',
  baseLineHeight: '27px',
  headerFontFamily: ['Ubuntu', 'Helvetica', 'sans-serif'],
  bodyFontFamily: ['Helvetica', 'Roboto', 'Arial', 'sans-serif', 'serif'],
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Ubuntu',
      styles: ['300','300i','400','400i','500','500i','700','700i'],
    }
  ]
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
