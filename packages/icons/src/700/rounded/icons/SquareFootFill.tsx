import type { SVGProps, JSX } from 'react'

export default function SquareFootFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M207-97q-46 0-78-32t-32-78v-532q0-52 48.5-72t86.5 18l44 44-53 53 29 29 53-53 115 115-53 53 29 29 53-53 116 116-53 53 29 29 53-53 115 115-53 53 29 29 53-53 44 44q41 41 20 93.5T726-97H207Zm4-114h424L211-635v424Z" />
    </svg>
  )
}
