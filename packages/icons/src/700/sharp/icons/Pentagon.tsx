import type { SVGProps } from 'react'

export default function Pentagon({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M296.6-197H663l125-373-308-215-308 215 124.6 373ZM227-103 59-607l421-294 421 294-168 504H227Zm253-389Z" />
    </svg>
  )
}
