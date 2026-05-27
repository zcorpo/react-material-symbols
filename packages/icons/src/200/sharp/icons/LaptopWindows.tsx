import type { SVGProps } from 'react'

export default function LaptopWindows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-209.23V-240h135.62v-32h-55.39v-488h719.54v488h-55.39v32H920v30.77H40Zm111-93.54h658v-426.46H151v426.46Zm0 0v-426.46 426.46Z" />
    </svg>
  )
}
