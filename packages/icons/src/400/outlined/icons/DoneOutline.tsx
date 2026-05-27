import type { SVGProps, JSX } from 'react'

export default function DoneOutline({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m381-242 453-453-43-43-410 410-211-211-43 43 254 254Zm0 85L42-496l128-128 211 211 410-410 128 128-538 538Z" />
    </svg>
  )
}
