import type { SVGProps, JSX } from 'react'

export default function FilterBAndW({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M788-172H172v-616h616v616Zm-593-22h285.5v-327L766-193v-573H480.5v245L195-194Z" />
    </svg>
  )
}
