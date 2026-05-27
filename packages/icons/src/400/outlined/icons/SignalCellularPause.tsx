import type { SVGProps } from 'react'

export default function SignalCellularPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-80 800-800v490h-60v-345L224-140h346v60H80Zm570 0v-230h60v230h-60Zm140 0v-230h60v230h-60ZM522-438Z" />
    </svg>
  )
}
