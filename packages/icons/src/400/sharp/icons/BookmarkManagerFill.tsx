import type { SVGProps, JSX } from 'react'

export default function BookmarkManagerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M560-80v-123l263-262 122 122L683-80H560Zm263-224 37-39-37-37-38 38 38 38ZM80-160v-640h341l60 60h399v134L500-228v68H80Z" />
    </svg>
  )
}
