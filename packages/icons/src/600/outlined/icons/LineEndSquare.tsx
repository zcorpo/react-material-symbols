import type { SVGProps } from 'react'

export default function LineEndSquare({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M513-333h294.56v-294.56H513V-333Zm-79.78 79.78v-187.17H70.39v-79.22h362.83v-187.17h453.56v453.56H433.22ZM660-480Z" />
    </svg>
  )
}
