import type { SVGProps, JSX } from 'react'

export default function AlignJustifyStretchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M809.23-120v-720H840v720h-30.77ZM120-120v-720h30.77v720H120Zm375.38-464.62v-70.76h200v70.76h-200Zm-230.76 0v-70.76h200v70.76h-200Zm230.76 280v-70.76h200v70.76h-200Zm-230.76 0v-70.76h200v70.76h-200Z" />
    </svg>
  )
}
