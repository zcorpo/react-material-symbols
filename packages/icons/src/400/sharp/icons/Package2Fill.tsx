import type { SVGProps } from 'react'

export default function Package2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M450-85v-378L120-654v379L450-85Zm60 0 330-190v-380L510-463v378Zm164-542 133-77-327-188-134 77 328 188ZM480-514l133-78-328-188-132 77 327 189Z" />
    </svg>
  )
}
