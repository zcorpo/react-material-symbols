import type { SVGProps } from 'react'

export default function SignalCellularPauseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v525H579v326H55Zm767 0v-246h84v246h-84Zm-163 0v-246h83v246h-83Z" />
    </svg>
  )
}
