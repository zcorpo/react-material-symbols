import type { SVGProps } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452.43-114.02H114.02v-732.2h338.41v732.2Zm57.14-395.55v-336.65h336.65v336.65H509.57Zm0 395.55v-338.41h336.65v338.41H509.57Z" />
    </svg>
  )
}
