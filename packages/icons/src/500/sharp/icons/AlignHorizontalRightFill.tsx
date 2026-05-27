import type { SVGProps } from 'react'

export default function AlignHorizontalRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M817.85-74.02v-812.2h68.37v812.2h-68.37ZM314.02-284.5v-108.13h403.83v108.13H314.02Zm-240-282.87V-675.5h643.83v108.13H74.02Z" />
    </svg>
  )
}
