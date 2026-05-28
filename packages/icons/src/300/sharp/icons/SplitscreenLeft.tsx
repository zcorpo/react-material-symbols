import type { SVGProps, JSX } from 'react'

export default function SplitscreenLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152.31-140v-680h287.3v680h-287.3Zm368.08 0v-680h287.3v680h-287.3Zm241.92-634.61H565.77v589.22h196.54v-589.22Z" />
    </svg>
  )
}
