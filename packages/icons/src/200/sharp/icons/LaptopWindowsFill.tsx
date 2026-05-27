import type { SVGProps, JSX } from 'react'

export default function LaptopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-209.23V-240h135.62v-32h-55.39v-488h719.54v488h-55.39v32H920v30.77H40Z" />
    </svg>
  )
}
