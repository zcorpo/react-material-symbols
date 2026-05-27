import type { SVGProps, JSX } from 'react'

export default function BookmarkAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-605v-90h-90v-60h90v-90h60v90h90v60h-90v90h-60ZM200-120v-725h396q-23 26-34.5 55.5T550-725q0 67 43 117t107 61q17 2 30 2t30-2v427L480-240 200-120Z" />
    </svg>
  )
}
