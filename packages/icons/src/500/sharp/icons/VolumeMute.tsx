import type { SVGProps, JSX } from 'react'

export default function VolumeMute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M274.02-354.02v-252.2h163.59l208.61-208.37v669.18L437.61-354.02H274.02Zm68.13-68.13h125.81l109.89 105.89v-326.48L467.96-537.85H342.15v115.7ZM459-480Z" />
    </svg>
  )
}
