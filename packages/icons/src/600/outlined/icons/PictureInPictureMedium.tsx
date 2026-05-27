import type { SVGProps } from 'react'

export default function PictureInPictureMedium({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87v-79.22h749.04V-814.7h79.79v589.61q0 32.51-23.53 55.87-23.52 23.35-56.26 23.35H65.87Zm234.04-179.22v-337h415v337h-415Z" />
    </svg>
  )
}
