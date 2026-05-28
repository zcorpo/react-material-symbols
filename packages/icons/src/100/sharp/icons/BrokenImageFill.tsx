import type { SVGProps, JSX } from 'react'

export default function BrokenImageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-272l63 62 164-163 163 163 163-163 63 63v310H172Zm0-616h616v274l-63-63-163 163-163-163-164 164-63-63v-312Z" />
    </svg>
  )
}
