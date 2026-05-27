import type { SVGProps } from 'react'

export default function DesktopLandscape({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-320h360v-200H240v200Zm440-140h40v-180H360v40h320v140ZM80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z" />
    </svg>
  )
}
