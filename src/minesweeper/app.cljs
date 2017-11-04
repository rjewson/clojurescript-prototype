(ns minesweeper.app
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop]])
  (:require 
    [reagent.core :as reagent]
    [cljs.core.async :refer [put! chan <! >! timeout close!]]))

(def state
  (reagent/atom 0))

(def add-channel (chan))

(defn add-one-basic []
  (swap! state inc))

(defn add-one []
  (go
    (swap! state inc)
    (>! add-channel @state )))

    ;#(reset! my-text "this is the story of my life ...")

(defn my-component [txt]
  [:div
    [:button {:on-click #(add-one-basic)} "Add one!!"]
    [:div @state]
    ])

(defn main[]
    (let [ container (.getElementById js/document "app")]
       (reagent/render-component
               [my-component "boo"] 
      container))
)