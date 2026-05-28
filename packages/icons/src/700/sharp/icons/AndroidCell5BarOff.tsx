import type { SVGProps, JSX } from 'react'

export default function AndroidCell5BarOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M415-135v-257L14-673l45-63 813 570-44 62-80-55v24H618v-115l-73-50v165H415Zm-405 0v-264h130v264H10Zm203 0v-349h130v349H213Zm535-174-130-91v-297h130v388Zm202 142-130-91v-568h130v659Z" />
    </svg>
  )
}
