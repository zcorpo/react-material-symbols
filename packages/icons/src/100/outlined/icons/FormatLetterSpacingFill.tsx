import type { SVGProps } from 'react'

export default function FormatLetterSpacingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M342-131 222-251l120-118 16 15-93 92h429l-91-92 16-15 118 118-120 120-15-16 93-93H265l92 93-15 16Zm-90-375v-322h22v322h-22Zm217 0v-322h22v322h-22Zm217 0v-322h22v322h-22Z" />
    </svg>
  )
}
