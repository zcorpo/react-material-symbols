import type { SVGProps, JSX } from 'react'

export default function TurnSharpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M245.93-114.02v-320.05h400v-282.36l-90 90-47.73-47.74L680-845.98l171.8 171.81-47.73 47.74-90-90v350.5h-400v251.91h-68.14Z" />
    </svg>
  )
}
