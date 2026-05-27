import type { SVGProps } from 'react'

export default function FolderOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M886.22-175.17 254.93-806.22h168.22l62.63 62.87h400.44v568.18Zm-21.83 151L734.78-154.02H74.02V-805.5h96.87l67.41 67.65h-87.82l-98.31-98.3 43.92-43.92L908.07-68.09l-43.68 43.92Z" />
    </svg>
  )
}
