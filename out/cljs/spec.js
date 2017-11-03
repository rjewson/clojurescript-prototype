// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec,x);
} else {
var m__10509__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec,y);
} else {
var m__10509__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec,path,via,in$,x);
} else {
var m__10509__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__10509__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec,gfn);
} else {
var m__10509__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__10508__auto__ = (((spec == null))?null:spec);
var m__10509__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,spec);
} else {
var m__10509__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_.call(null,spec)){
var G__12213 = cljs.core.get.call(null,reg,spec);
spec = G__12213;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = cljs.core.get.call(null,reg,k);
if(!(cljs.core.ident_QMARK_.call(null,spec))){
return spec;
} else {
return cljs.spec.deep_resolve.call(null,reg,spec);
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__9840__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__9828__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__9828__auto__)){
return x;
} else {
return and__9828__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_.call(null,spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec))){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__9840__auto__ = (function (){var and__9828__auto__ = cljs.core.ident_QMARK_.call(null,spec_or_k);
if(and__9828__auto__){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__9828__auto__;
}
})();
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var or__9840__auto____$1 = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
var or__9840__auto____$2 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__9840__auto____$2)){
return or__9840__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__9840__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
if(cljs.core.ident_QMARK_.call(null,spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args12220 = [];
var len__10953__auto___12223 = arguments.length;
var i__10954__auto___12224 = (0);
while(true){
if((i__10954__auto___12224 < len__10953__auto___12223)){
args12220.push((arguments[i__10954__auto___12224]));

var G__12225 = (i__10954__auto___12224 + (1));
i__10954__auto___12224 = G__12225;
continue;
} else {
}
break;
}

var G__12222 = args12220.length;
switch (G__12222) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12220.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__10508__auto__ = (((_ == null))?null:_);
var m__10509__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,_);
} else {
var m__10509__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__10508__auto__ = (((_ == null))?null:_);
var m__10509__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__10508__auto__)]);
if(!((m__10509__auto__ == null))){
return m__10509__auto__.call(null,_,form);
} else {
var m__10509__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__10509__auto____$1 == null))){
return m__10509__auto____$1.call(null,_,form);
} else {
throw cljs.core.missing_protocol.call(null,"Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.call(null,cljs.spec.reg_resolve_BANG_.call(null,s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__12227 = null;
var G__12227__1 = (function (o){
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),o,null,null);
});
var G__12227__2 = (function (o,form){
return cljs.spec.spec_impl.call(null,form,o,null,null);
});
G__12227 = function(o,form){
switch(arguments.length){
case 1:
return G__12227__1.call(this,o);
case 2:
return G__12227__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__12227.cljs$core$IFn$_invoke$arity$1 = G__12227__1;
G__12227.cljs$core$IFn$_invoke$arity$2 = G__12227__2;
return G__12227;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args12228 = [];
var len__10953__auto___12231 = arguments.length;
var i__10954__auto___12232 = (0);
while(true){
if((i__10954__auto___12232 < len__10953__auto___12231)){
args12228.push((arguments[i__10954__auto___12232]));

var G__12233 = (i__10954__auto___12232 + (1));
i__10954__auto___12232 = G__12233;
continue;
} else {
}
break;
}

var G__12230 = args12228.length;
switch (G__12230) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12228.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__9840__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__9840__auto__ = cljs.spec.spec_QMARK_.call(null,s);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.specize_STAR_.call(null,s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__9828__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__9828__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__9828__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__9828__auto__ = (form instanceof cljs.core.Symbol);
if(and__9828__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__9828__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__10834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12275_12315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12276_12316 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12275_12315,_STAR_print_fn_STAR_12276_12316,sb__10834__auto__){
return (function (x__10835__auto__){
return sb__10834__auto__.append(x__10835__auto__);
});})(_STAR_print_newline_STAR_12275_12315,_STAR_print_fn_STAR_12276_12316,sb__10834__auto__))
;

try{var seq__12277_12317 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__12278_12318 = null;
var count__12279_12319 = (0);
var i__12280_12320 = (0);
while(true){
if((i__12280_12320 < count__12279_12319)){
var map__12281_12321 = cljs.core._nth.call(null,chunk__12278_12318,i__12280_12320);
var map__12281_12322__$1 = ((((!((map__12281_12321 == null)))?((((map__12281_12321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12281_12321.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12281_12321):map__12281_12321);
var prob_12323 = map__12281_12322__$1;
var path_12324 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12325 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12326 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12327 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12328 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12329 = cljs.core.get.call(null,map__12281_12322__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_12329)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_12329),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_12326);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_12328)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12328)));
}

if(cljs.core.empty_QMARK_.call(null,path_12324)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_12324));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_12325));

if(cljs.core.truth_(reason_12327)){
cljs.core.print.call(null,", ",reason_12327);
} else {
}

var seq__12283_12330 = cljs.core.seq.call(null,prob_12323);
var chunk__12284_12331 = null;
var count__12285_12332 = (0);
var i__12286_12333 = (0);
while(true){
if((i__12286_12333 < count__12285_12332)){
var vec__12287_12334 = cljs.core._nth.call(null,chunk__12284_12331,i__12286_12333);
var k_12335 = cljs.core.nth.call(null,vec__12287_12334,(0),null);
var v_12336 = cljs.core.nth.call(null,vec__12287_12334,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12335))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12335)," ");

cljs.core.pr.call(null,v_12336);
}

var G__12337 = seq__12283_12330;
var G__12338 = chunk__12284_12331;
var G__12339 = count__12285_12332;
var G__12340 = (i__12286_12333 + (1));
seq__12283_12330 = G__12337;
chunk__12284_12331 = G__12338;
count__12285_12332 = G__12339;
i__12286_12333 = G__12340;
continue;
} else {
var temp__4657__auto___12341 = cljs.core.seq.call(null,seq__12283_12330);
if(temp__4657__auto___12341){
var seq__12283_12342__$1 = temp__4657__auto___12341;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12283_12342__$1)){
var c__10659__auto___12343 = cljs.core.chunk_first.call(null,seq__12283_12342__$1);
var G__12344 = cljs.core.chunk_rest.call(null,seq__12283_12342__$1);
var G__12345 = c__10659__auto___12343;
var G__12346 = cljs.core.count.call(null,c__10659__auto___12343);
var G__12347 = (0);
seq__12283_12330 = G__12344;
chunk__12284_12331 = G__12345;
count__12285_12332 = G__12346;
i__12286_12333 = G__12347;
continue;
} else {
var vec__12290_12348 = cljs.core.first.call(null,seq__12283_12342__$1);
var k_12349 = cljs.core.nth.call(null,vec__12290_12348,(0),null);
var v_12350 = cljs.core.nth.call(null,vec__12290_12348,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12349))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12349)," ");

cljs.core.pr.call(null,v_12350);
}

var G__12351 = cljs.core.next.call(null,seq__12283_12342__$1);
var G__12352 = null;
var G__12353 = (0);
var G__12354 = (0);
seq__12283_12330 = G__12351;
chunk__12284_12331 = G__12352;
count__12285_12332 = G__12353;
i__12286_12333 = G__12354;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__12355 = seq__12277_12317;
var G__12356 = chunk__12278_12318;
var G__12357 = count__12279_12319;
var G__12358 = (i__12280_12320 + (1));
seq__12277_12317 = G__12355;
chunk__12278_12318 = G__12356;
count__12279_12319 = G__12357;
i__12280_12320 = G__12358;
continue;
} else {
var temp__4657__auto___12359 = cljs.core.seq.call(null,seq__12277_12317);
if(temp__4657__auto___12359){
var seq__12277_12360__$1 = temp__4657__auto___12359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12277_12360__$1)){
var c__10659__auto___12361 = cljs.core.chunk_first.call(null,seq__12277_12360__$1);
var G__12362 = cljs.core.chunk_rest.call(null,seq__12277_12360__$1);
var G__12363 = c__10659__auto___12361;
var G__12364 = cljs.core.count.call(null,c__10659__auto___12361);
var G__12365 = (0);
seq__12277_12317 = G__12362;
chunk__12278_12318 = G__12363;
count__12279_12319 = G__12364;
i__12280_12320 = G__12365;
continue;
} else {
var map__12293_12366 = cljs.core.first.call(null,seq__12277_12360__$1);
var map__12293_12367__$1 = ((((!((map__12293_12366 == null)))?((((map__12293_12366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12293_12366.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293_12366):map__12293_12366);
var prob_12368 = map__12293_12367__$1;
var path_12369 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_12370 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_12371 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_12372 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_12373 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_12374 = cljs.core.get.call(null,map__12293_12367__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_12374)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_12374),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_12371);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_12373)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_12373)));
}

