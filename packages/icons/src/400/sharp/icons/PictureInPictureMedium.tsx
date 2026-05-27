import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMedium({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305-320v-337h415v337H305ZM80-160v-60h740v-580h60v640H80Z" />
    </svg>
  )
}
