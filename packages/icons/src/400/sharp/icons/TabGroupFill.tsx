import type { SVGProps, JSX } from 'react'

export default function TabGroupFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-680h60v620h620v60H80Zm120-120v-680h680v680H200Zm320-440h300v-180H520v180Z" />
    </svg>
  )
}
