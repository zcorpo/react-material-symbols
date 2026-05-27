import type { SVGProps, JSX } from 'react'

export default function TurnSharpRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M233-95v-352h400v-239l-90 90-66-66 203-203 203 203-66 66-90-90v333H327v258h-94Z" />
    </svg>
  )
}
