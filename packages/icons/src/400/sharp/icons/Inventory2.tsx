import type { SVGProps } from 'react'

export default function Inventory2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-80v-540H80v-260h800v260h-40v540H120Zm60-60h600v-480H180v480Zm-40-540h680v-140H140v140Zm220 260h240v-60H360v60Zm120 40Z" />
    </svg>
  )
}
