import type { SVGProps, JSX } from 'react'

export default function DriveFolderUploadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h307.15l65.39 65.39H860V-180H100Zm357.31-115.39h45.38v-221.23l81.69 81.7 32-32-136.38-136-135.61 135.23 31.99 32 80.93-80.93v221.23Z" />
    </svg>
  )
}
