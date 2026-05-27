import type { SVGProps } from 'react'

export default function LineStartArrowNotch({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M458-313 195-480l263-167-89 156h482v22H369l89 156Z" />
    </svg>
  )
}
