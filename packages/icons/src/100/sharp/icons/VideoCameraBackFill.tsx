import type { SVGProps, JSX } from 'react'

export default function VideoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M261-338h332L493-472 389-342l-67-77-61 81ZM157-212v-536h536v252l110-110v251L693-465v253H157Z" />
    </svg>
  )
}