if(cljs.core.empty_QMARK_.call(null,path_12369)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_12369));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_12370));

if(cljs.core.truth_(reason_12372)){
cljs.core.print.call(null,", ",reason_12372);
} else {
}

var seq__12295_12375 = cljs.core.seq.call(null,prob_12368);
var chunk__12296_12376 = null;
var count__12297_12377 = (0);
var i__12298_12378 = (0);
while(true){
if((i__12298_12378 < count__12297_12377)){
var vec__12299_12379 = cljs.core._nth.call(null,chunk__12296_12376,i__12298_12378);
var k_12380 = cljs.core.nth.call(null,vec__12299_12379,(0),null);
var v_12381 = cljs.core.nth.call(null,vec__12299_12379,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12380))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12380)," ");

cljs.core.pr.call(null,v_12381);
}

var G__12382 = seq__12295_12375;
var G__12383 = chunk__12296_12376;
var G__12384 = count__12297_12377;
var G__12385 = (i__12298_12378 + (1));
seq__12295_12375 = G__12382;
chunk__12296_12376 = G__12383;
count__12297_12377 = G__12384;
i__12298_12378 = G__12385;
continue;
} else {
var temp__4657__auto___12386__$1 = cljs.core.seq.call(null,seq__12295_12375);
if(temp__4657__auto___12386__$1){
var seq__12295_12387__$1 = temp__4657__auto___12386__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12295_12387__$1)){
var c__10659__auto___12388 = cljs.core.chunk_first.call(null,seq__12295_12387__$1);
var G__12389 = cljs.core.chunk_rest.call(null,seq__12295_12387__$1);
var G__12390 = c__10659__auto___12388;
var G__12391 = cljs.core.count.call(null,c__10659__auto___12388);
var G__12392 = (0);
seq__12295_12375 = G__12389;
chunk__12296_12376 = G__12390;
count__12297_12377 = G__12391;
i__12298_12378 = G__12392;
continue;
} else {
var vec__12302_12393 = cljs.core.first.call(null,seq__12295_12387__$1);
var k_12394 = cljs.core.nth.call(null,vec__12302_12393,(0),null);
var v_12395 = cljs.core.nth.call(null,vec__12302_12393,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_12394))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_12394)," ");

cljs.core.pr.call(null,v_12395);
}

var G__12396 = cljs.core.next.call(null,seq__12295_12387__$1);
var G__12397 = null;
var G__12398 = (0);
var G__12399 = (0);
seq__12295_12375 = G__12396;
chunk__12296_12376 = G__12397;
count__12297_12377 = G__12398;
i__12298_12378 = G__12399;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__12400 = cljs.core.next.call(null,seq__12277_12360__$1);
var G__12401 = null;
var G__12402 = (0);
var G__12403 = (0);
seq__12277_12317 = G__12400;
chunk__12278_12318 = G__12401;
count__12279_12319 = G__12402;
i__12280_12320 = G__12403;
continue;
}
} else {
}
}
break;
}

var seq__12305_12404 = cljs.core.seq.call(null,ed);
var chunk__12306_12405 = null;
var count__12307_12406 = (0);
var i__12308_12407 = (0);
while(true){
if((i__12308_12407 < count__12307_12406)){
var vec__12309_12408 = cljs.core._nth.call(null,chunk__12306_12405,i__12308_12407);
var k_12409 = cljs.core.nth.call(null,vec__12309_12408,(0),null);
var v_12410 = cljs.core.nth.call(null,vec__12309_12408,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_12409))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_12409)," ");

cljs.core.pr.call(null,v_12410);

cljs.core.newline.call(null);
}

var G__12411 = seq__12305_12404;
var G__12412 = chunk__12306_12405;
var G__12413 = count__12307_12406;
var G__12414 = (i__12308_12407 + (1));
seq__12305_12404 = G__12411;
chunk__12306_12405 = G__12412;
count__12307_12406 = G__12413;
i__12308_12407 = G__12414;
continue;
} else {
var temp__4657__auto___12415 = cljs.core.seq.call(null,seq__12305_12404);
if(temp__4657__auto___12415){
var seq__12305_12416__$1 = temp__4657__auto___12415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12305_12416__$1)){
var c__10659__auto___12417 = cljs.core.chunk_first.call(null,seq__12305_12416__$1);
var G__12418 = cljs.core.chunk_rest.call(null,seq__12305_12416__$1);
var G__12419 = c__10659__auto___12417;
var G__12420 = cljs.core.count.call(null,c__10659__auto___12417);
var G__12421 = (0);
seq__12305_12404 = G__12418;
chunk__12306_12405 = G__12419;
count__12307_12406 = G__12420;
i__12308_12407 = G__12421;
continue;
} else {
var vec__12312_12422 = cljs.core.first.call(null,seq__12305_12416__$1);
var k_12423 = cljs.core.nth.call(null,vec__12312_12422,(0),null);
var v_12424 = cljs.core.nth.call(null,vec__12312_12422,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_12423))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_12423)," ");

cljs.core.pr.call(null,v_12424);

cljs.core.newline.call(null);
}

