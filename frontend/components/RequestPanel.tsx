"use client"
import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ParamSection } from "./ParamSection"
import { ResponseSection } from "./ResponseSection"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function RequestPanel() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("https://api.example.com/users")
  const [headers, setHeaders] = useState([{ key: "Content-Type", value: "application/json" }])
  const [params, setParams] = useState([{ key: "", value: "" }])
  const [body, setBody] = useState('{\n  "name": "John Doe",\n  "email": "john@example.com"\n}')
  const [response, setResponse] = useState("")
  const [responseStatus, setResponseStatus] = useState("")
  const [responseTime, setResponseTime] = useState("")

  const sendRequest = () => {
    setResponseStatus("200 OK")
    setResponseTime("245ms")
    setResponse(
      '{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "createdAt": "2025-11-01T10:30:00Z"\n}'
    )
  }

  return (
    <div className="flex flex-col w-full h-full" style={{ backgroundColor: 'var(--color-background)' }}>
      <ResizablePanelGroup direction="vertical" className="w-full h-full">
        {/* Top Panel: Request Section */}
        <ResizablePanel defaultSize={50} minSize={20}>
          <div className="flex flex-col w-full h-full" style={{ backgroundColor: 'var(--color-background)' }}>
            {/* URL Bar */}
            <div className="p-3 border-b flex items-center gap-2">
              <Select value={method} onValueChange={setMethod}>
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GET">GET</SelectItem>
                  <SelectItem value="POST">POST</SelectItem>
                  <SelectItem value="PUT">PUT</SelectItem>
                  <SelectItem value="PATCH">PATCH</SelectItem>
                  <SelectItem value="DELETE">DELETE</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter request URL"
                className="flex-1"
              />
              <Button onClick={sendRequest} className="gap-2">
                <Send className="w-4 h-4" />
                Send
              </Button>
            </div>

            {/* Params + Body Section with ScrollArea */}
            <ScrollArea className="flex-1 min-h-0 p-0">
              <ParamSection
                params={params}
                setParams={setParams}
                headers={headers}
                setHeaders={setHeaders}
                body={body}
                setBody={setBody}
              />
              <ScrollBar orientation="vertical" />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </ResizablePanel>

        {/* Resize Handle */}
        <ResizableHandle withHandle className="transition-colors" style={{ backgroundColor: 'var(--color-muted)', '--hover-bg': 'var(--color-muted-hover)' } as React.CSSProperties} />

        {/* Bottom Panel: Response Section with ScrollArea */}
        <ResizablePanel defaultSize={50} minSize={20}>
          <ScrollArea className="w-full h-full">
            <ResponseSection
              response={response}
              responseStatus={responseStatus}
              responseTime={responseTime}
            />
            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}