import type { SVGProps } from 'react'

export default function TileSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-186.85V-427H427v240.15H114.02Zm417.98 0V-427h314.22v240.15H532ZM114.02-533v-240.39H427V-533H114.02ZM532-533v-240.39h314.22V-533H532Z" />
    </svg>
  )
}
