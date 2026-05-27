import type { SVGProps } from 'react'

export default function SignalCellular2BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v851H55Zm459-94h297v-530L514-382v233Z" />
    </svg>
  )
}
