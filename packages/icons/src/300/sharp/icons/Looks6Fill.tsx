import type { SVGProps, JSX } from 'react'

export default function Looks6Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M419.23-504.31v-122.54h125.08v-45.38H373.85v384.46h212.69v-216.54H419.23Zm0 45.39h121.92v125.77H419.23v-125.77ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
