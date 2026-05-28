import type { SVGProps, JSX } from 'react'

export default function CompareArrows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m319-213-16-16 136-135H132v-22h307L303-521l16-16 162 162-162 162Zm322-211L479-586l162-162 16 15-136 136h307v22H521l136 135-16 16Z" />
    </svg>
  )
}
