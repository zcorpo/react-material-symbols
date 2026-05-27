import type { SVGProps } from 'react'

export default function CollapseContentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M440-440v188h-22v-166H252v-22h188Zm102-268v166h166v22H520v-188h22Z" />
    </svg>
  )
}
