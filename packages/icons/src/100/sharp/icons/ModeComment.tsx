import type { SVGProps, JSX } from 'react'

export default function ModeComment({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-292v-536h696v648L716-292H132Zm22-22h572l80 82v-574H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
