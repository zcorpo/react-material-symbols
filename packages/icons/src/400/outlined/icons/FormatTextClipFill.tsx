import type { SVGProps, JSX } from 'react'

export default function FormatTextClipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h60v640h-60Zm580 0v-290H320v-60h420v-290h60v640h-60Z" />
    </svg>
  )
}
