import type { SVGProps } from 'react'

export default function FolderOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M828-241 322-748h54l74 74h378v433Zm21 157L721-212H132v-536h84l54 54h-31L132-800l16-16 716 716-15 16Z" />
    </svg>
  )
}
