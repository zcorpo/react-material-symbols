import type { SVGProps, JSX } from 'react'

export default function FolderOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h307.15l65.39 65.39h384v45.38H145.39v443.08l97.76-370h684.16L816.38-180H100Z" />
    </svg>
  )
}
