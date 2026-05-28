import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMedium({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M310.38-335.38v-315.47h394.24v315.47H310.38ZM120-200v-30.77h689.23V-760H840v560H120Z" />
    </svg>
  )
}
