import type { SVGProps, JSX } from 'react'

export default function PhotoFrameFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152.65-99.09v-86.78H25.87V-814.7H934.7v628.83H807.91v86.78H152.65ZM220-370h520L573.78-590.22 442.26-420.96l-93.78-112.65L220-370Z" />
    </svg>
  )
}
