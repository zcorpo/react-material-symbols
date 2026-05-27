import type { SVGProps } from 'react'

export default function PictureInPictureLarge({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227.69-327.69v-406.23h484.62v406.23H227.69ZM100-180v-45.39h714.61V-780H860v600H100Z" />
    </svg>
  )
}
