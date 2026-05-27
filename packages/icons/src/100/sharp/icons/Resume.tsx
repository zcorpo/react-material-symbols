import type { SVGProps, JSX } from 'react'

export default function Resume({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M304-312v-336h22v336h-22Zm132 0 277-168-277-168v336Zm22-44v-248l205 124-205 124Zm0-124Z" />
    </svg>
  )
}
