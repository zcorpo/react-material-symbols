import type { SVGProps, JSX } from 'react'

export default function HardwareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M426-481v-211H256q15-44 53-70t85-26h168v121l120-121h22v263h-22L562-645v164H426Zm0 309v-286h136v286H426Z" />
    </svg>
  )
}
