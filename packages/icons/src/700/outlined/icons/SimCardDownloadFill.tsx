import type { SVGProps } from 'react'

export default function SimCardDownloadFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m482-268 170-170-55-54-76 77v-190h-77v190l-76-77-55 54 169 170ZM229-55q-39 0-66.5-27.5T135-149v-503l254-254h342q39 0 67 28t28 67v662q0 39-28 66.5T731-55H229Z" />
    </svg>
  )
}
