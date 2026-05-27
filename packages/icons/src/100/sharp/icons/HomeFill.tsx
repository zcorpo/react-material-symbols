import type { SVGProps } from 'react'

export default function HomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-402l268-203 268 203v402H550v-248H410v248H212Z" />
    </svg>
  )
}
