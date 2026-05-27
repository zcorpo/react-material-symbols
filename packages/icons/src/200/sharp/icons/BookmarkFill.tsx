import type { SVGProps } from 'react'

export default function BookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-180v-622.69h480V-180L480-283.33 240-180Z" />
    </svg>
  )
}
