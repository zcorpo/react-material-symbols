import type { SVGProps } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M310.77-649.23v338.46-338.46ZM280-280v-400h400v400H280Zm30.77-30.77h338.46v-338.46H310.77v338.46Z" />
    </svg>
  )
}
