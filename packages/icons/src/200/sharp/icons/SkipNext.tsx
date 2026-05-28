import type { SVGProps, JSX } from 'react'

export default function SkipNext({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-295.38v-369.24h30.77v369.24H660Zm-390.77 0v-369.24L539.85-480 269.23-295.38ZM300-480Zm0 125.77L486.38-480 300-606.54v252.31Z" />
    </svg>
  )
}
