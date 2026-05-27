import type { SVGProps } from 'react'

export default function Timer3Select({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-194v-92h260v-148H151v-92h258v-148H149v-92h352v240l-46 46 46 46v240H149Zm445 0v-71h192v-71H594v-213h263v72H665v70h192v213H594Z" />
    </svg>
  )
}
