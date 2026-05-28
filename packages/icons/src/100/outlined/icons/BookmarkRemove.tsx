import type { SVGProps, JSX } from 'react'

export default function BookmarkRemove({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M791-685H603v-22h188v22ZM252-198v-538q0-22 15.61-38 15.62-16 38.39-16h223v22H306q-12 0-22 10t-10 22v503l206-88 206 88v-295h22v330l-228-98-228 98Zm22-570h255-255Z" />
    </svg>
  )
}
