import type { SVGProps } from 'react'

export default function CodeBlocksFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m379-343 45-44-93-93 91-91-45-44-135 135 137 137Zm202 0 137-137-137-137-45 44 93 93-93 93 45 44ZM95-95v-771h771v771H95Z" />
    </svg>
  )
}
