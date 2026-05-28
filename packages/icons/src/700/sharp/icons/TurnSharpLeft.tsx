import type { SVGProps, JSX } from 'react'

export default function TurnSharpLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M633-95v-258H233v-333l-90 90-66-66 203-203 203 203-66 66-90-90v239h400v352h-94Z" />
    </svg>
  )
}
