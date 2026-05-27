import type { SVGProps, JSX } from 'react'

export default function BookmarkRemoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M791-685H603v-22h188v22ZM252-198v-592h307q-15 21-22.5 44.5T529-696q0 68 45.5 116T686-528q6 1 11 1t11-1v330l-228-98-228 98Z" />
    </svg>
  )
}
