import type { SVGProps } from 'react'

export default function ClarifyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M269-300h251v-60H269v60Zm362 0h60v-360h-60v360ZM269-450h251v-60H269v60Zm0-150h251v-60H269v60ZM47-95v-771h867v771H47Z" />
    </svg>
  )
}
