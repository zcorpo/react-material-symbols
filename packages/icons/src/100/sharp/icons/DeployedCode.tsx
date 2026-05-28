import type { SVGProps, JSX } from 'react'

export default function DeployedCode({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-159v-315L194-633v315l275 159Zm22 0 275-159v-315L491-474v315Zm-11-333 272-158-272-157-272 157 272 158ZM172-305v-350l308-177 308 177v350L480-128 172-305Zm308-175Z" />
    </svg>
  )
}
