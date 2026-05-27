import type { SVGProps, JSX } from 'react'

export default function HealthAndBeautyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M645-55v-72h170v-98H645v-72h170v-100H645v-71h170v-100H645v-71h170v-99H645v-72h298v755H645Zm-478 0L17-520l205-136v-249h150v249l204 136L426-55H167Z" />
    </svg>
  )
}
