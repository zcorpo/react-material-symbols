import type { SVGProps, JSX } from 'react'

export default function CheckSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-328.39 259.31-469.08l31.61-31.61L400-391.61l269.08-269.08 31.61 31.61L400-328.39Z" />
    </svg>
  )
}
