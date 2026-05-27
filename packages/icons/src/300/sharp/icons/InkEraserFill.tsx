import type { SVGProps } from 'react'

export default function InkEraserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M670.31-225.39h198V-180H624.92l45.39-45.39ZM178.23-180 71.46-289.62l512.77-552.45 265.69 276.22L486.84-180H178.23Z" />
    </svg>
  )
}
