import type { SVGProps } from 'react'

export default function SignalCellular1BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m55-55 851-851v851H55Zm392-94h364v-530L447-315.19V-149Z" />
    </svg>
  )
}
