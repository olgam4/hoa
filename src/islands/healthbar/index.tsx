import Statbar from "@components/statbar";

import { HealthContext } from "@context/health";
import type { Component } from "solid-js"

const Healtbar: Component = () => {
  return (
    <Statbar 
      context={HealthContext}
      color="#228B22"
      label="HP"
    />
  )
}

export {
  Healtbar as default,
}
