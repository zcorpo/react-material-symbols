import type { SVGProps } from 'react'

export default function AlignItemsStretchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M297.31-257.31v-445.38h85.38v445.38h-85.38Zm280 0v-445.38h85.38v445.38h-85.38ZM100-814.61V-860h760v45.39H100ZM100-100v-45.39h760V-100H100Z" />
    </svg>
  )
}
