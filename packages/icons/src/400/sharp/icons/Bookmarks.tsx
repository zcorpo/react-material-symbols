import type { SVGProps, JSX } from 'react'

export default function Bookmarks({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-641h480v641L400-199 160-80Zm60-97 180-89 180 89v-484H220v484Zm520-62v-582H284v-60h516v642h-60ZM220-661h360-360Z" />
    </svg>
  )
}
