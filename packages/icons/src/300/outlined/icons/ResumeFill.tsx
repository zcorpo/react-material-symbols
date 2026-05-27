import type { SVGProps } from 'react'

export default function ResumeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M264.62-267.69v-424.62H310v424.62h-45.38Zm157.84 0L765.92-480 422.46-692.31v424.62Z" />
    </svg>
  )
}
