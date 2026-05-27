import type { SVGProps, JSX } from 'react'

export default function SignalCellular3BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v851H55Zm539-94h217v-530L594-462v313Z" />
    </svg>
  )
}
