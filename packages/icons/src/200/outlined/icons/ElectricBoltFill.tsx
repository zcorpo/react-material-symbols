import type { SVGProps } from 'react'

export default function ElectricBoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m309.85-119 166.38-283.92L160-439.08 617.31-841h34.38L481.46-556.31 800-520.92 343.46-119h-33.61Z" />
    </svg>
  )
}
