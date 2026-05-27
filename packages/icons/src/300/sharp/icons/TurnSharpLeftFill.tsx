import type { SVGProps, JSX } from 'react'

export default function TurnSharpLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M657.31-140v-245h-400v-348.31l-93.08 92.69-32-31.61L280-820l147.77 147.77-32 31.61-93.08-92.69v302.93h400V-140h-45.38Z" />
    </svg>
  )
}
