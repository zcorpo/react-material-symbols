import type { SVGProps } from 'react'

export default function Title({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M425.93-154.02v-544.07H194.02v-108.13h572.2v108.13H534.3v544.07H425.93Z" />
    </svg>
  )
}
