import type { SVGProps, JSX } from 'react'

export default function Exclamation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-380v-380h60v380h-60Zm0 180v-60h60v60h-60Z" />
    </svg>
  )
}
