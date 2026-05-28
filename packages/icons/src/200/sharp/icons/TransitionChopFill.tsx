import type { SVGProps, JSX } from 'react'

export default function TransitionChopFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm29.92-30.77h659.31v-498.46H598.69l92.62 356.69-541.39 141.77Z" />
    </svg>
  )
}
