import type { SVGProps, JSX } from 'react'

export default function SdCardAlertFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M442.37-285.17h75.26v-75.5h-75.26v75.5Zm8.2-144.44h62.86v-209.06h-62.86v209.06ZM806.22-74.02h-652.2v-569.61l242.59-242.59h409.61v812.2Z" />
    </svg>
  )
}
