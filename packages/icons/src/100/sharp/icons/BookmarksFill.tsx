import type { SVGProps, JSX } from 'react'

export default function BookmarksFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-544h391v544L407.5-234 212-132Zm514-137v-537H322v-22h426v559h-22Z" />
    </svg>
  )
}
