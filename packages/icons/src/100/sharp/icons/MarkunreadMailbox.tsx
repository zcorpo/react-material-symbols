import type { SVGProps, JSX } from 'react'

export default function MarkunreadMailbox({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272-405v-157H154v408h652v-408H388v-22h440v452H132v-452h140v-244h236v140H294v283h-22ZM154-562v157-157 408-408Z" />
    </svg>
  )
}
