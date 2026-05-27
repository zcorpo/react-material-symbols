import type { SVGProps } from 'react'

export default function ArrowDropUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M256.82-390.39 480-614.57l223.18 224.18H256.82Z" />
    </svg>
  )
}
