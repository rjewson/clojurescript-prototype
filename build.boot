(set-env!
  :source-paths    #{"src"}
  :resource-paths  #{"static"}
  :dependencies '[[org.clojure/clojure "1.8.0"]
                  [adzerk/boot-cljs   "1.7.228-2"]
                  [adzerk/boot-reload "0.5.1"]
                  [pandeiro/boot-http "0.7.6"]
                  [org.clojure/clojurescript "1.9.456"]
                  [org.clojure/tools.nrepl "0.2.12"]
                  [org.clojure/core.async "0.3.441"]                  
                  [adzerk/boot-cljs-repl "0.3.3"]
                  [com.cemerick/piggieback "0.2.1"]
                  [weasel "0.7.0"]
                  [reagent "0.7.0"]
])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
)

(task-options!
  reload {:on-jsload 'minesweeper.app/main})

(deftask dev []
  (comp (serve) (watch) (reload) (cljs-repl) (cljs)))