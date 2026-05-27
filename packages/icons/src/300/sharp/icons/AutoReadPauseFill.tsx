import type { SVGProps } from 'react'

export default function AutoReadPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M383.46-410h45.39v-300h-45.39v300Zm147.69 0h45.39v-300h-45.39v300ZM100-118.46V-860h760v600H241.54L100-118.46Z" />
    </svg>
  )
}
