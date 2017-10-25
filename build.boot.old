(set-env! :dependencies '[[pandect "0.5.4"]])
           
(require '[pandect.algo.sha1 :refer [sha1]])

(deftask sha-me "Sha me" [m message nil str "A custom message"]
  (fn [fileset]
     (println (sha1 message))
     fileset))

(deftask sha-me-sen "Sha everything" []
     (comp
     (sha-me :message "I love")
       (sha-me :message "all the parenthesis")))
        