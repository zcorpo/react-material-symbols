import type { SVGProps, JSX } from 'react'

export default function ArrowBack2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M640-197 200-477l440-280v560Zm-60-280Zm0 171v-342L311-477l269 171Z" />
    </svg>
  )
}
