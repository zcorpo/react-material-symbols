import type { SVGProps, JSX } from 'react'

export default function ArrowLeftAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M404-216 139-480l266-265 67 64-153 154h503v94H319l152 152-67 65Z" />
    </svg>
  )
}
