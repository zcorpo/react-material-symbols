import type { SVGProps, JSX } from 'react'

export default function ApprovalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-181.54v-243.08h560v243.08H200Zm30.77-120h498.46v-92.31H230.77v92.31ZM480-424.62 320.23-641.54v-7.69q0-66.85 46.51-113.42 46.51-46.58 113.26-46.58t113.26 46.58q46.51 46.57 46.51 113.42v7.69L480-424.62Z" />
    </svg>
  )
}
