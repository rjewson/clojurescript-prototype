(ns minesweeper.app)

(defn set-container-html [msg]
  (let [ container (.getElementById js/document "app")]
   (set! (.-innerHTML container) msg)))

(defn main []
  (set-container-html "This works!!"))