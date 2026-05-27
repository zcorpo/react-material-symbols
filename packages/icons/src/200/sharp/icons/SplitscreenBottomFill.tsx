import type { SVGProps, JSX } from 'react'

export default function SplitscreenBottomFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-184.61v-244.62h640v244.62H160Zm0-346.16v-244.62h640v244.62H160Zm609.23-213.85H190.77v183.08h578.46v-183.08Z" />
    </svg>
  )
}
