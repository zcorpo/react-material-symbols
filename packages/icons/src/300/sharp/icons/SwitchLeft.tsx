import type { SVGProps, JSX } from 'react'

export default function SwitchLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-230.39 150.39-480 400-729.61v499.22Zm-43.85-106.07v-287.08L212.62-480l143.53 143.54ZM560-230.39v-499.22L809.61-480 560-230.39Z" />
    </svg>
  )
}
