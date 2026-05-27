import type { SVGProps } from 'react'

export default function FormatImageRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M442.09-274.26V-686.3h412.04v412.04H442.09ZM105.87-105.87v-75.26H854.7v75.26H105.87Zm0-168.39v-75.26h276.22v75.26H105.87Zm0-168.39v-75.26h276.22v75.26H105.87Zm0-168.39v-75.26h276.22v75.26H105.87Zm0-168.39v-75.27H854.7v75.27H105.87Z" />
    </svg>
  )
}
