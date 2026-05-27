import type { SVGProps } from 'react'

export default function SplitscreenAddFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-533v-307h720v307H120Zm0 413v-308h720v93q-11-2-20.5-3.5T800-340q-75 0-127.5 52.5T620-160q0 11 1 21t3 19H120Zm660 80v-80h-80v-60h80v-80h60v80h80v60h-80v80h-60Z" />
    </svg>
  )
}
