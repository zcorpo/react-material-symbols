import type { SVGProps, JSX } from 'react'

export default function DeviceBand({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M323-80v-534h-40v-102h40v-164h315v164h41v102h-41v534H323Zm60-555v495h195v-495H383Zm0-60h195v-125H383v125Zm0 60h195-195Zm0-60h195-195Z" />
    </svg>
  )
}
