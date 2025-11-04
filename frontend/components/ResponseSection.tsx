"use client"
import { Textarea } from "@/components/ui/textarea"

interface ResponseSectionProps {
  response: string
  responseStatus: string
  responseTime: string
}

export function ResponseSection({ response, responseStatus, responseTime }: ResponseSectionProps) {
  return (
    <div className="flex-1 w-full h-full overflow-hidden">
      <div className="flex flex-col w-full h-full bg-gray-50">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <h3 className="font-semibold text-lg">Response</h3>
          {responseStatus && (
            <div className="flex gap-4 text-sm">
              <span className="text-green-600 font-medium">{responseStatus}</span>
              <span className="text-gray-600">{responseTime}</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto h-full p-4">
          {response ? (
            <Textarea
              value={response}
              readOnly
              className="font-mono text-sm w-full h-full resize-none bg-white rounded-md p-3"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-sm bg-white border rounded-md">
              Click <span className="mx-1 font-medium">Send</span> to view the response
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
