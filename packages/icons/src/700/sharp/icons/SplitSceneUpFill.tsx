import type { SVGProps } from 'react'

export default function SplitSceneUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-278h691v278H135ZM55-433v-94h80v-339h691v339h80v94H55Z" />
    </svg>
  )
}
