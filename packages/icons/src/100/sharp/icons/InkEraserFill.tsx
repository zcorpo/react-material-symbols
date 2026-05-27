import type { SVGProps } from 'react'

export default function InkEraserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M658-234h190v22H636l22-22Zm-481 22-84-85 474-502 230 235-336 352H177Z" />
    </svg>
  )
}
