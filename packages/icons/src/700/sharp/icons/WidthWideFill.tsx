import type { SVGProps } from 'react'

export default function WidthWideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h84v-502h-84v502Zm578 0h84v-502h-84v502Z" />
    </svg>
  )
}
