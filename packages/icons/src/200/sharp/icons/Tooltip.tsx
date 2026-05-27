import type { SVGProps } from 'react'

export default function Tooltip({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-120-90.15-138.54H120V-840h720v581.46H570.15L480-120Zm0-55.69 73.54-113.62h255.69v-519.92H150.77v519.92h255.69L480-175.69Zm0-374.08Z" />
    </svg>
  )
}
