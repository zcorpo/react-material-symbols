import type { SVGProps, JSX } from 'react'

export default function Subject({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-168.91v-75.26H559v75.26H145.87Zm0-181.13v-75.26H814.7v75.26H145.87Zm0-180.7V-606H814.7v75.26H145.87Zm0-181.13v-79.78H814.7v79.78H145.87Z" />
    </svg>
  )
}
