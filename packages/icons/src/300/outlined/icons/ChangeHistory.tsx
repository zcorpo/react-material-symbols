import type { SVGProps } from 'react'

export default function ChangeHistory({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m116.16-180 364.46-582.3L843.84-180H116.16ZM197-225.39h566L480.62-675.77 197-225.39Zm283-225.3Z" />
    </svg>
  )
}