var G__12425 = cljs.core.next.call(null,seq__12305_12416__$1);
var G__12426 = null;
var G__12427 = (0);
var G__12428 = (0);
seq__12305_12404 = G__12425;
chunk__12306_12405 = G__12426;
count__12307_12406 = G__12427;
i__12308_12407 = G__12428;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12276_12316;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12275_12315;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10834__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return cljs.spec._STAR_explain_out_STAR_.call(null,ed);
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__10834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12431_12433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12432_12434 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12431_12433,_STAR_print_fn_STAR_12432_12434,sb__10834__auto__){
return (function (x__10835__auto__){
return sb__10834__auto__.append(x__10835__auto__);
});})(_STAR_print_newline_STAR_12431_12433,_STAR_print_fn_STAR_12432_12434,sb__10834__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12432_12434;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12431_12433;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10834__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__9840__auto__ = (function (){var temp__4657__auto__ = (function (){var or__9840__auto__ = cljs.core.get.call(null,overrides,(function (){var or__9840__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__12435_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__12435_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args12436 = [];
var len__10953__auto___12439 = arguments.length;
var i__10954__auto___12440 = (0);
while(true){
if((i__10954__auto___12440 < len__10953__auto___12439)){
args12436.push((arguments[i__10954__auto___12440]));

var G__12441 = (i__10954__auto___12440 + (1));
i__10954__auto___12440 = G__12441;
continue;
} else {
}
break;
}

var G__12438 = args12436.length;
switch (G__12438) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12436.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__9828__auto__ = cljs.core.ident_QMARK_.call(null,k);
if(and__9828__auto__){
return cljs.core.namespace.call(null,k);
} else {
return and__9828__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__9840__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var or__9840__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name.call(null,spec__$1,k));

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform.call(null,arg_spec,args)))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym.call(null,v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12445_12447 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12446_12448 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12445_12447,_STAR_print_fn_STAR_12446_12448,sb__10834__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__10835__auto__){
return sb__10834__auto__.append(x__10835__auto__);
});})(_STAR_print_newline_STAR_12445_12447,_STAR_print_fn_STAR_12446_12448,sb__10834__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12446_12448;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12445_12447;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10834__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__9840__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args12449 = [];
var len__10953__auto___12452 = arguments.length;
var i__10954__auto___12453 = (0);
while(true){
if((i__10954__auto___12453 < len__10953__auto___12452)){
args12449.push((arguments[i__10954__auto___12453]));

var G__12454 = (i__10954__auto___12453 + (1));
i__10954__auto___12453 = G__12454;
continue;
} else {
}
break;
}

var G__12451 = args12449.length;
switch (G__12451) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12449.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,form)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args12456 = [];
var len__10953__auto___12459 = arguments.length;
var i__10954__auto___12460 = (0);
while(true){
if((i__10954__auto___12460 < len__10953__auto___12459)){
args12456.push((arguments[i__10954__auto___12460]));

var G__12461 = (i__10954__auto___12460 + (1));
i__10954__auto___12460 = G__12461;
continue;
} else {
}
break;
}

var G__12458 = args12456.length;
switch (G__12458) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12456.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.call(null,spec);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.call(null,spec,form);
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.conform_STAR_.call(null,spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args12463 = [];
var len__10953__auto___12466 = arguments.length;
var i__10954__auto___12467 = (0);
while(true){
if((i__10954__auto___12467 < len__10953__auto___12466)){
args12463.push((arguments[i__10954__auto___12467]));

var G__12468 = (i__10954__auto___12467 + (1));
i__10954__auto___12467 = G__12468;
continue;
} else {
}
break;
}

var G__12465 = args12463.length;
switch (G__12465) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12463.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582))));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__12473){
var map__12513 = p__12473;
var map__12513__$1 = ((((!((map__12513 == null)))?((((map__12513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12513.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12513):map__12513);
var argm = map__12513__$1;
var opt = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var keys_pred = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739));
var opt_keys = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__12513__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12470_SHARP_){
var or__9840__auto__ = k__GT_s.call(null,p1__12470_SHARP_);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return p1__12470_SHARP_;
}
});})(k__GT_s,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec12515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12515 = (function (keys__GT_specnames,opt,map__12513,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__12473,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta12516){
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.map__12513 = map__12513;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.p__12473 = p__12473;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta12516 = meta12516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12517,meta12516__$1){
var self__ = this;
var _12517__$1 = this;
return (new cljs.spec.t_cljs$spec12515(self__.keys__GT_specnames,self__.opt,self__.map__12513,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.p__12473,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta12516__$1));
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_12517){
var self__ = this;
var _12517__$1 = this;
return self__.meta12516;
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__12524 = m;
var vec__12525 = G__12524;
var seq__12526 = cljs.core.seq.call(null,vec__12525);
var first__12527 = cljs.core.first.call(null,seq__12526);
var seq__12526__$1 = cljs.core.next.call(null,seq__12526);
var vec__12528 = first__12527;
var k = cljs.core.nth.call(null,vec__12528,(0),null);
var v = cljs.core.nth.call(null,vec__12528,(1),null);
var ks = seq__12526__$1;
var keys = vec__12525;
var ret__$1 = ret;
var G__12524__$1 = G__12524;
while(true){
var ret__$2 = ret__$1;
var vec__12531 = G__12524__$1;
var seq__12532 = cljs.core.seq.call(null,vec__12531);
var first__12533 = cljs.core.first.call(null,seq__12532);
var seq__12532__$1 = cljs.core.next.call(null,seq__12532);
var vec__12534 = first__12533;
var k__$1 = cljs.core.nth.call(null,vec__12534,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__12534,(1),null);
var ks__$1 = seq__12532__$1;
var keys__$1 = vec__12531;
if(cljs.core.truth_(keys__$1)){
var sname = self__.keys__GT_specnames.call(null,k__$1);
var temp__4655__auto__ = cljs.core.get.call(null,reg,sname);
if(cljs.core.truth_(temp__4655__auto__)){
var s = temp__4655__auto__;
var cv = cljs.spec.conform.call(null,s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12552 = (((cv === v__$1))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__12553 = ks__$1;
ret__$1 = G__12552;
G__12524__$1 = G__12553;
continue;
}
} else {
var G__12554 = ret__$2;
var G__12555 = ks__$1;
ret__$1 = G__12554;
G__12524__$1 = G__12555;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__12540 = cljs.core.keys.call(null,m);
var vec__12541 = G__12540;
var seq__12542 = cljs.core.seq.call(null,vec__12541);
var first__12543 = cljs.core.first.call(null,seq__12542);
var seq__12542__$1 = cljs.core.next.call(null,seq__12542);
var k = first__12543;
var ks = seq__12542__$1;
var keys = vec__12541;
var ret__$1 = ret;
var G__12540__$1 = G__12540;
while(true){
var ret__$2 = ret__$1;
var vec__12544 = G__12540__$1;
var seq__12545 = cljs.core.seq.call(null,vec__12544);
var first__12546 = cljs.core.first.call(null,seq__12545);
var seq__12545__$1 = cljs.core.next.call(null,seq__12545);
var k__$1 = first__12546;
var ks__$1 = seq__12545__$1;
var keys__$1 = vec__12544;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specnames.call(null,k__$1),cv);
var G__12556 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__12557 = ks__$1;
ret__$1 = G__12556;
G__12540__$1 = G__12557;
continue;
} else {
var G__12558 = ret__$2;
var G__12559 = ks__$1;
ret__$1 = G__12558;
G__12540__$1 = G__12559;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12471_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__12471_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__12547){
var vec__12548 = p__12547;
var k = cljs.core.nth.call(null,vec__12548,(0),null);
var v = cljs.core.nth.call(null,vec__12548,(1),null);
if(cljs.core.truth_((function (){var or__9840__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specnames.call(null,k)));
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.spec.pvalid_QMARK_.call(null,self__.keys__GT_specnames.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specnames.call(null,k),self__.keys__GT_specnames.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__12472_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__12472_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__12551 = cljs.core.PersistentVector.EMPTY;
var G__12551__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__12551,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__12551);
var G__12551__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__12551__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__12551__$1);
var G__12551__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__12551__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__12551__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__12551__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__12551__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys->specnames","keys->specnames",1791294693,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"map__12513","map__12513",-1584095546,null),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"p__12473","p__12473",2015367250,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta12516","meta12516",1256931743,null)], null);
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec12515.cljs$lang$type = true;

cljs.spec.t_cljs$spec12515.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12515";

cljs.spec.t_cljs$spec12515.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12515");
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec12515 = ((function (k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec12515(keys__GT_specnames__$1,opt__$1,map__12513__$2,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__12473__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12516){
return (new cljs.spec.t_cljs$spec12515(keys__GT_specnames__$1,opt__$1,map__12513__$2,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__12473__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta12516));
});})(k__GT_s,keys__GT_specnames,id,map__12513,map__12513__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec12515(keys__GT_specnames,opt,map__12513__$1,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__12473,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args12560 = [];
var len__10953__auto___12568 = arguments.length;
var i__10954__auto___12569 = (0);
while(true){
if((i__10954__auto___12569 < len__10953__auto___12568)){
args12560.push((arguments[i__10954__auto___12569]));

var G__12570 = (i__10954__auto___12569 + (1));
i__10954__auto___12569 = G__12570;
continue;
} else {
}
break;
}

var G__12562 = args12560.length;
switch (G__12562) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12560.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__12563 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__12563,gfn);
} else {
return G__12563;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.ident_QMARK_.call(null,pred)){
var G__12564 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__12564,gfn);
} else {
return G__12564;
}
} else {
if(typeof cljs.spec.t_cljs$spec12565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12565 = (function (form,pred,gfn,cpred_QMARK_,unc,meta12566){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta12566 = meta12566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12567,meta12566__$1){
var self__ = this;
var _12567__$1 = this;
return (new cljs.spec.t_cljs$spec12565(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta12566__$1));
});

cljs.spec.t_cljs$spec12565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12567){
var self__ = this;
var _12567__$1 = this;
return self__.meta12566;
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = self__.pred.call(null,x);
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec12565.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec12565.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta12566","meta12566",1040976311,null)], null);
});

cljs.spec.t_cljs$spec12565.cljs$lang$type = true;

cljs.spec.t_cljs$spec12565.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12565";

cljs.spec.t_cljs$spec12565.cljs$lang$ctorPrWriter = (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12565");
});

cljs.spec.__GT_t_cljs$spec12565 = (function cljs$spec$__GT_t_cljs$spec12565(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12566){
return (new cljs.spec.t_cljs$spec12565(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta12566));
});

}

return (new cljs.spec.t_cljs$spec12565(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args12577 = [];
var len__10953__auto___12591 = arguments.length;
var i__10954__auto___12592 = (0);
while(true){
if((i__10954__auto___12592 < len__10953__auto___12591)){
args12577.push((arguments[i__10954__auto___12592]));

var G__12593 = (i__10954__auto___12592 + (1));
i__10954__auto___12592 = G__12593;
continue;
} else {
}
break;
}

var G__12579 = args12577.length;
switch (G__12579) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12577.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__12572_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__9828__auto__ = cljs.core._get_method.call(null,mm,cljs.core._dispatch_fn.call(null,mm).call(null,p1__12572_SHARP_));
if(cljs.core.truth_(and__9828__auto__)){
return mm.call(null,p1__12572_SHARP_);
} else {
return and__9828__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__12573_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__12573_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__12574_SHARP_,p2__12575_SHARP_){
return cljs.core.assoc.call(null,p1__12574_SHARP_,retag,p2__12575_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec12580 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12580 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta12581){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta12581 = meta12581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_12582,meta12581__$1){
var self__ = this;
var _12582__$1 = this;
return (new cljs.spec.t_cljs$spec12580(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta12581__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_12582){
var self__ = this;
var _12582__$1 = this;
return self__.meta12581;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__12583){
var vec__12584 = p__12583;
var k = cljs.core.nth.call(null,vec__12584,(0),null);
var f = cljs.core.nth.call(null,vec__12584,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__12584,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__12584,k,f,___$1,id,predx,dval,tag){
return (function (p1__12576_SHARP_){
return self__.tag.call(null,p1__12576_SHARP_,k);
});})(rmap__$1,p,vec__12584,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__10682__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__10682__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto____$1);
})(),x__10682__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__12584,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__12587){
var vec__12588 = p__12587;
var k = cljs.core.nth.call(null,vec__12588,(0),null);
return cljs.spec.invalid_QMARK_.call(null,k);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__10682__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = self__.retag;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta12581","meta12581",107656655,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec12580.cljs$lang$type = true;

cljs.spec.t_cljs$spec12580.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12580";

cljs.spec.t_cljs$spec12580.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12580");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec12580 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec12580(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12581){
return (new cljs.spec.t_cljs$spec12580(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta12581));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec12580(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args12595 = [];
var len__10953__auto___12601 = arguments.length;
var i__10954__auto___12602 = (0);
while(true){
if((i__10954__auto___12602 < len__10953__auto___12601)){
args12595.push((arguments[i__10954__auto___12602]));

var G__12603 = (i__10954__auto___12602 + (1));
i__10954__auto___12602 = G__12603;
continue;
} else {
}
break;
}

var G__12597 = args12595.length;
switch (G__12597) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12595.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count.call(null,preds);
if(typeof cljs.spec.t_cljs$spec12598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12598 = (function (forms,preds,gfn,specs,cnt,meta12599){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta12599 = meta12599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_12600,meta12599__$1){
var self__ = this;
var _12600__$1 = this;
return (new cljs.spec.t_cljs$spec12598(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta12599__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_12600){
var self__ = this;
var _12600__$1 = this;
return self__.meta12599;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = cljs.core.deref.call(null,self__.specs);
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),self__.cnt)))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,self__.cnt)){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12605 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__12606 = (i + (1));
ret = G__12605;
i = G__12606;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__12607 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__12608 = (i + (1));
ret = G__12607;
i = G__12608;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10682__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"meta12599","meta12599",-1386150188,null)], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec12598.cljs$lang$type = true;

cljs.spec.t_cljs$spec12598.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12598";

cljs.spec.t_cljs$spec12598.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12598");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec12598 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec12598(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12599){
return (new cljs.spec.t_cljs$spec12598(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta12599));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec12598(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x12610 = v;
x12610.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x12610.cljs$core$IMapEntry$_key$arity$1 = ((function (x12610){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x12610))
;

x12610.cljs$core$IMapEntry$_val$arity$1 = ((function (x12610){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x12610))
;

return x12610;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__12619 = cljs.core.count.call(null,preds);
switch (G__12619) {
case (2):
return ((function (G__12619,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__12619,id,kps,specs))

break;
case (3):
return ((function (G__12619,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$2))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(2)),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(1)),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,(0)),ret], null));
}
});
;})(G__12619,id,kps,specs))

