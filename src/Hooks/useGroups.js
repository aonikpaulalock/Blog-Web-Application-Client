import { useEffect, useState } from "react"

const useGroups = () => {
  const [groups, setGroups] = useState([])
  useEffect(() => {
    fetch("Group.json")
      .then(res => res.json())
      .then(data => setGroups(data))
  }, [])
  return [groups, setGroups]
}
export default useGroups;