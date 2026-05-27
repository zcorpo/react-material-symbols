import type { SVGProps } from 'react'

export default function SignalCellularPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m132-132 696-696v441h-22v-387L185-154h408v22H132Zm561 0v-155h22v155h-22Zm102 0v-155h22v155h-22ZM496-464Z" />
    </svg>
  )
}
