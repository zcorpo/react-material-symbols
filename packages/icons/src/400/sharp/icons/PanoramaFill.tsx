import type { SVGProps, JSX } from 'react'

export default function PanoramaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm157-160h487L577-519 446-345l-92-129-117 154Z" />
    </svg>
  )
}
