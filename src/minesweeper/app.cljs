(ns minesweeper.app
  (:require-macros [hiccups.core :as hiccups :refer [html]])
  (:require [hiccups.runtime]))

(defn my-component [txt]
  (html
    [:div
      [:div txt]]))

(defn render-comp-to-container [container comp]
  (let [ container (.getElementById js/document container)]
   (set! (.-innerHTML container) comp)))

(defn main []
  (render-comp-to-container "app" (my-component "This is a test")))
