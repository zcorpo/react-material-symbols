import type { SVGProps, JSX } from 'react'

export default function FormatH1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M220-290v-380h45.39v167.31H460V-670h45.39v380H460v-167.31H265.39V-290H220Zm474.61 0v-334.62h-80V-670H740v380h-45.39Z" />
    </svg>
  )
}
