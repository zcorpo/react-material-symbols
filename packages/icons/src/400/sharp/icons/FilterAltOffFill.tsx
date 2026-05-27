import type { SVGProps, JSX } from 'react'

export default function FilterAltOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M580-465 245-800h597L580-465ZM813-61 560-314v154H400v-314L61-813l43-43 752 752-43 43Z" />
    </svg>
  )
}
