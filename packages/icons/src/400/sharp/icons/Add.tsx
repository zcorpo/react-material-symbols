import type { SVGProps } from 'react'

export default function Add({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
    </svg>
  )
}
