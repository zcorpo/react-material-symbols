import type { SVGProps, JSX } from 'react'

export default function CalendarViewMonth({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-510h180v-221H149v221Zm240 0h182v-221H389v221Zm242 0h180v-221H631v221ZM149-229h180v-221H149v221Zm240 0h182v-221H389v221Zm242 0h180v-221H631v221ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
