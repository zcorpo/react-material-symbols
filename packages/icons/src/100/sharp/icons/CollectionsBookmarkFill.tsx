import type { SVGProps } from 'react'

export default function CollectionsBookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M254-280v-548h548v548H254Zm-96 96v-516h22v494h494v22H158Zm404-622v233l72-43 72 43v-233H562Z" />
    </svg>
  )
}
