import type { SVGProps } from 'react'

export default function FolderOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v60H140v460l102-400h698L821-160H80Z" />
    </svg>
  )
}
