import type { SVGProps, JSX } from 'react'

export default function Stars2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m229.17-114.02 66.44-285.31L74.02-591.67l292.31-25.24L480-886.22l113.91 269.31 292.31 25.24-221.59 192.34 66.2 285.31L480-265.65 229.17-114.02Zm465.61-566.7 21.72-91.39-72.91-60.67 96.63-8.24 36.95-86.15 37.2 86.15 96.39 8.24-72.91 60.67 21.72 91.39-82.4-48.19-82.39 48.19Z" />
    </svg>
  )
}
