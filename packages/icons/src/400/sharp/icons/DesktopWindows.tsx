import type { SVGProps, JSX } from 'react'

export default function DesktopWindows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M334-120v-60h86v-100H80v-560h800v560H540v100h86v60H334ZM140-340h680v-440H140v440Zm0 0v-440 440Z" />
    </svg>
  )
}
