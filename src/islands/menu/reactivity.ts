export const createMenu = () => {
  const [open, setOpen] = createSignal(false)

  const toggle = () => {
    setOpen(!open())
  }

  return {
    open,
    toggle,
  }
}
