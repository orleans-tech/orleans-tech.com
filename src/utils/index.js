export function getPhotoByType(sizes, kind) {
  const size = sizes.filter(s => s.kind == kind)
  return size.length > 0 ? size[0] : null
}
