import type { SVGProps } from 'react'

export default function Maximize({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-774.61V-820h600v45.39H180Z" />
    </svg>
  )
}
