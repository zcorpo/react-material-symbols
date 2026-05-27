import type { SVGProps, JSX } from 'react'

export default function ResizeWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M788-140 140.62-787.38l32-32L820-172l-32 32Zm-405.92 0L140.62-382.08l32-31.61L414.69-172l-32.61 32Z" />
    </svg>
  )
}