break;
default:
return ((function (G__12619,id,kps,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var spec = specs__$1.call(null,i);
var ret = cljs.spec.conform_STAR_.call(null,spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
var G__12628 = (i + (1));
i = G__12628;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});
;})(G__12619,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec12620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12620 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta12621){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta12621 = meta12621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_12622,meta12621__$1){
var self__ = this;
var _12622__$1 = this;
return (new cljs.spec.t_cljs$spec12620(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta12621__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_12622){
var self__ = this;
var _12622__$1 = this;
return self__.meta12621;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__12623){
var self__ = this;
var vec__12624 = p__12623;
var k = cljs.core.nth.call(null,vec__12624,(0),null);
var x = cljs.core.nth.call(null,vec__12624,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12621","meta12621",1621311316,null)], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec12620.cljs$lang$type = true;

cljs.spec.t_cljs$spec12620.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12620";

cljs.spec.t_cljs$spec12620.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12620");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec12620 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec12620(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12621){
return (new cljs.spec.t_cljs$spec12620(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta12621));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec12620(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__12655 = preds;
var vec__12657 = G__12655;
var seq__12658 = cljs.core.seq.call(null,vec__12657);
var first__12659 = cljs.core.first.call(null,seq__12658);
var seq__12658__$1 = cljs.core.next.call(null,seq__12658);
var pred = first__12659;
var preds__$1 = seq__12658__$1;
var G__12656 = forms;
var vec__12660 = G__12656;
var seq__12661 = cljs.core.seq.call(null,vec__12660);
var first__12662 = cljs.core.first.call(null,seq__12661);
var seq__12661__$1 = cljs.core.next.call(null,seq__12661);
var form = first__12662;
var forms__$1 = seq__12661__$1;
var ret__$1 = ret;
var G__12655__$1 = G__12655;
var G__12656__$1 = G__12656;
while(true){
var ret__$2 = ret__$1;
var vec__12663 = G__12655__$1;
var seq__12664 = cljs.core.seq.call(null,vec__12663);
var first__12665 = cljs.core.first.call(null,seq__12664);
var seq__12664__$1 = cljs.core.next.call(null,seq__12664);
var pred__$1 = first__12665;
var preds__$2 = seq__12664__$1;
var vec__12666 = G__12656__$1;
var seq__12667 = cljs.core.seq.call(null,vec__12666);
var first__12668 = cljs.core.first.call(null,seq__12667);
var seq__12667__$1 = cljs.core.next.call(null,seq__12667);
var form__$1 = first__12668;
var forms__$2 = seq__12667__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12669 = nret;
var G__12670 = preds__$2;
var G__12671 = forms__$2;
ret__$1 = G__12669;
G__12655__$1 = G__12670;
G__12656__$1 = G__12671;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__12698 = forms;
var vec__12700 = G__12698;
var seq__12701 = cljs.core.seq.call(null,vec__12700);
var first__12702 = cljs.core.first.call(null,seq__12701);
var seq__12701__$1 = cljs.core.next.call(null,seq__12701);
var form = first__12702;
var forms__$1 = seq__12701__$1;
var G__12699 = preds;
var vec__12703 = G__12699;
var seq__12704 = cljs.core.seq.call(null,vec__12703);
var first__12705 = cljs.core.first.call(null,seq__12704);
var seq__12704__$1 = cljs.core.next.call(null,seq__12704);
var pred = first__12705;
var preds__$1 = seq__12704__$1;
var ret__$1 = ret;
var G__12698__$1 = G__12698;
var G__12699__$1 = G__12699;
while(true){
var ret__$2 = ret__$1;
var vec__12706 = G__12698__$1;
var seq__12707 = cljs.core.seq.call(null,vec__12706);
var first__12708 = cljs.core.first.call(null,seq__12707);
var seq__12707__$1 = cljs.core.next.call(null,seq__12707);
var form__$1 = first__12708;
var forms__$2 = seq__12707__$1;
var vec__12709 = G__12699__$1;
var seq__12710 = cljs.core.seq.call(null,vec__12709);
var first__12711 = cljs.core.first.call(null,seq__12710);
var seq__12710__$1 = cljs.core.next.call(null,seq__12710);
var pred__$1 = first__12711;
var preds__$2 = seq__12710__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,nret))){
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__12712 = nret;
var G__12713 = forms__$2;
var G__12714 = preds__$2;
ret__$1 = G__12712;
G__12698__$1 = G__12713;
G__12699__$1 = G__12714;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.call(null,cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__12721 = cljs.core.count.call(null,preds);
switch (G__12721) {
case (2):
return ((function (G__12721,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
}
});
;})(G__12721,specs))

break;
case (3):
return ((function (G__12721,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(0)),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret__$1 = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(1)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.spec.conform_STAR_.call(null,specs__$1.call(null,(2)),ret__$1);
}
}
});
;})(G__12721,specs))

