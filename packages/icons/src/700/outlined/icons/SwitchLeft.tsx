import type { SVGProps, JSX } from 'react'

export default function SwitchLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M406-127 53-480l353-353v706ZM305-371v-218L197-480l108 109Zm249 244v-706l354 353-354 353Z" />
    </svg>
  )
}
