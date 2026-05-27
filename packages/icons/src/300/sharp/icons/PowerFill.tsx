import type { SVGProps } from 'react'

export default function PowerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M397-140v-111.46L260-398.62v-253.46h103.16V-820h45.38v167.92h142.92V-820h45.38v167.92H700v253.46L563-251.46V-140H397Z" />
    </svg>
  )
}
