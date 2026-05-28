import type { SVGProps, JSX } from 'react'

export default function VitalSigns({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M31-433v-94h241l91 209 232-579 157 370h177v94H688l-91-207L364-61 208-433H31Z" />
    </svg>
  )
}
