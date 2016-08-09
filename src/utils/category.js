const DEFAULT = 'default'
const CATEGORIES_AVAILABLE = [
  'talks',
  'bbl',
  'association',
  'summit',
  'default'
]

const getPathname = function() {
  const isBrowser = typeof window !== 'undefined'
  return isBrowser ? window.location.pathname : ''
}

const is = function(category) {
  if (!category && getPathname() == '/') {
    return true
  }
  // Handle "development environment on
  // http://stanislaschollet.com/orleans-tech.com/talks/
  return (
    getPathname().startsWith(`/${category}`) ||
    getPathname().startsWith(`/orleans-tech.com/${category}`)
  )
}

const getCurrentCategory = function() {
  const paths = getPathname().split('/').filter(p => p)
  // Handle "development environment on
  // http://stanislaschollet.com/orleans-tech.com/talks/
  const indexPath = paths[0] == 'orleans-tech.com' ? 1 : 0
  return paths.length > 0 && CATEGORIES_AVAILABLE.indexOf(paths[indexPath]) > -1
    ? paths[indexPath]
    : DEFAULT
}

const getClassNameIfCurrent = function(category) {
  return is(category) ? 'active' : ''
}

export { is, getCurrentCategory, getClassNameIfCurrent }
