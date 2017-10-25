#!/usr/bin/env boot

(set-env! :dependencies '[[http-kit "2.2.0"]])
(use 'org.httpkit.server)

(defn app [req]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (slurp "message.txt")})

(defn -main [& args]
  (run-server app {:port 8080})
  (while true (do (Thread/sleep 1000))))