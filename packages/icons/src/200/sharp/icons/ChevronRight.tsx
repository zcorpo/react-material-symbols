import type { SVGProps } from 'react'

export default function ChevronRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M543.85-480.23 353.54-671.31l22.23-22.23 212.54 213.31-212.54 212.54-22.23-22.23 190.31-190.31Z" />
    </svg>
  )
}
