import type { SVGProps } from 'react'

export default function ChevronBackward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M560.23-267.69 347.69-480.23l212.54-213.31 22.23 22.23-190.31 191.08 190.31 190.31-22.23 22.23Z" />
    </svg>
  )
}
