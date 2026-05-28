import type { SVGProps, JSX } from 'react'

export default function DownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-333.77 341.62-472.15l22.23-21.47 100.77 100V-760h30.76v366.38l100.77-100 22.23 21.47L480-333.77ZM200-200v-163h30.77v132.23h498.46V-363H760v163H200Z" />
    </svg>
  )
}
