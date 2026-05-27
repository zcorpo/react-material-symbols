import type { SVGProps } from 'react'

export default function Description({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-248h322v-71H319v71Zm0-170h322v-71H319v71ZM135-55v-851h457l234 234.3V-55H135Zm407-570v-186H229v662h502v-476H542ZM229-811v186-186 662-662Z" />
    </svg>
  )
}
