import type { SVGProps, JSX } from 'react'

export default function ArrowDownward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457.31-780v513.69L212-512l-32 32 300 300 300-300-32-32-245.31 245.69V-780h-45.38Z" />
    </svg>
  )
}
