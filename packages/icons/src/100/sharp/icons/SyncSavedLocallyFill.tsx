import type { SVGProps, JSX } from 'react'

export default function SyncSavedLocallyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m437-415 186-185-16-16-170 170-85-85-16 16 101 100ZM80-200v-22h800v22H80Zm52-68v-496h696v496H132Z" />
    </svg>
  )
}
