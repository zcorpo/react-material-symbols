import type { SVGProps } from 'react'

export default function BorderAll({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2Zm663.83-68.13V-450H510v267.85h267.85Zm0-595.7H510V-510h267.85v-267.85Zm-595.7 0V-510H450v-267.85H182.15Zm0 595.7H450V-450H182.15v267.85Z" />
    </svg>
  )
}
