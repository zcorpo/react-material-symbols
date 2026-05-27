import type { SVGProps, JSX } from 'react'

export default function TurnSharpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269-172v-259h400v-314l-98 97-16-15 125-125 125 125-16 15-98-97v336H291v237h-22Z" />
    </svg>
  )
}
