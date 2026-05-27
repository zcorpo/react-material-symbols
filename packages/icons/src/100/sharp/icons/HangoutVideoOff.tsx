import type { SVGProps } from 'react'

export default function HangoutVideoOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M431-608h115v115L431-608Zm109 108 133-107v241L540-500Zm268 268 22 24v-539H293l22 22h493v493ZM188-747l22 22h-52v488h509L549-355H293v-256L97-806l16-16 722 722-16 16-130-131H136v-532h52Zm372 267Zm-137-1Z" />
    </svg>
  )
}
