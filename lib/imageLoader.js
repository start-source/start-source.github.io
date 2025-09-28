export default function imageLoader({ src, width, quality }) {
  // For GitHub Pages root domain (start-source.github.io)
  return src;
}
'use client'

export default function imageLoader({ src, width, quality }) {
  return `${src}?w=${width}&q=${quality || 75}`
}
