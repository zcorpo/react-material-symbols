import type { SVGProps } from 'react'

export default function ApprovalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-212v-220h536v220H212Zm22-108h492v-90H234v90Zm246-112L332-630v-10q0-62 43-105t105-43q62 0 105 43t43 105v10L480-432Z" />
    </svg>
  )
}
