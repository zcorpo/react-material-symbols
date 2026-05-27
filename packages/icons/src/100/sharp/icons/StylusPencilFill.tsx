import type { SVGProps } from 'react'

export default function StylusPencilFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m290-358 170-430h39l171 430H290Zm-78 186 31-80h474l31 80H212Z" />
    </svg>
  )
}
