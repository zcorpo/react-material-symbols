import type { SVGProps, JSX } from 'react'

export default function MergeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m256-172-15-15 228-227v-334l-99 99-15-14 125-125 125 125-15 14-99-99v334l228 227-15 15-224-224-224 224Z" />
    </svg>
  )
}
