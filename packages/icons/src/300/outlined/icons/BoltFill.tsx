import type { SVGProps } from 'react'

export default function BoltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m343.08-102.31 40-277.69h-185l329.61-475.77h49.23L537.31-540H757.3L392.31-102.31h-49.23Z" />
    </svg>
  )
}
