import type { SVGProps } from 'react'

export default function DestructionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-80v-320h720v320H120Zm132-379L63-568l242-41-65-239 201 144 121-217 41 245 236-66-142 203 139 80H252Z" />
    </svg>
  )
}
