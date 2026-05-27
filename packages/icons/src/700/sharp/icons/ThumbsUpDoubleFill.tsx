import type { SVGProps, JSX } from 'react'

export default function ThumbsUpDoubleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m702-271 47-109.75V-578H509l16-113-42-42 173-173 61 61-22 152h255v125L824-271H702ZM10-95v-423h79v423H10Zm139 0v-380.67L400-731l61 61-21 152h249v126L563.25-95H149Z" />
    </svg>
  )
}
