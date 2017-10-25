(set-env!
  :source-paths    #{"src"}
  :resource-paths  #{"static"}
  :dependencies '[[adzerk/boot-cljs   "1.7.228-2" :scope "test"]
                  [adzerk/boot-reload "0.5.1" :scope "test"]
                  [pandeiro/boot-http "0.7.3" :scope "test"]
                  [org.clojure/clojurescript "1.9.456"]])

(require
  '[adzerk.boot-cljs :refer [cljs]]
  '[adzerk.boot-reload :refer [reload]]
  '[pandeiro.boot-http :refer [serve]])
  

(task-options!
  reload {:on-jsload 'minesweeper.app/main})

(deftask dev []
  (comp (serve) (watch) (reload) (cljs)))