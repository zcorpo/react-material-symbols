import type { SVGProps } from 'react'

export default function Mobile2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M504.5-213.5Q515-224 515-239t-10.5-25.5Q494-275 479-275t-25.5 10.5Q443-254 443-239t10.5 25.5Q464-203 479-203t25.5-10.5ZM175-15v-931h608v223h43v193h-43v515H175Z" />
    </svg>
  )
}
