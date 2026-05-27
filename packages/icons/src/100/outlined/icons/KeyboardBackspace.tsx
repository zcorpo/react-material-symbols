import type { SVGProps, JSX } from 'react'

export default function KeyboardBackspace({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M376-277 172-480l204-204 16 16-177 177h573v22H215l177 176-16 16Z" />
    </svg>
  )
}
