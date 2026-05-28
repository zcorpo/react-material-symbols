import type { SVGProps, JSX } from 'react'

export default function DragHandleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-391.92v-45.39h600v45.39H180Zm0-130.77v-45.39h600v45.39H180Z" />
    </svg>
  )
}
