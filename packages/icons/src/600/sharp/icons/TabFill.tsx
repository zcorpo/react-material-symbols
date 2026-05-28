import type { SVGProps, JSX } from 'react'

export default function TabFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87ZM524-567h290.91v-167.91H524V-567Z" />
    </svg>
  )
}
