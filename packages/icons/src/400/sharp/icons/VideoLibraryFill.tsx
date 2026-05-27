import type { SVGProps } from 'react'

export default function VideoLibraryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m424-373 260-167-260-167v334ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z" />
    </svg>
  )
}
