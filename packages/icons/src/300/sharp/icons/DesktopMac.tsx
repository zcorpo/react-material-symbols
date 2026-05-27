import type { SVGProps } from 'react'

export default function DesktopMac({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M357.16-140v-31.92l80.53-81.16H100V-820h760v566.92H522.31l80.53 81.16V-140H357.16ZM145.39-371h669.22v-403.61H145.39V-371Zm0 0v-403.61V-371Z" />
    </svg>
  )
}
