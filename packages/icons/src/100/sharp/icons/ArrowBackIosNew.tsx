import type { SVGProps, JSX } from 'react'

export default function ArrowBackIosNew({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M645-116 281-480l364-364 29 30-334 334 334 334-29 30Z" />
    </svg>
  )
}
