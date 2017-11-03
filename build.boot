(set-env!
  :source-paths    #{"src"}
  :resource-paths  #{"static"}
  :dependencies '[[org.clojure/clojure "1.8.0" :scope "test"]
                  [adzerk/boot-cljs   "1.7.228-2" :scope "test"]
                  [adzerk/boot-reload "0.5.1" :scope "test"]
                  [pandeiro/boot-http "0.7.6" :scope "test"]
                  [org.clojure/clojurescript "1.9.456"]
                  [adzerk/boot-cljs-repl "0.3.3" :scope "test"]
                  [com.cemerick/piggieback "0.2.1" :scope "test"]
                  [weasel "0.7.0" :scope "test"]
                  [org.clojure/tools.nrepl "0.2.12" :scope "test"]
                  [hiccups "0.3.0"]
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