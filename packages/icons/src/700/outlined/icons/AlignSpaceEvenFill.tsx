import type { SVGProps } from 'react'

export default function AlignSpaceEvenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-811v-95h851v95H55Zm0 756v-94h851v94H55Zm218-498v-134h414v134H273Zm0 280v-134h414v134H273Z" />
    </svg>
  )
}
