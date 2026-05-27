import type { SVGProps } from 'react'

export default function AlignItemsStretchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M309-269v-422h62v422h-62Zm280 0v-422h62v422h-62ZM132-806v-22h696v22H132Zm0 674v-22h696v22H132Z" />
    </svg>
  )
}
