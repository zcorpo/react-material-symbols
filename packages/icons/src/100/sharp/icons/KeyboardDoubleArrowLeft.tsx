import type { SVGProps } from 'react'

export default function KeyboardDoubleArrowLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457-276 253-480l204-204 16 15-189 189 189 188-16 16Zm235 0L488-480l204-204 15 15-188 189 188 188-15 16Z" />
    </svg>
  )
}
