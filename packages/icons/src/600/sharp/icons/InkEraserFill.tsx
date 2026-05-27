import type { SVGProps } from 'react'

export default function InkEraserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M701.18-225.09h203v79.22H621.39l79.79-79.22Zm-538.01 79.22L27.48-285l561.3-601.52 306.66 320.65-396.27 420h-336Z" />
    </svg>
  )
}
