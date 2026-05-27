import type { SVGProps, JSX } from 'react'

export default function FormatSizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M571-135v-567H359v-124h547v124H694v567H571Zm-386 0v-343H55v-123h384v123H309v343H185Z" />
    </svg>
  )
}
