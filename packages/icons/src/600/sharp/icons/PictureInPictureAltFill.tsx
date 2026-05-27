import type { SVGProps } from 'react'

export default function PictureInPictureAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7H894.7v668.83H65.87Zm375.04-124.22h335v-257h-335v257Zm168-129Z" />
    </svg>
  )
}
