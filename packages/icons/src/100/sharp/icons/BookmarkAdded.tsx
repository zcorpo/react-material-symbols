import type { SVGProps, JSX } from 'react'

export default function BookmarkAdded({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m677-602-74-73 15-16 59 59 143-144 16 16-159 158ZM480-296.33 252-198v-592h277v22H274v535l206-88 206 88v-295h22v330l-228-98.33ZM274-768h255-255Z" />
    </svg>
  )
}
