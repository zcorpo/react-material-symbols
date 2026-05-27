import type { SVGProps } from 'react'

export default function BookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-150v-673.84h520V-150L480-261.67 220-150Z" />
    </svg>
  )
}
