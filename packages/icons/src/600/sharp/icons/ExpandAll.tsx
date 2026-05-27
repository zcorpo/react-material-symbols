import type { SVGProps } from 'react'

export default function ExpandAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-66.43 226.43-320l57-57L480-181l196.57-196 57 57L480-66.43Zm-196.57-516-57-57.57L480-893.57 733.57-640l-56.44 57.57L480-779 283.43-582.43Z" />
    </svg>
  )
}
