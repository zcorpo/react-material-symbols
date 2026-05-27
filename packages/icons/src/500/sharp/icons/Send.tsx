import type { SVGProps } from 'react'

export default function Send({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.5-154.26v-651.48L887.17-480 114.5-154.26ZM180-255.63 717.3-480 180-707.37v162.74L424.63-480 180-417.37v161.74Zm0 0v-451.74 451.74Z" />
    </svg>
  )
}
