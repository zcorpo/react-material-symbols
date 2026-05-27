import type { SVGProps, JSX } from 'react'

export default function ChevronLineUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-659.23v-45.38h460v45.38H250Zm43.15 420.08-32.61-32.62L480-491.61l222.69 222.69-33 32.61L480-426 293.15-239.15Z" />
    </svg>
  )
}
