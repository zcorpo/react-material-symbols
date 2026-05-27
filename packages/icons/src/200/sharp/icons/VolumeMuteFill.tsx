import type { SVGProps, JSX } from 'react'

export default function VolumeMuteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-400v-160h136.92L600-703.08v446.16L456.92-400H320Z" />
    </svg>
  )
}
