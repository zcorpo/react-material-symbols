import type { SVGProps, JSX } from 'react'

export default function CreateNewFolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h307.15l65.39 65.39H860V-180H100Zm462.69-150h45.39v-87.31h87.3v-45.38h-87.3V-550h-45.39v87.31h-87.3v45.38h87.3V-330Z" />
    </svg>
  )
}
