import type { SVGProps, JSX } from 'react'

export default function DownloadDone({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M381-367 214-535l15-16 152 153 350-350 16 16-366 365ZM252-212v-22h456v22H252Z" />
    </svg>
  )
}
