import type { SVGProps } from 'react'

export default function AlignJustifySpaceAroundFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M817.85-74.02v-812.2h68.37v812.2h-68.37Zm-743.83 0v-812.2h68.13v812.2H74.02Zm531.91-211.91v-388.14h108.14v388.14H605.93Zm-360 0v-388.14h108.14v388.14H245.93Z" />
    </svg>
  )
}
