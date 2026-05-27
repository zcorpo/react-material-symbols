import type { SVGProps } from 'react'

export default function GalleryThumbnailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M70-220v-520h520v520H70Zm600-300v-220h220v220H670ZM173.85-361.92h312.3L385-496.92l-75 100-55-73-81.15 108ZM670-220v-220h220v220H670Z" />
    </svg>
  )
}
