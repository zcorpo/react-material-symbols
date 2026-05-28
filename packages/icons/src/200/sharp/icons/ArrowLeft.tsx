import type { SVGProps, JSX } from 'react'

export default function ArrowLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M540-327.69 387.69-480 540-632.31v304.62Z" />
    </svg>
  )
}
