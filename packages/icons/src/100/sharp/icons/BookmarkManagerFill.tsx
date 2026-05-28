import type { SVGProps, JSX } from 'react'

export default function BookmarkManagerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M572-132v-78l231-230 77 78-230 230h-78Zm231-192 37-38-37-38-38 38 38 38ZM132-212v-536h253l74 74h369v78L478-250v38H132Z" />
    </svg>
  )
}
