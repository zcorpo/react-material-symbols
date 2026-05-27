import type { SVGProps } from 'react'

export default function TextRotationDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m226-158-98-98 16-16 71 71v-575h22v575l71-71 16 16-98 98Zm182-160v-24l113-42v-197l-113-41v-24l404 154v24L408-318Zm134-74 235-86v-4l-235-90v180Z" />
    </svg>
  )
}
