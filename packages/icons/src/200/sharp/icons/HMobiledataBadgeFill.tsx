import type { SVGProps } from 'react'

export default function HMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M347.69-300h30.77v-164.62h203.08V-300h30.77v-360h-30.77v164.62H378.46V-660h-30.77v360ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
