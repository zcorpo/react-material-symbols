import type { SVGProps } from 'react'

export default function FormatItalic({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M248-239v-22h133l151-440H391v-22h306v22H558L408-261h146v22H248Z" />
    </svg>
  )
}
