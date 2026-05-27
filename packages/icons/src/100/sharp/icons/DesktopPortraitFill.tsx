import type { SVGProps } from 'react'

export default function DesktopPortraitFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M448-260h172v-332H448v332ZM340-360h22v-318h140v-22H340v340Zm408 228H212v-696h536v696Z" />
    </svg>
  )
}
