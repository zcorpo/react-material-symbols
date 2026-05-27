import type { SVGProps } from 'react'

export default function SdCardAlertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M468-323h25v-45h-25v45Zm2-93h22v-183h-22v183Zm278 284H212v-486l210-210h326v696Z" />
    </svg>
  )
}
