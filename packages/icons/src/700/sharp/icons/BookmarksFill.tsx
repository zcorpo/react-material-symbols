import type { SVGProps, JSX } from 'react'

export default function BookmarksFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-660h496v660L383-175.69 135-55Zm596-171v-586H262v-95h564v681h-95Z" />
    </svg>
  )
}
