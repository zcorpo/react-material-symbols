import type { SVGProps } from 'react'

export default function SignalCellularAlt2BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-200v-160h55.38v160H240Zm236.92 0v-360h55.39v360h-55.39Z" />
    </svg>
  )
}
