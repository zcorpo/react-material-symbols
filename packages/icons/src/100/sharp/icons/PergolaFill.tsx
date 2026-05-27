import type { SVGProps } from 'react'

export default function PergolaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-656h22v80h572v-80h22v656h-22v-406H194v406h-22Zm297 0v-114H358v-22h243v22H491v114h-22Z" />
    </svg>
  )
}
