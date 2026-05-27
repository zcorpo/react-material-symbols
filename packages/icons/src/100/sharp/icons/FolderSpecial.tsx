import type { SVGProps } from 'react'

export default function FolderSpecial({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m527-326 69-51 69 51-26-84 69-58h-84l-28-83-28 83h-85l70 58-26 84ZM132-212v-536h253l74 74h369v462H132Zm22-22h652v-418H451l-74-74H154v492Zm0 0v-492 492Z" />
    </svg>
  )
}
