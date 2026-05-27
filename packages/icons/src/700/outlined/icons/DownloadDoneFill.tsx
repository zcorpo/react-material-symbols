import type { SVGProps, JSX } from 'react'

export default function DownloadDoneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M380-336 135-580l68-67 177 177 378-378 67 68-445 444ZM175-135v-94h611v94H175Z" />
    </svg>
  )
}
