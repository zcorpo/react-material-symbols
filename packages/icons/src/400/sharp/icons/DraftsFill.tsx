import type { SVGProps, JSX } from 'react'

export default function DraftsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-920 400 239v561H80v-561l400-239Zm0 466 336-197-336-202-336 202 336 197Z" />
    </svg>
  )
}
