// This file was added by edgio init.
// You should commit this file to source control.

import { Router } from "@edgio/core/router";

export default new Router()
  // Create serveStatic route for each file in the folder public with a cache-control header of 's-maxage=315360000'
  .static("public");
