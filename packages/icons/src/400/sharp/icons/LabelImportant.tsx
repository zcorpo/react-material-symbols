import type { SVGProps } from 'react'

export default function LabelImportant({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m80-160 243-320L80-800h557l243 320-242 320H80Zm120-60h407l198-260-198-260H200l198 260-198 260Zm303-260Z" />
    </svg>
  )
}
