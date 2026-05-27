import type { SVGProps } from 'react'

export default function DriveFileMoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm446-250-75 75 42 42 147-147-147-147-42 42 75 75H320v60h206Z" />
    </svg>
  )
}
