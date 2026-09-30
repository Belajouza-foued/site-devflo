"use client";

import { useEffect } from "react";

// Bootstrap.bundle manipule le DOM directement (pas compatible SSR),
// on le charge donc uniquement après le montage, côté client.
export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
}
