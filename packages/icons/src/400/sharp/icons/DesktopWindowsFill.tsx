import type { SVGProps } from 'react'

export default function DesktopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M334-120v-60h86v-100H80v-560h800v560H540v100h86v60H334Z" />
    </svg>
  )
}
