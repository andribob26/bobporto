import { useState } from 'react'

const Footer = () => {
  const [currentYear,] = useState(new Date().getFullYear())
  return (
    <div className="py-3 text-xs text-zinc-600"><p>&copy;{currentYear} - Built by Andri febrian using ReactJs</p></div>
  )
}

export default Footer