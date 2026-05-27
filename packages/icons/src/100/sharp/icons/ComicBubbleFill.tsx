import type { SVGProps } from 'react'

export default function ComicBubbleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m440-842 94.32 94.32h133.36v133.36L762-520 656-414l99 193-16 16-193-99-106 106-94.32-94.32H212.32v-133.36L118-520l94.32-94.32v-133.36h133.36L440-842Z" />
    </svg>
  )
}
