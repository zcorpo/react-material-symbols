import type { SVGProps } from 'react'

export default function ExposureNeg1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M411-399H109v-82h302v82Zm239 222v-496l-99 71-46-70 153-111h91v606h-99Z" />
    </svg>
  )
}
