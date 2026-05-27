import type { SVGProps, JSX } from 'react'

export default function CarpenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M585 13 382-190l64-63L68-786l178-177 657 656L585 13Zm-1-132 187-188-69-68-187 187 69 69Z" />
    </svg>
  )
}
