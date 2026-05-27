import type { SVGProps } from 'react'

export default function Battery4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M340.96-493.91h278.08v-259.94H340.96v259.94ZM272.59-73.54v-748.68h123.34v-64h168.14v64h123.34v748.68H272.59Z" />
    </svg>
  )
}
