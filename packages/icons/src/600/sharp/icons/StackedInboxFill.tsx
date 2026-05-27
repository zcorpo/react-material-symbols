import type { SVGProps, JSX } from 'react'

export default function StackedInboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M156.22-243.39v-613H943v613H156.22Zm393.89-194.09q37.5 0 66.5-30.28t29-67.72h218.17v-241.13H236v241.13h217.61q0 37.44 29.5 67.72t67 30.28Zm195.11 333.31H17v-548.22h79.22v469h649v79.22Z" />
    </svg>
  )
}
