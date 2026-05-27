import type { SVGProps } from 'react'

export default function MailOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M824-105 716-212H132v-536h80l22 22h-32l-83-83 16-16 704 704-15 16Zm4-131L534-529l272-183-17-14-271 181-202-203h512v512Z" />
    </svg>
  )
}
