import type { SVGProps, JSX } from 'react'

export default function ArrowBack({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m254-469 242 241-16 16-268-268 268-268 16 16-242 241h494v22H254Z" />
    </svg>
  )
}
