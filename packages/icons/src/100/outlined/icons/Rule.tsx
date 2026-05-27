import type { SVGProps } from 'react'

export default function Rule({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m561-212-15-15 106-106-106-106 15-15 106 106 106-106 15 15-106 106 106 106-15 15-106-106-106 106Zm81-329L537-646l15-15 90 89 172-173 15 16-187 188ZM132-329v-22h308v22H132Zm0-280v-22h308v22H132Z" />
    </svg>
  )
}
