import type { SVGProps, JSX } from 'react'

export default function SplitscreenRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520.39-140v-680h287.3v680h-287.3Zm-368.08 0v-680h287.3v680h-287.3Zm45.38-634.61v589.22h196.54v-589.22H197.69Z" />
    </svg>
  )
}
