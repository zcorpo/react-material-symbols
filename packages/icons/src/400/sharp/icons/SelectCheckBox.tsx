import type { SVGProps, JSX } from 'react'

export default function SelectCheckBox({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h724l-60 60H180v600h600v-343l60-60v463H120Zm341-168L239-510l42-42 180 180 382-382 42 42-424 424Z" />
    </svg>
  )
}
