import type { SVGProps } from 'react'

export default function AdGroup({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-260h560v-500H260v500Zm-60 60v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm180-180v-560 560Z" />
    </svg>
  )
}
