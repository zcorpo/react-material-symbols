import type { SVGProps } from 'react'

export default function MoneyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M572-319h191v-322H572v322Zm60-60v-202h71v202h-71Zm-308 60h186v-322H324v322Zm60-60v-202h66v202h-66Zm-187 60h60v-322h-60v322ZM46-126v-709h869v709H46Z" />
    </svg>
  )
}
