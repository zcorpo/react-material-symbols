import type { SVGProps } from 'react'

export default function CallMadeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m222-200-22-22 467.23-467.23H361.69V-720H720v358.31h-30.77v-305.54L222-200Z" />
    </svg>
  )
}
