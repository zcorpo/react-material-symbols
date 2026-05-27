import type { SVGProps, JSX } from 'react'

export default function VolumeMute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-400v-160h136.92L600-703.08v446.16L456.92-400H320Zm30.77-30.77h120.08l98.38 96.69v-291.61l-98.38 96.46H350.77v98.46Zm109-49.23Z" />
    </svg>
  )
}
