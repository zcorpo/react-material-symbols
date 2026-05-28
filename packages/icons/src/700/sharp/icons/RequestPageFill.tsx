import type { SVGProps, JSX } from 'react'

export default function RequestPageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M436-220h77v-40h101v-218H423v-65h191v-77h-90v-40h-77v40H346v218h191v65H346v77h90v40ZM135-55v-851h437l254 254.3V-55H135Z" />
    </svg>
  )
}
