import type { SVGProps, JSX } from 'react'

export default function GalleryThumbnailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-200v-560h560v560H40Zm640-320v-240h240v240H680ZM160-360h320L375-500l-75 100-55-73-85 113Zm520 160v-240h240v240H680Z" />
    </svg>
  )
}
