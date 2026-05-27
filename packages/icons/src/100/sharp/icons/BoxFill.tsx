import type { SVGProps } from 'react'

export default function BoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-498l95-118h425l96 120v496H172Zm37-510h540l-69-84H279l-70 84Zm163 285 108-54 108 54v-263H372v263Z" />
    </svg>
  )
}
