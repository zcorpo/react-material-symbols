import type { SVGProps, JSX } from 'react'

export default function FlightClassFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M475.46-443.35v-362.87h249.32v362.87H475.46Zm249.32 201.2H315.59L194.02-645.39v-160.83h68.13v148.24l104.28 347.46h358.35v68.37ZM314.74-114.02v-68.13h410.04v68.13H314.74Z" />
    </svg>
  )
}
