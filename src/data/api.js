import axios from "axios";

export async function apiCall(endpoint) {
  const response = await axios.get(endpoint)
  return response
}