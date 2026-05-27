import type { SVGProps, JSX } from 'react'

export default function AddDiamondFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-342h22v-127h126v-22H491v-126h-22v126H342v22h127v127Zm11 232L109-480l371-370 371 370-371 370Z" />
    </svg>
  )
}
