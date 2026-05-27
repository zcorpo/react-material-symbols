import type { SVGProps } from 'react'

export default function InkEraserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M687.8-222.15h203v68.13H619.43l68.37-68.13Zm-515.5 68.13L45.09-285l547.28-591.41 295.89 309.89-386.88 412.5H172.3Z" />
    </svg>
  )
}
