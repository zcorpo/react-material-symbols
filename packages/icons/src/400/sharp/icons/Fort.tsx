import type { SVGProps, JSX } from 'react'

export default function Fort({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-120v-156l80-80v-258l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v74h280v-74l-80-80v-146h60v80h100v-80h60v80h100v-80h60v146l-80 80v258l80 80v156H570v-210H390v210H40Zm60-60h230v-210h300v210h230v-71l-80-80v-308l61-61H619l61 61v159H280v-159l61-61H119l61 61v308l-80 80v71Zm380-260Z" />
    </svg>
  )
}
