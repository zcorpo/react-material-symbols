import type { SVGProps } from 'react'

export default function PageHeaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-778.09v-68.13h732.2v68.13h-732.2Zm0 664.07v-564.07h732.2v564.07h-732.2Z" />
    </svg>
  )
}
