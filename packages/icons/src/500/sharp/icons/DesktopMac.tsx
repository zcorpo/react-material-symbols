import type { SVGProps } from 'react'

export default function DesktopMac({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332.89-114.02v-37.63l84-85H74.02v-609.57h812.2v609.57H543.35l84 85v37.63H332.89ZM142.15-393.85h675.7v-384h-675.7v384Zm0 0v-384 384Z" />
    </svg>
  )
}
