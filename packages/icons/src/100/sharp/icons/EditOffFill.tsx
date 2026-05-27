import type { SVGProps, JSX } from 'react'

export default function EditOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m566-498-68-67 231-232 69 68-232 231Zm232 368L497-429 240-172h-68v-68l257-257-299-301 15-15 668 668-15 15Zm-88-544 56-55-37-36-55 56 36 35Z" />
    </svg>
  )
}
