import { useState, useEffect, useCallback } from "react"
import axios from "axios"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<string>("")

  const getErrorMessage = useCallback((err: unknown) => {
    if (axios.isAxiosError(err)) {
      return err.response?.data?.message ?? err.message
    }
    if (err instanceof Error) {
      return err.message
    }
    return String(err)
  }, [])

  const fetchData = useCallback(
    async (targetUrl: string, signal?: AbortSignal) => {
      setIsLoading(true)
      setIsError("")
      try {
        const res = await axios.get<T>(targetUrl, { signal })
        setData(res.data)
      } catch (err) {
        if (axios.isAxiosError(err) && err.code === "ERR_CANCELED") {
          return
        }
        setIsError(getErrorMessage(err))
      } finally {
        setIsLoading(false)
      }
    },
    [getErrorMessage]
  )

  useEffect(() => {
    const controller = new AbortController()
    fetchData(url, controller.signal)
    return () => controller.abort()
  }, [fetchData, url])

  const reFetch = useCallback(async (newUrl: string) => {
    setIsLoading(true)
    setIsError("")
    try {
      const res = await axios.get<T>(newUrl)
      setData(res.data)
    } catch (err) {
      setIsError(getErrorMessage(err))
    } finally {
      setIsLoading(false)
    }
  }, [getErrorMessage])

  return { data, isLoading, isError, reFetch }
}
