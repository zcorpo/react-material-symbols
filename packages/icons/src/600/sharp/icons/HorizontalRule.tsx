import type { SVGProps } from 'react'

export default function HorizontalRule({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-440.39v-79.22H814.7v79.22H145.87Z" />
    </svg>
  )
}
