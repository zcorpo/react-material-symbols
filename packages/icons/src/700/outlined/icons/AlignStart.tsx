import type { SVGProps, JSX } from 'react'

export default function AlignStart({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-811v-95h851v95H55Zm218 258v-134h414v134H273Zm0 240v-134h414v134H273Z" />
    </svg>
  )
}
