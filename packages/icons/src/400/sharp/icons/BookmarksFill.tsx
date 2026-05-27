import type { SVGProps } from 'react'

export default function BookmarksFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-641h480v641L400-199 160-80Zm580-159v-582H284v-60h516v642h-60Z" />
    </svg>
  )
}
