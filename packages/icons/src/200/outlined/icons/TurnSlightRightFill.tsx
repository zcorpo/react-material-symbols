import type { SVGProps, JSX } from 'react'

export default function TurnSlightRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380-169.23V-448q0-10.55 4.62-21.12 4.61-10.57 12.61-17.8l242.31-242.31H503.31V-760h188.23v188.23h-30.77V-708L417.69-465.69q-3.84 3.07-5.38 7.69-1.54 4.62-1.54 9.23v279.54H380Z" />
    </svg>
  )
}
