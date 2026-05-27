import type { SVGProps } from 'react'

export default function WidthWide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-22h141v-492H154v492Zm163 0h326v-492H317v492Zm348 0h141v-492H665v492ZM317-726v492-492Z" />
    </svg>
  )
}
