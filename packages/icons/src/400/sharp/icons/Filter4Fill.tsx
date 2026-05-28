import type { SVGProps, JSX } from 'react'

export default function Filter4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Zm493-258h60v-405h-60v148H463v-148h-60v208h170v197Z" />
    </svg>
  )
}
