import type { SVGProps, JSX } from 'react'

export default function TurnSlightLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M540-160v-298L300-698v127h-60v-229h229v60H342l240 240q8 8 13 18.96 5 10.95 5 23.04v298h-60Z" />
    </svg>
  )
}
