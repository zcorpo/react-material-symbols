import type { SVGProps } from 'react'

export default function StylusPencilFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M262.31-338.31 451.39-820h56.84l189.46 481.69H262.31ZM180-140l35.92-96h528.16L780-140H180Z" />
    </svg>
  )
}
