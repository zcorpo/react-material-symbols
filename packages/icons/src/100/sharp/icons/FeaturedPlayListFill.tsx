import type { SVGProps, JSX } from 'react'

export default function FeaturedPlayListFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M265-470h308v-22H265v22Zm0-123h308v-22H265v22ZM132-212v-536h696v536H132Z" />
    </svg>
  )
}
