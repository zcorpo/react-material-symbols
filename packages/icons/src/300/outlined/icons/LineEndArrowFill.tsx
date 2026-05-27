import type { SVGProps } from 'react'

export default function LineEndArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M463.85-243.46v-213.85H101.54v-45.38h362.31v-213.85L835.77-480 463.85-243.46Z" />
    </svg>
  )
}
