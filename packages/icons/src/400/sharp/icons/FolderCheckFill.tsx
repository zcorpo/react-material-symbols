import type { SVGProps } from 'react'

export default function FolderCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m434-311 212-213-42-42-170 170-85-85-42 43 127 127ZM80-160v-640h341l60 60h399v580H80Z" />
    </svg>
  )
}
