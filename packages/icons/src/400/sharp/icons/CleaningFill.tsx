import type { SVGProps, JSX } from 'react'

export default function CleaningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m373-680 45-105v-35h-58v-60h280v75l-40 80H493v-45l-85 90h-35ZM320-80v-293l173-312h147v605H320Z" />
    </svg>
  )
}
