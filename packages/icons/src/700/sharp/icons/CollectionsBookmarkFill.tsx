import type { SVGProps, JSX } from 'react'

export default function CollectionsBookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M192-192v-731h731v731H192ZM37-37v-731h95v636h636v95H37Zm557-791v278l93-57 93 57v-278H594Z" />
    </svg>
  )
}
