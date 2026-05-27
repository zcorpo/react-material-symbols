import type { SVGProps } from 'react'

export default function AdGroup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M276-302h504v-430H276v430Zm-22 22v-548h548v548H254Zm-96 96v-516h22v494h494v22H158Zm118-118v-504 504Z" />
    </svg>
  )
}
