import type { SVGProps, JSX } from 'react'

export default function FormatImageLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-274.26V-686.3h412.04v412.04H105.87Zm0-505.17v-75.27H854.7v75.27H105.87Zm472.04 168.39v-75.26H854.7v75.26H577.91Zm0 168.39v-75.26H854.7v75.26H577.91Zm0 168.39v-75.26H854.7v75.26H577.91ZM105.87-105.87v-75.26H854.7v75.26H105.87Z" />
    </svg>
  )
}
