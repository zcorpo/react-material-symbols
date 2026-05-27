import type { SVGProps, JSX } from 'react'

export default function DownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-340 358-462l16-15 95 94v-365h22v365l95-94 16 15-122 122ZM212-212v-151h22v129h492v-129h22v151H212Z" />
    </svg>
  )
}
