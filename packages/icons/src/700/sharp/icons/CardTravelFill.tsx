import type { SVGProps, JSX } from 'react'

export default function CardTravelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-95v-651h227v-182h395v182h229v651H55Zm321-651h207v-88H376v88ZM149-275h662v-131H149v131Z" />
    </svg>
  )
}
