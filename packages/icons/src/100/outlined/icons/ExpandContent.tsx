import type { SVGProps } from 'react'

export default function ExpandContent({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M252-252v-188h22v166h166v22H252Zm434-268v-166H520v-22h188v188h-22Z" />
    </svg>
  )
}
