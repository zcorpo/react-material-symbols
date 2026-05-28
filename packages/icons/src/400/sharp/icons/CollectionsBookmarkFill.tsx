import type { SVGProps, JSX } from 'react'

export default function CollectionsBookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm494-740v278l93-57 93 57v-278H574Z" />
    </svg>
  )
}
