import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M451-120H120v-720h331v720Zm60-391v-329h329v329H511Zm0 391v-331h329v331H511Z" />
    </svg>
  )
}
