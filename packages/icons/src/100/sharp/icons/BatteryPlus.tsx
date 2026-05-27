import type { SVGProps, JSX } from 'react'

export default function BatteryPlus({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M348-154Zm-22 22v-648h90v-48h128v48h90v318q-6 2-11.5 3t-10.5 3v-303H348v605h122q3.74 6.38 6.87 11.69T483-132H326Zm339 0v-102H565v-22h100v-100h22v100h101v22H687v102h-22Z" />
    </svg>
  )
}
