import type { SVGProps } from 'react'

export default function StylusFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m336-156-228 48 48-228 180 180Zm52-34L190-388l485-485 198 198-485 485Z" />
    </svg>
  )
}
