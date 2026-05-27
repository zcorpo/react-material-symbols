import type { SVGProps } from 'react'

export default function EMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M355.38-300h249.24v-30.77H386.15v-133.85h178.47v-30.76H386.15v-133.85h218.47V-660H355.38v360ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
