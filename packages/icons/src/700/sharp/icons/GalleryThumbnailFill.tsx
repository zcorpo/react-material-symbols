import type { SVGProps, JSX } from 'react'

export default function GalleryThumbnailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M25-185v-590h590v590H25Zm640-320v-270h270v270H665ZM160-360h320L375-500l-75 100-56-73-84 113Zm505 175v-270h270v270H665Z" />
    </svg>
  )
}
