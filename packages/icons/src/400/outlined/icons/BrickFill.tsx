import type { SVGProps } from 'react'

export default function BrickFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-474h123v-166h225v166h104v-166h225v166h123v474H80Z" />
    </svg>
  )
}
