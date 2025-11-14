"use client"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface ResponseSectionProps {
  response: string
  responseStatus: string
  responseTime: string
}

export function ResponseSection({ response, responseStatus, responseTime }: ResponseSectionProps) {
  return (
    <div className="flex-1 w-full h-full">
      <div className="flex flex-col w-full h-full" style={{ backgroundColor: 'var(--color-muted)' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: 'var(--color-background)' }}>
          <h3 className="font-semibold text-lg">Response</h3>
          {responseStatus && (
            <div className="flex gap-4 text-sm">
              <span className="font-medium" style={{ color: 'var(--color-success)' }}>{responseStatus}</span>
              <span style={{ color: 'var(--color-muted-foreground)' }}>{responseTime}</span>
            </div>
          )}
        </div>

        {/* Body with Scrollbars */}
        <ScrollArea className="flex-1 h-full p-4">
          {response ? (
            <Textarea
              value={response}
              readOnly
              className="font-mono text-sm w-full min-h-[400px] resize-none rounded-md p-3" style={{ backgroundColor: 'var(--color-background)' }}
            />
          ) : (
            <div className="flex items-center justify-center min-h-[400px] text-sm border rounded-md" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-muted-foreground)' }}>
              Click <span className="mx-1 font-medium">Send</span> to view the response
            </div>
          )}
          <ScrollBar orientation="vertical" />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  )
}