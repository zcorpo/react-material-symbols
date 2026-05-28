import type { SVGProps, JSX } from 'react'

export default function SignalCellularOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m846-82-50-50H132l332-332-299-299 16-16L862-98l-16 16Zm-18-154L532-532l296-296v592Z" />
    </svg>
  )
}
