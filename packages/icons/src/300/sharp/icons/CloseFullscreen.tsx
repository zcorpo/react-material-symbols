import type { SVGProps } from 'react'

export default function CloseFullscreen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M131.62-100 100-131.62l303-303H180V-480h300v300h-45.38v-223l-303 303ZM480-480v-300h45.38v223l303-303L860-828.38l-303 303h223V-480H480Z" />
    </svg>
  )
}
