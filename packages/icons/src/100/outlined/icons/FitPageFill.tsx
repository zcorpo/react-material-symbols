import type { SVGProps } from 'react'

export default function FitPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-616h34v616h-34Zm582 0v-616h34v616h-34ZM318-463v-34h34v34h-34Zm145 291v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm0-146v-34h34v34h-34Zm0-145v-34h34v34h-34Zm146 291v-34h34v34h-34Z" />
    </svg>
  )
}
