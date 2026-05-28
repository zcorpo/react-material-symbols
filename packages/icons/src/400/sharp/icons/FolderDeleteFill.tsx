import type { SVGProps, JSX } from 'react'

export default function FolderDeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm420-120h220v-255h40v-50H650v-35h-80v35H460v50h40v255Zm50-50v-205h120v205H550Z" />
    </svg>
  )
}
