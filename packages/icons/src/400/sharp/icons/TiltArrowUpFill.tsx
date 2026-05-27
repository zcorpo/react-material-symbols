import type { SVGProps } from 'react'

export default function TiltArrowUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-120 160-720h480l160 720H80Zm370-407v227h60v-227l74 74 42-42-146-146-146 146 42 42 74-74Z" />
    </svg>
  )
}
