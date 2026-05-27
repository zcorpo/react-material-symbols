import type { SVGProps } from 'react'

export default function ChangeHistory({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m54-145.87 427-681.26 425 681.26H54Zm142.04-79.22h567.92L481-675.39l-284.96 450.3ZM480-450.74Z" />
    </svg>
  )
}
