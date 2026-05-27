import type { SVGProps } from 'react'

export default function ArrowBackIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-116 36-480l364-364 30 30L95-480l335 334-30 30Z" />
    </svg>
  )
}
