import type { SVGProps, JSX } from 'react'

export default function SweepFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M429-266v-22h183v22H429Zm-187-10L52-466.2 68-482l174 175 375.13-375L632-667 242-276Zm348-155v-22h183v22H590Zm161-164v-22h183v22H751Z" />
    </svg>
  )
}
