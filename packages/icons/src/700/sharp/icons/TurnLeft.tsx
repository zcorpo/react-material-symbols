import type { SVGProps, JSX } from 'react'

export default function TurnLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M603-135v-376H275l90 89-67 67L95-558l203-203 67 66-90 90h422v470h-94Z" />
    </svg>
  )
}
