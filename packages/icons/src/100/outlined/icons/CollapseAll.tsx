import type { SVGProps, JSX } from 'react'

export default function CollapseAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m294-118-16-15 202-202 202 202-16 15-186-185-186 185Zm186-507L278-827l16-16 186 186 186-186 16 16-202 202Z" />
    </svg>
  )
}
