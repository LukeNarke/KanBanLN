import formatTodosForAI from "./formatTodosForAI"

const fetchSuggestion = async (board: Board) => {
  try {
    const todos = formatTodosForAI(board)
    const res = await fetch("/api/generateSummary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todos }),
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    const GPTdata = await res.json()
    const { content } = GPTdata

    return content
  } catch (error) {
    console.error("Error:", error)
    // Handle or propagate the error as needed
  }
}

export default fetchSuggestion
