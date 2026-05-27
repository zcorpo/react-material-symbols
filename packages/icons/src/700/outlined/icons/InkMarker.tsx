import type { SVGProps, JSX } from 'react'

export default function InkMarker({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m252-73-40-40-34 35q-21 21-52.5 21T73-77q-20-20-18.5-50T75-177l38-37-41-40 622-624q17-16 39.5-16t39.5 16l104 104q16 17 16 39.5T877-695L252-73Zm194-423L207-254l45 45 242-239-48-48Z" />
    </svg>
  )
}
