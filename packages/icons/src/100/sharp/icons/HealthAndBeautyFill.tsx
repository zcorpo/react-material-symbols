import type { SVGProps } from 'react'

export default function HealthAndBeautyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M645-132v-22h165v-127H645v-22h165v-127H645v-22h165v-128H645v-22h165v-127H645v-22h213v619H645Zm-412 0L102-496l190-112v-220h45v220l190 112-131 364H233Z" />
    </svg>
  )
}