break;
default:
return ((function (G__12721,specs){
return (function (x){
var specs__$1 = cljs.core.deref.call(null,specs);
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count.call(null,specs__$1))){
var nret = cljs.spec.conform_STAR_.call(null,specs__$1.call(null,i),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12726 = nret;
var G__12727 = (i + (1));
ret = G__12726;
i = G__12727;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__12721,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec12722 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12722 = (function (forms,preds,gfn,specs,cform,meta12723){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta12723 = meta12723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_12724,meta12723__$1){
var self__ = this;
var _12724__$1 = this;
return (new cljs.spec.t_cljs$spec12722(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta12723__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_12724){
var self__ = this;
var _12724__$1 = this;
return self__.meta12723;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,specs,cform){
return (function (p1__12716_SHARP_,p2__12715_SHARP_){
return cljs.spec.unform.call(null,p2__12715_SHARP_,p1__12716_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse.call(null,self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta12723","meta12723",1052878187,null)], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec12722.cljs$lang$type = true;

cljs.spec.t_cljs$spec12722.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12722";

cljs.spec.t_cljs$spec12722.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12722");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec12722 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec12722(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12723){
return (new cljs.spec.t_cljs$spec12722(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta12723));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec12722(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__9840__auto__ = kfn;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__9840__auto__ = kform;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.pvalid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__9828__auto__ = count;
if(cljs.core.truth_(and__9828__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__9828__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10682__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9828__auto__ = (function (){var or__9840__auto__ = min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__9828__auto__)){
return !((((function (){var or__9840__auto__ = min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__9840__auto__ = max_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__9828__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__10682__auto__ = (function (){var or__9840__auto__ = min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = (function (){var or__9840__auto__ = max_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__9828__auto__ = distinct;
if(cljs.core.truth_(and__9828__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__9828__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec12739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12739 = (function (forms,preds,gfn,meta12740){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta12740 = meta12740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12741,meta12740__$1){
var self__ = this;
var _12741__$1 = this;
return (new cljs.spec.t_cljs$spec12739(self__.forms,self__.preds,self__.gfn,meta12740__$1));
});

cljs.spec.t_cljs$spec12739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12741){
var self__ = this;
var _12741__$1 = this;
return self__.meta12740;
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__12728_SHARP_,p2__12729_SHARP_){
return cljs.spec.dt.call(null,p1__12728_SHARP_,x,p2__12729_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.spec.invalid_QMARK_,ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__12730_SHARP_){
return cljs.spec.unform.call(null,p1__12730_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__12731_SHARP_,p2__12732_SHARP_){
return cljs.spec.explain_1.call(null,p1__12731_SHARP_,p2__12732_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__12733_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__12733_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__12734_SHARP_,p2__12735_SHARP_){
return cljs.spec.gensub.call(null,p1__12734_SHARP_,overrides,path,rmap,p2__12735_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec12739.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec12739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta12740","meta12740",1048228168,null)], null);
});

cljs.spec.t_cljs$spec12739.cljs$lang$type = true;

cljs.spec.t_cljs$spec12739.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12739";

cljs.spec.t_cljs$spec12739.cljs$lang$ctorPrWriter = (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12739");
});

cljs.spec.__GT_t_cljs$spec12739 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec12739(forms__$1,preds__$1,gfn__$1,meta12740){
return (new cljs.spec.t_cljs$spec12739(forms__$1,preds__$1,gfn__$1,meta12740));
});

}

return (new cljs.spec.t_cljs$spec12739(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args12746 = [];
var len__10953__auto___12781 = arguments.length;
var i__10954__auto___12782 = (0);
while(true){
if((i__10954__auto___12782 < len__10953__auto___12781)){
args12746.push((arguments[i__10954__auto___12782]));

var G__12783 = (i__10954__auto___12782 + (1));
i__10954__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var G__12748 = args12746.length;
switch (G__12748) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12746.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__12749,gfn){
var map__12750 = p__12749;
var map__12750__$1 = ((((!((map__12750 == null)))?((((map__12750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12750.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12750):map__12750);
var opts = map__12750__$1;
var max_count = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var cpred = cljs.core.get.call(null,map__12750__$1,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",1439199454));
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.call(null,pred);
});})(conform_into,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12742_SHARP_){
return cljs.spec.valid_QMARK_.call(null,cljs.core.deref.call(null,spec),p1__12742_SHARP_);
});})(conform_into,spec,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__9840__auto__ = kfn;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return ((function (or__9840__auto__,conform_into,spec,check_QMARK_,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__9840__auto__,conform_into,spec,check_QMARK_,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var vec__12752 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__12752,(0),null);
var kindform = cljs.core.nth.call(null,vec__12752,(1),null);
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__9828__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__9828__auto__){
var or__9840__auto__ = (function (){var and__9828__auto____$1 = kind;
if(cljs.core.truth_(and__9828__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__9828__auto____$1;
}
})();
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__9828__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_.call(null,conform_into)) || (cljs.core.seq_QMARK_.call(null,conform_into)) || ((cljs.core.not.call(null,conform_into)) && ((cljs.core.list_QMARK_.call(null,x)) || (cljs.core.seq_QMARK_.call(null,x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12743_SHARP_){
return cljs.core.empty.call(null,(function (){var or__9840__auto__ = conform_into;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return p1__12743_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec12755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec12755 = (function (form,max_count,check_QMARK_,map__12750,gfn,gen_max,pred,cpred,vec__12752,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn,gen_into,count,min_count,opts,kind,p__12749,conform_all,conform_into,meta12756){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.map__12750 = map__12750;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.vec__12752 = vec__12752;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.spec = spec;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.p__12749 = p__12749;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta12756 = meta12756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec12755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12757,meta12756__$1){
var self__ = this;
var _12757__$1 = this;
return (new cljs.spec.t_cljs$spec12755(self__.form,self__.max_count,self__.check_QMARK_,self__.map__12750,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.vec__12752,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.spec,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.p__12749,self__.conform_all,self__.conform_into,meta12756__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_12757){
var self__ = this;
var _12757__$1 = this;
return self__.meta12756;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = cljs.core.deref.call(null,self__.spec);
if(cljs.core.not.call(null,self__.cpred.call(null,x))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__12758 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__12758,(0),null);
var add = cljs.core.nth.call(null,vec__12758,(1),null);
var complete = cljs.core.nth.call(null,vec__12758,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__12764 = cljs.core.seq.call(null,x);
var vec__12765 = G__12764;
var seq__12766 = cljs.core.seq.call(null,vec__12765);
var first__12767 = cljs.core.first.call(null,seq__12766);
var seq__12766__$1 = cljs.core.next.call(null,seq__12766);
var v = first__12767;
var vs = seq__12766__$1;
var vseq = vec__12765;
var ret__$1 = ret;
var i__$1 = i;
var G__12764__$1 = G__12764;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__12768 = G__12764__$1;
var seq__12769 = cljs.core.seq.call(null,vec__12768);
var first__12770 = cljs.core.first.call(null,seq__12769);
var seq__12769__$1 = cljs.core.next.call(null,seq__12769);
var v__$1 = first__12770;
var vs__$1 = seq__12769__$1;
var vseq__$1 = vec__12768;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_.call(null,spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cv))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__12785 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__12786 = (i__$2 + (1));
var G__12787 = vs__$1;
ret__$1 = G__12785;
i__$1 = G__12786;
G__12764__$1 = G__12787;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__10176__auto__ = (1);
var y__10177__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__10176__auto__ > y__10177__auto__) ? x__10176__auto__ : y__10177__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,cljs.core.nth.call(null,x,i)))){
var G__12788 = (i + step);
i = G__12788;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__12774 = cljs.core.seq.call(null,x);
var vec__12775 = G__12774;
var seq__12776 = cljs.core.seq.call(null,vec__12775);
var first__12777 = cljs.core.first.call(null,seq__12776);
var seq__12776__$1 = cljs.core.next.call(null,seq__12776);
var v = first__12777;
var vs = seq__12776__$1;
var vseq = vec__12775;
var i__$1 = i;
var G__12774__$1 = G__12774;
while(true){
var i__$2 = i__$1;
var vec__12778 = G__12774__$1;
var seq__12779 = cljs.core.seq.call(null,vec__12778);
var first__12780 = cljs.core.first.call(null,seq__12779);
var seq__12779__$1 = cljs.core.next.call(null,seq__12779);
var v__$1 = first__12780;
var vs__$1 = seq__12779__$1;
var vseq__$1 = vec__12778;
if(((vseq__$1 == null)) || (cljs.core._EQ_.call(null,i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec__$1,v__$1))){
var G__12789 = (i__$2 + (1));
var G__12790 = vs__$1;
i__$1 = G__12789;
G__12774__$1 = G__12790;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__9840__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__9840__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__9840__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.call(null),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12744_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__12744_SHARP_)){
return p1__12744_SHARP_;
} else {
return cljs.core.empty.call(null,p1__12744_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__12745_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__12745_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__12745_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__9840__auto__ = self__.min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__9840__auto__ = self__.max_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var x__10176__auto__ = self__.gen_max;
var y__10177__auto__ = ((2) * (function (){var or__9840__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
return (0);
}
})());
return ((x__10176__auto__ > y__10177__auto__) ? x__10176__auto__ : y__10177__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__9840__auto__ = self__.min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__9840__auto__ = self__.min_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (0);
}
})(),(function (){var or__9840__auto__ = self__.max_count;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var x__10176__auto__ = self__.gen_max;
var y__10177__auto__ = ((2) * (function (){var or__9840__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
return (0);
}
})());
return ((x__10176__auto__ > y__10177__auto__) ? x__10176__auto__ : y__10177__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__10682__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"map__12750","map__12750",-1896562455,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"cpred","cpred",-540353554,null),new cljs.core.Symbol(null,"vec__12752","vec__12752",-1894505456,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"p__12749","p__12749",616395165,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta12756","meta12756",-629072276,null)], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec12755.cljs$lang$type = true;

cljs.spec.t_cljs$spec12755.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec12755";

cljs.spec.t_cljs$spec12755.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec12755");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec12755 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec12755(form__$1,max_count__$1,check_QMARK___$1,map__12750__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,vec__12752__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,p__12749__$1,conform_all__$1,conform_into__$1,meta12756){
return (new cljs.spec.t_cljs$spec12755(form__$1,max_count__$1,check_QMARK___$1,map__12750__$2,gfn__$1,gen_max__$1,pred__$1,cpred__$1,vec__12752__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,spec__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,p__12749__$1,conform_all__$1,conform_into__$1,meta12756));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,vec__12752,kindfn,kindform,cfns,map__12750,map__12750__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec12755(form,max_count,check_QMARK_,map__12750__$1,gfn,gen_max,pred,cpred,vec__12752,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,spec,kfn__$1,gen_into,count,min_count,opts,kind,p__12749,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__12791){
var map__12794 = p__12791;
var map__12794__$1 = ((((!((map__12794 == null)))?((((map__12794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12794):map__12794);
var op = cljs.core.get.call(null,map__12794__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__12796){
var map__12808 = p__12796;
var map__12808__$1 = ((((!((map__12808 == null)))?((((map__12808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12808.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12808):map__12808);
var vec__12809 = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12810 = cljs.core.seq.call(null,vec__12809);
var first__12811 = cljs.core.first.call(null,seq__12810);
var seq__12810__$1 = cljs.core.next.call(null,seq__12810);
var p1 = first__12811;
var pr = seq__12810__$1;
var ps = vec__12809;
var vec__12812 = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12813 = cljs.core.seq.call(null,vec__12812);
var first__12814 = cljs.core.first.call(null,seq__12813);
var seq__12813__$1 = cljs.core.next.call(null,seq__12813);
var k1 = first__12814;
var kr = seq__12813__$1;
var ks = vec__12812;
var vec__12815 = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__12816 = cljs.core.seq.call(null,vec__12815);
var first__12817 = cljs.core.first.call(null,seq__12816);
var seq__12816__$1 = cljs.core.next.call(null,seq__12816);
var f1 = first__12817;
var fr = seq__12816__$1;
var forms = vec__12815;
var ret = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__12808__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__10960__auto__ = [];
var len__10953__auto___12820 = arguments.length;
var i__10954__auto___12821 = (0);
while(true){
if((i__10954__auto___12821 < len__10953__auto___12820)){
args__10960__auto__.push((arguments[i__10954__auto___12821]));

var G__12822 = (i__10954__auto___12821 + (1));
i__10954__auto___12821 = G__12822;
continue;
} else {
}
break;
}

var argseq__10961__auto__ = ((((0) < args__10960__auto__.length))?(new cljs.core.IndexedSeq(args__10960__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__10961__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq12819){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12819));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10682__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),(function (){var x__10682__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__10682__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__9840__auto__ = ks;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__12823_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__12823_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__9840__auto__ = cljs.core.seq.call(null,ks);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9840__auto__ = cljs.core.seq.call(null,forms);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__12824_SHARP_){
return cljs.core.nth.call(null,p1__12824_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__12834 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__12837 = cljs.core.nth.call(null,vec__12834,(0),null);
var seq__12838 = cljs.core.seq.call(null,vec__12837);
var first__12839 = cljs.core.first.call(null,seq__12838);
var seq__12838__$1 = cljs.core.next.call(null,seq__12838);
var p1 = first__12839;
var pr = seq__12838__$1;
var ps__$1 = vec__12837;
var vec__12840 = cljs.core.nth.call(null,vec__12834,(1),null);
var k1 = cljs.core.nth.call(null,vec__12840,(0),null);
var ks__$1 = vec__12840;
var forms__$1 = cljs.core.nth.call(null,vec__12834,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__10960__auto__ = [];
var len__10953__auto___12844 = arguments.length;
var i__10954__auto___12845 = (0);
while(true){
if((i__10954__auto___12845 < len__10953__auto___12844)){
args__10960__auto__.push((arguments[i__10954__auto___12845]));

var G__12846 = (i__10954__auto___12845 + (1));
i__10954__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var argseq__10961__auto__ = ((((0) < args__10960__auto__.length))?(new cljs.core.IndexedSeq(args__10960__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__10961__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq12843){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12843));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__9828__auto__ = p1;
if(cljs.core.truth_(and__9828__auto__)){
return p2;
} else {
return and__9828__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__9840__auto__ = p1;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__9840__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__9840__auto__){
return or__9840__auto__;
} else {
var or__9840__auto____$1 = (function (){var and__9828__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__9828__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__9828__auto__;
}
})();
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__12850 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12850__$1 = ((((!((map__12850 == null)))?((((map__12850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12850):map__12850);
var p__$1 = map__12850__$1;
var op = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12852 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12852)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__12852)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12852)){
var and__9828__auto__ = cljs.spec.accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__9828__auto__)){
var or__9840__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,ret));
}
} else {
return and__9828__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12852)){
var or__9840__auto__ = (p1 === p2);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.spec.accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12852)){
return cljs.core.every_QMARK_.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12852)){
return cljs.core.some.call(null,cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__12871 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12871__$1 = ((((!((map__12871 == null)))?((((map__12871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12871):map__12871);
var p__$1 = map__12871__$1;
var vec__12872 = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12873 = cljs.core.seq.call(null,vec__12872);
var first__12874 = cljs.core.first.call(null,seq__12873);
var seq__12873__$1 = cljs.core.next.call(null,seq__12873);
var p0 = first__12874;
var pr = seq__12873__$1;
var ps = vec__12872;
var vec__12875 = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12875,(0),null);
var ks = vec__12875;
var op = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12871__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__12879 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12879)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__12879)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12879)){
var pret = cljs.spec.preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12879)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12879)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12879)){
var vec__12880 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__12883 = cljs.core.nth.call(null,vec__12880,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__12883,(0),null);
var vec__12886 = cljs.core.nth.call(null,vec__12880,(1),null);
var k0 = cljs.core.nth.call(null,vec__12886,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs.spec.preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__12905 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12905__$1 = ((((!((map__12905 == null)))?((((map__12905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12905.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12905):map__12905);
var p__$1 = map__12905__$1;
var vec__12906 = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12907 = cljs.core.seq.call(null,vec__12906);
var first__12908 = cljs.core.first.call(null,seq__12907);
var seq__12907__$1 = cljs.core.next.call(null,seq__12907);
var p0 = first__12908;
var pr = seq__12907__$1;
var ps = vec__12906;
var vec__12909 = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__12909,(0),null);
var ks = vec__12909;
var op = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12905__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__12913 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12913)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__12913)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12913)){
var px = cljs.core.reduce.call(null,((function (G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12890_SHARP_,p2__12889_SHARP_){
return cljs.spec.unform.call(null,p2__12889_SHARP_,p1__12890_SHARP_);
});})(G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs.spec.op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12913)){
return cljs.core.mapcat.call(null,((function (G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12891_SHARP_){
return cljs.spec.op_unform.call(null,p1,p1__12891_SHARP_);
});})(G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12913)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__12892_SHARP_){
return cljs.spec.op_unform.call(null,p0,p1__12892_SHARP_);
});})(G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__12913,map__12905,map__12905__$1,p__$1,vec__12906,seq__12907,first__12908,seq__12907__$1,p0,pr,ps,vec__12909,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12913)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__12914 = x;
var k__$1 = cljs.core.nth.call(null,vec__12914,(0),null);
var v = cljs.core.nth.call(null,vec__12914,(1),null);
return cljs.spec.op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__12920 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12920__$1 = ((((!((map__12920 == null)))?((((map__12920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12920):map__12920);
var p__$1 = map__12920__$1;
var op = cljs.core.get.call(null,map__12920__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12920__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__12920__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__12920,map__12920__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__12920,map__12920__$1,p__$1,op,ps,splice))
;
var G__12922 = op;
if(cljs.core._EQ_.call(null,null,G__12922)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12922)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12922)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12922)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12922)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12922)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__12933 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12933__$1 = ((((!((map__12933 == null)))?((((map__12933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12933):map__12933);
var p__$1 = map__12933__$1;
var vec__12934 = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__12935 = cljs.core.seq.call(null,vec__12934);
var first__12936 = cljs.core.first.call(null,seq__12935);
var seq__12935__$1 = cljs.core.next.call(null,seq__12935);
var p0 = first__12936;
var pr = seq__12935__$1;
var ps = vec__12934;
var vec__12937 = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__12938 = cljs.core.seq.call(null,vec__12937);
var first__12939 = cljs.core.first.call(null,seq__12938);
var seq__12938__$1 = cljs.core.next.call(null,seq__12938);
var k0 = first__12939;
var kr = seq__12938__$1;
var ks = vec__12937;
var op = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__12933__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__12941 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12941)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12941)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12941)){
var temp__4657__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret__$1))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12941)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs.spec.deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs.spec.deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12941)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__12941,map__12933,map__12933__$1,p__$1,vec__12934,seq__12935,first__12936,seq__12935__$1,p0,pr,ps,vec__12937,seq__12938,first__12939,seq__12938__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__12923_SHARP_){
return cljs.spec.deriv.call(null,p1__12923_SHARP_,x);
});})(G__12941,map__12933,map__12933__$1,p__$1,vec__12934,seq__12935,first__12936,seq__12935__$1,p0,pr,ps,vec__12937,seq__12938,first__12939,seq__12938__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12941)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs.spec.deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs.spec.deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__12945 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12945__$1 = ((((!((map__12945 == null)))?((((map__12945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12945):map__12945);
var p__$1 = map__12945__$1;
var op = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__12945__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__12947 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12947)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12947)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12947)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs.spec.op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12947)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__10682__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__9840__auto__ = cljs.core.seq.call(null,ks);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12947)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__10682__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12947)){
var x__10682__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__10682__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto____$1);
})(),x__10682__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__12961 = input;
var x = cljs.core.nth.call(null,vec__12961,(0),null);
var input__$1 = vec__12961;
var map__12964 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12964__$1 = ((((!((map__12964 == null)))?((((map__12964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12964):map__12964);
var p__$1 = map__12964__$1;
var op = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__12964__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__12966 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12966)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__12966)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12966)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12966)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__9840__auto__ = cljs.core.seq.call(null,ks);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9840__auto__ = cljs.core.seq.call(null,forms);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__12967 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__12966,vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__12970){
var vec__12971 = p__12970;
var p__$2 = cljs.core.nth.call(null,vec__12971,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__12966,vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__12967,(0),null);
var k = cljs.core.nth.call(null,vec__12967,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__12967,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__9840__auto__ = form__$1;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12966)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__12966,vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs.spec.op_explain.call(null,(function (){var or__9840__auto__ = form__$1;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__12966,vec__12961,x,input__$1,map__12964,map__12964__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__9840__auto__ = cljs.core.seq.call(null,ks);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9840__auto__ = cljs.core.seq.call(null,forms);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12966)){
return cljs.spec.op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__12980 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__12980__$1 = ((((!((map__12980 == null)))?((((map__12980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12980.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12980):map__12980);
var p__$1 = map__12980__$1;
var ps = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__12980__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__9828__auto__ = rmap__$1;
if(cljs.core.truth_(and__9828__auto__)){
var and__9828__auto____$1 = id;
if(cljs.core.truth_(and__9828__auto____$1)){
var and__9828__auto____$2 = k;
if(cljs.core.truth_(and__9828__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__9828__auto____$2;
}
} else {
return and__9828__auto____$1;
}
} else {
return and__9828__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__9840__auto__ = f__$1;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return p__$2;
}
})());
});})(map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs.spec.re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__9840__auto__ = f__$1;
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__9840__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__9840__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__9840__auto__){
return or__9840__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__9840__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__12983 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__12983)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__12983)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
var or__9840__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__9840__auto____$1)){
return or__9840__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__12984 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__12984)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__12984)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__12984)){
return cljs.spec.re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__12984)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__12984)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__12984)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__12984,or__9840__auto____$1,or__9840__auto__,map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__12974_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12974_SHARP_);
});})(g,temp__4657__auto__,G__12984,or__9840__auto____$1,or__9840__auto__,map__12980,map__12980__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__12985){
while(true){
var vec__12989 = p__12985;
var seq__12990 = cljs.core.seq.call(null,vec__12989);
var first__12991 = cljs.core.first.call(null,seq__12990);
var seq__12990__$1 = cljs.core.next.call(null,seq__12990);
var x = first__12991;
var xs = seq__12990__$1;
var data = vec__12989;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__12992 = dp;
var G__12993 = xs;
p = G__12992;
p__12985 = G__12993;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__13007 = input;
var vec__13008 = G__13007;
var seq__13009 = cljs.core.seq.call(null,vec__13008);
var first__13010 = cljs.core.first.call(null,seq__13009);
var seq__13009__$1 = cljs.core.next.call(null,seq__13009);
var x = first__13010;
var xs = seq__13009__$1;
var data = vec__13008;
var i = (0);
var p__$1 = p;
var G__13007__$1 = G__13007;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__13011 = G__13007__$1;
var seq__13012 = cljs.core.seq.call(null,vec__13011);
var first__13013 = cljs.core.first.call(null,seq__13012);
var seq__13012__$1 = cljs.core.next.call(null,seq__13012);
var x__$1 = first__13013;
var xs__$1 = seq__13012__$1;
var data__$1 = vec__13011;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__13014 = dp;
var G__13015 = xs__$1;
var G__13016 = (i__$2 + (1));
p__$1 = G__13014;
G__13007__$1 = G__13015;
i__$1 = G__13016;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__9840__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec13020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13020 = (function (re,gfn,meta13021){
this.re = re;
this.gfn = gfn;
this.meta13021 = meta13021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13022,meta13021__$1){
var self__ = this;
var _13022__$1 = this;
return (new cljs.spec.t_cljs$spec13020(self__.re,self__.gfn,meta13021__$1));
});

cljs.spec.t_cljs$spec13020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13022){
var self__ = this;
var _13022__$1 = this;
return self__.meta13021;
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec13020.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec13020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta13021","meta13021",1869860457,null)], null);
});

cljs.spec.t_cljs$spec13020.cljs$lang$type = true;

cljs.spec.t_cljs$spec13020.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13020";

cljs.spec.t_cljs$spec13020.cljs$lang$ctorPrWriter = (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec13020");
});

cljs.spec.__GT_t_cljs$spec13020 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec13020(re__$1,gfn__$1,meta13021){
return (new cljs.spec.t_cljs$spec13020(re__$1,gfn__$1,meta13021));
});

}

return (new cljs.spec.t_cljs$spec13020(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cargs))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__9828__auto__ = cljs.core.not.call(null,cljs.spec.invalid_QMARK_.call(null,cret));
if(and__9828__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__9828__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__13023_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__13023_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__13027 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__13027,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec13036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec13036 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta13037){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta13037 = meta13037;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_13038,meta13037__$1){
var self__ = this;
var _13038__$1 = this;
return (new cljs.spec.t_cljs$spec13036(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta13037__$1));
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_13038){
var self__ = this;
var _13038__$1 = this;
return self__.meta13037;
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e13039){if((e13039 instanceof Error)){
var t = e13039;
return t;
} else {
throw e13039;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,cret))){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__13042__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13040_13043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13041_13044 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13040_13043,_STAR_print_fn_STAR_13041_13044,sb__10834__auto__,___$3,specs){
return (function (x__10835__auto__){
return sb__10834__auto__.append(x__10835__auto__);
});})(_STAR_print_newline_STAR_13040_13043,_STAR_print_fn_STAR_13041_13044,sb__10834__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13041_13044;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13040_13043;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10834__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__13042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13045__i = 0, G__13045__a = new Array(arguments.length -  0);
while (G__13045__i < G__13045__a.length) {G__13045__a[G__13045__i] = arguments[G__13045__i + 0]; ++G__13045__i;}
  args = new cljs.core.IndexedSeq(G__13045__a,0);
} 
return G__13042__delegate.call(this,args);};
G__13042.cljs$lang$maxFixedArity = 0;
G__13042.cljs$lang$applyTo = (function (arglist__13046){
var args = cljs.core.seq(arglist__13046);
return G__13042__delegate(args);
});
G__13042.cljs$core$IFn$_invoke$arity$variadic = G__13042__delegate;
return G__13042;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec13036.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__10682__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__10682__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__10682__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec13036.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta13037","meta13037",993709324,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec13036.cljs$lang$type = true;

cljs.spec.t_cljs$spec13036.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13036";

cljs.spec.t_cljs$spec13036.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec13036");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec13036 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec13036(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13037){
return (new cljs.spec.t_cljs$spec13036(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta13037));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec13036(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13048#","p1__13048#",-522513008,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__13048#","p1__13048#",-522513008,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__13047#","p1__13047#",-1334712108,null)))),(function (p1__13047_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__13047_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__13047_SHARP_));
}),null,true,(function (p1__13048_SHARP_){
return cljs.core.map.call(null,(function (p__13049){
var vec__13050 = p__13049;
var k = cljs.core.nth.call(null,vec__13050,(0),null);
var v = cljs.core.nth.call(null,vec__13050,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__13048_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.call(null,spec);
if(typeof cljs.spec.t_cljs$spec13056 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13056 = (function (spec,meta13057){
this.spec = spec;
this.meta13057 = meta13057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_13058,meta13057__$1){
var self__ = this;
var _13058__$1 = this;
return (new cljs.spec.t_cljs$spec13056(self__.spec,meta13057__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_13058){
var self__ = this;
var _13058__$1 = this;
return self__.meta13057;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_.call(null,self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_.call(null,ret))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_.call(null,self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_.call(null,self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
return cljs.spec.nonconforming.call(null,cljs.spec.with_gen_STAR_.call(null,self__.spec,gfn));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nonconforming","cljs.spec/nonconforming",1245350756,null)),(function (){var x__10682__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13057","meta13057",1375207214,null)], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec13056.cljs$lang$type = true;

cljs.spec.t_cljs$spec13056.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13056";

cljs.spec.t_cljs$spec13056.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec13056");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec13056 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec13056(spec__$2,meta13057){
return (new cljs.spec.t_cljs$spec13056(spec__$2,meta13057));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec13056(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.call(null,pred,form);
if(typeof cljs.spec.t_cljs$spec13062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec13062 = (function (form,pred,gfn,spec,meta13063){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta13063 = meta13063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec13062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_13064,meta13063__$1){
var self__ = this;
var _13064__$1 = this;
return (new cljs.spec.t_cljs$spec13062(self__.form,self__.pred,self__.gfn,self__.spec,meta13063__$1));
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_13064){
var self__ = this;
var _13064__$1 = this;
return self__.meta13063;
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_.call(null,self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__9840__auto__ = cljs.spec.pvalid_QMARK_.call(null,self__.spec,x);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.call(null,cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.frequency.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.call(null,null);
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub.call(null,self__.pred,overrides,cljs.core.conj.call(null,path,new cljs.core.Keyword("cljs.spec","pred","cljs.spec/pred",1523333614)),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1);
});})(spec))
;

cljs.spec.t_cljs$spec13062.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","nilable","cljs.spec/nilable",-139722052,null)),(function (){var x__10682__auto__ = cljs.spec.describe_STAR_.call(null,self__.spec);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10682__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec13062.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"meta13063","meta13063",-730419895,null)], null);
});})(spec))
;

cljs.spec.t_cljs$spec13062.cljs$lang$type = true;

cljs.spec.t_cljs$spec13062.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec13062";

cljs.spec.t_cljs$spec13062.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__10451__auto__,writer__10452__auto__,opt__10453__auto__){
return cljs.core._write.call(null,writer__10452__auto__,"cljs.spec/t_cljs$spec13062");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec13062 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec13062(form__$1,pred__$1,gfn__$1,spec__$1,meta13063){
return (new cljs.spec.t_cljs$spec13062(form__$1,pred__$1,gfn__$1,spec__$1,meta13063));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec13062(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args13066 = [];
var len__10953__auto___13069 = arguments.length;
var i__10954__auto___13070 = (0);
while(true){
if((i__10954__auto___13070 < len__10953__auto___13069)){
args13066.push((arguments[i__10954__auto___13070]));

var G__13071 = (i__10954__auto___13070 + (1));
i__10954__auto___13070 = G__13071;
continue;
} else {
}
break;
}

var G__13068 = args13066.length;
switch (G__13068) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args13066.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__13065_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__13065_SHARP_,cljs.spec.conform.call(null,spec,p1__13065_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__9828__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__9828__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__9828__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__9828__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9828__auto__)){
return val.lessThan(end);
} else {
return and__9828__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__9828__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__9828__auto__)){
return val.lessThan(end);
} else {
return and__9828__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__10834__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13075_13077 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13076_13078 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13075_13077,_STAR_print_fn_STAR_13076_13078,sb__10834__auto__,ed){
return (function (x__10835__auto__){
return sb__10834__auto__.append(x__10835__auto__);
});})(_STAR_print_newline_STAR_13075_13077,_STAR_print_fn_STAR_13076_13078,sb__10834__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13076_13078;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13075_13077;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__10834__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map