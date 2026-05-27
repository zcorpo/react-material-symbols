import type { SVGProps, JSX } from 'react'

export default function ArrowForwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M645-433H135v-94h510L413-759l67-67 346 346-346 345-67-66 232-232Z" />
    </svg>
  )
}
