import type { SVGProps } from 'react'

export default function LabelOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M692-303 253-748h368l207 268-136 177ZM834-14 635-212H132v-504L15-833l17-16L850-30l-16 16Z" />
    </svg>
  )
}
