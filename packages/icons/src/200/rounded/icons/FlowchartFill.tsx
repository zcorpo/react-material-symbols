import type { SVGProps, JSX } from 'react'

export default function FlowchartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M617.08-200v-76.08H464.62v-188.54h-122.7v75.31H120v-182.15h221.92v76.08h122.7v-189.31h152.46v-76.08H840v182.92H617.08v-76.07h-121.7v347.07h121.7v-75.07H840V-200H617.08Z" />
    </svg>
  )
}
