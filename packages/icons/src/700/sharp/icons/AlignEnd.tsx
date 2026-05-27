import type { SVGProps } from 'react'

export default function AlignEnd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-55v-94h851v94H55Zm218-458v-134h414v134H273Zm0 240v-134h414v134H273Z" />
    </svg>
  )
}
