import type { SVGProps } from 'react'

export default function ApprovalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-320h640v320H160Zm60-160h520v-100H220v100Zm260-160L281-680q0-83 58.21-141.5T480-880q82.58 0 140.79 58.5Q679-763 679-680L480-400Z" />
    </svg>
  )
}
