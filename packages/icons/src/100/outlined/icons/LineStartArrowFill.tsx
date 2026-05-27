import type { SVGProps } from 'react'

export default function LineStartArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M458-313 195-480l263-167v156h366v22H458v156Z" />
    </svg>
  )
}
