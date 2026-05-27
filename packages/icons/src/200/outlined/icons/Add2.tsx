import type { SVGProps } from 'react'

export default function Add2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M464.62-160v-304.62H160v-30.76h304.62V-800h30.76v304.62H800v30.76H495.38V-160h-30.76Z" />
    </svg>
  )
}
