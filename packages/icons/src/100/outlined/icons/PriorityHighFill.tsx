import type { SVGProps } from 'react'

export default function PriorityHighFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M479.83-232q-10.38 0-17.6-7.39-7.23-7.4-7.23-17.78t7.39-17.6q7.4-7.23 17.78-7.23t17.6 7.39q7.23 7.4 7.23 17.78t-7.39 17.6q-7.4 7.23-17.78 7.23ZM469-358v-422h22v422h-22Z" />
    </svg>
  )
}
