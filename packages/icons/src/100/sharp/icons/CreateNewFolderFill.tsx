import type { SVGProps } from 'react'

export default function CreateNewFolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h253l74 74h369v462H132Zm451-134h22v-83h83v-22h-83v-83h-22v83h-83v22h83v83Z" />
    </svg>
  )
}
