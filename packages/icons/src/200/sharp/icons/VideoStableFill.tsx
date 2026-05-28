import type { SVGProps, JSX } from 'react'

export default function VideoStableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-200v-560h720v560H120Zm564.85-30.77L779-590.92 276.92-729.23 182-371.38l502.85 140.61Z" />
    </svg>
  )
}
