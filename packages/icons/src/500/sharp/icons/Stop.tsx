import type { SVGProps } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M302.15-657.85v355.7-355.7Zm-68.13 423.83v-492.2h492.2v492.2h-492.2Zm68.13-68.13h355.7v-355.7h-355.7v355.7Z" />
    </svg>
  )
}
