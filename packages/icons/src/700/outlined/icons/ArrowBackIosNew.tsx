import type { SVGProps, JSX } from 'react'

export default function ArrowBackIosNew({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M657-56 232-480l425-424 80 81-343 343 343 343-80 81Z" />
    </svg>
  )
}
