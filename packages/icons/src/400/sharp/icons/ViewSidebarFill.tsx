import type { SVGProps, JSX } from 'react'

export default function ViewSidebarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M707-627v-173h173v173H707Zm0 234v-174h173v174H707ZM80-160v-640h567v640H80Zm627 0v-173h173v173H707Z" />
    </svg>
  )
}
