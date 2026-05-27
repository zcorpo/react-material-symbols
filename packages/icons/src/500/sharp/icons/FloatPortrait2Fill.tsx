import type { SVGProps } from 'react'

export default function FloatPortrait2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M282.15-529.76h268.33v-228.09H282.15v228.09ZM806.22-74.02h-652.2v-812.2h652.2v812.2Z" />
    </svg>
  )
}
