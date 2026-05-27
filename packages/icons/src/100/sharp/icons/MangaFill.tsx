import type { SVGProps, JSX } from 'react'

export default function MangaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm233-22h409q12 0 22-10t10-22v-385l-126 41-112.08-35-69.78 95.43-112.05 35.61v118.36L317-300l48 66Z" />
    </svg>
  )
}
