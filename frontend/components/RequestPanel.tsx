"use client"
import { useState } from "react"
import { Send, Plus, Trash2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function RequestPanel() {
  const [method, setMethod] = useState("GET")
  const [url, setUrl] = useState("https://api.example.com/users")
  const [headers, setHeaders] = useState([{ key: "Content-Type", value: "application/json" }])
  const [params, setParams] = useState([{ key: "", value: "" }])
  const [body, setBody] = useState('{\n  "name": "John Doe",\n  "email": "john@example.com"\n}')
  const [response, setResponse] = useState("")
  const [responseStatus, setResponseStatus] = useState("")
  const [responseTime, setResponseTime] = useState("")

  const addHeader = () => setHeaders([...headers, { key: "", value: "" }])
  const removeHeader = (i: number) => setHeaders(headers.filter((_, x) => x !== i))
  const updateHeader = (i: number, f: string, v: string) => {
    const newHeaders = [...headers]
    newHeaders[i][f] = v
    setHeaders(newHeaders)
  }

  const addParam = () => setParams([...params, { key: "", value: "" }])
  const removeParam = (i: number) => setParams(params.filter((_, x) => x !== i))
  const updateParam = (i: number, f: string, v: string) => {
    const newParams = [...params]
    newParams[i][f] = v
    setParams(newParams)
  }

  const sendRequest = () => {
    setResponseStatus("200 OK")
    setResponseTime("245ms")
    setResponse(
      '{\n  "id": 1,\n  "name": "John Doe",\n  "email": "john@example.com",\n  "createdAt": "2025-11-01T10:30:00Z"\n}'
    )
  }

  return (
    <div className="flex flex-col w-full h-full bg-white">
      {/* Request URL Bar */}
      <div className="border-b p-4 w-full bg-white">
        <div className="flex gap-2 w-full">
          <Select value={method} onValueChange={setMethod}>
            <SelectTrigger className="w-32">
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
      </div>

      {/* Request & Response Section */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Request Tabs */}
        <div className="flex-1 border-b overflow-auto w-full">
          <Tabs defaultValue="params" className="h-full flex flex-col w-full">
            <TabsList className="w-full justify-start rounded-none border-b bg-gray-50 px-4">
              <TabsTrigger value="params">Params</TabsTrigger>
              <TabsTrigger value="headers">Headers</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
            </TabsList>

            {/* Params */}
            <TabsContent value="params" className="flex-1 overflow-auto p-4">
              <div className="space-y-3">
                {params.map((param, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center bg-gray-50 p-2 rounded-md"
                  >
                    <Input
                      placeholder="Key"
                      value={param.key}
                      onChange={(e) => updateParam(index, "key", e.target.value)}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Value"
                      value={param.value}
                      onChange={(e) => updateParam(index, "value", e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeParam(index)}
                      className="hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addParam}
                  className="gap-2 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Param
                </Button>
              </div>
            </TabsContent>

            {/* Headers */}
            <TabsContent value="headers" className="flex-1 overflow-auto p-4">
              <div className="space-y-3">
                {headers.map((header, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center bg-gray-50 p-2 rounded-md"
                  >
                    <Input
                      placeholder="Key"
                      value={header.key}
                      onChange={(e) => updateHeader(index, "key", e.target.value)}
                      className="flex-1"
                    />
                    <Input
                      placeholder="Value"
                      value={header.value}
                      onChange={(e) => updateHeader(index, "value", e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeHeader(index)}
                      className="hover:bg-red-100"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={addHeader}
                  className="gap-2 mt-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Header
                </Button>
              </div>
            </TabsContent>

            {/* Body */}
            <TabsContent value="body" className="flex-1 overflow-auto p-4">
              <Textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Request body (JSON)"
                className="font-mono text-sm min-h-[200px] resize-none w-full"
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Response Section */}
        <div className="flex-1 overflow-auto bg-gray-50 w-full border-t">
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Response</h3>
              {responseStatus && (
                <div className="flex gap-4 text-sm">
                  <span className="text-green-600 font-medium">{responseStatus}</span>
                  <span className="text-gray-600">{responseTime}</span>
                </div>
              )}
            </div>

            {response ? (
              <Textarea
                value={response}
                readOnly
                className="font-mono text-sm flex-1 resize-none bg-white rounded-md p-3 w-full"
              />
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400 text-sm bg-white border rounded-md">
                Click <span className="mx-1 font-medium">Send</span> to view the response
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
