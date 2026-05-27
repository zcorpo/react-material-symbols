import type { SVGProps } from 'react'

export default function AirlineSeatLegroomNormalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M660-117.37V-410H250v-435.5h228.37v252.97h284.98v373.01h119.28v102.15H660ZM560-274.5H114.5v-571H180V-340h380v65.5Z" />
    </svg>
  )
}
