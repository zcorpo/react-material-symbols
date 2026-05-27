import type { SVGProps } from 'react'

export default function FolderCheckFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M437.59-308.85 644.8-516.83l-47.97-47.97-159.24 159.23-79.5-79.5-47.74 48.74 127.24 127.48ZM74.02-154.02v-652.2h344.35L481-743.35h405.22v589.33H74.02Z" />
    </svg>
  )
}
