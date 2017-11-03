// Compiled by ClojureScript 1.9.456 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12093){
var map__12118 = p__12093;
var map__12118__$1 = ((((!((map__12118 == null)))?((((map__12118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12118):map__12118);
var m = map__12118__$1;
var n = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12120_12142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12121_12143 = null;
var count__12122_12144 = (0);
var i__12123_12145 = (0);
while(true){
if((i__12123_12145 < count__12122_12144)){
var f_12146 = cljs.core._nth.call(null,chunk__12121_12143,i__12123_12145);
cljs.core.println.call(null,"  ",f_12146);

var G__12147 = seq__12120_12142;
var G__12148 = chunk__12121_12143;
var G__12149 = count__12122_12144;
var G__12150 = (i__12123_12145 + (1));
seq__12120_12142 = G__12147;
chunk__12121_12143 = G__12148;
count__12122_12144 = G__12149;
i__12123_12145 = G__12150;
continue;
} else {
var temp__4657__auto___12151 = cljs.core.seq.call(null,seq__12120_12142);
if(temp__4657__auto___12151){
var seq__12120_12152__$1 = temp__4657__auto___12151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12120_12152__$1)){
var c__10659__auto___12153 = cljs.core.chunk_first.call(null,seq__12120_12152__$1);
var G__12154 = cljs.core.chunk_rest.call(null,seq__12120_12152__$1);
var G__12155 = c__10659__auto___12153;
var G__12156 = cljs.core.count.call(null,c__10659__auto___12153);
var G__12157 = (0);
seq__12120_12142 = G__12154;
chunk__12121_12143 = G__12155;
count__12122_12144 = G__12156;
i__12123_12145 = G__12157;
continue;
} else {
var f_12158 = cljs.core.first.call(null,seq__12120_12152__$1);
cljs.core.println.call(null,"  ",f_12158);

var G__12159 = cljs.core.next.call(null,seq__12120_12152__$1);
var G__12160 = null;
var G__12161 = (0);
var G__12162 = (0);
seq__12120_12142 = G__12159;
chunk__12121_12143 = G__12160;
count__12122_12144 = G__12161;
i__12123_12145 = G__12162;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12163 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9840__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9840__auto__)){
return or__9840__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12163);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12163)))?cljs.core.second.call(null,arglists_12163):arglists_12163));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12124_12164 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12125_12165 = null;
var count__12126_12166 = (0);
var i__12127_12167 = (0);
while(true){
if((i__12127_12167 < count__12126_12166)){
var vec__12128_12168 = cljs.core._nth.call(null,chunk__12125_12165,i__12127_12167);
var name_12169 = cljs.core.nth.call(null,vec__12128_12168,(0),null);
var map__12131_12170 = cljs.core.nth.call(null,vec__12128_12168,(1),null);
var map__12131_12171__$1 = ((((!((map__12131_12170 == null)))?((((map__12131_12170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12131_12170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12131_12170):map__12131_12170);
var doc_12172 = cljs.core.get.call(null,map__12131_12171__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12173 = cljs.core.get.call(null,map__12131_12171__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12169);

cljs.core.println.call(null," ",arglists_12173);

if(cljs.core.truth_(doc_12172)){
cljs.core.println.call(null," ",doc_12172);
} else {
}

var G__12174 = seq__12124_12164;
var G__12175 = chunk__12125_12165;
var G__12176 = count__12126_12166;
var G__12177 = (i__12127_12167 + (1));
seq__12124_12164 = G__12174;
chunk__12125_12165 = G__12175;
count__12126_12166 = G__12176;
i__12127_12167 = G__12177;
continue;
} else {
var temp__4657__auto___12178 = cljs.core.seq.call(null,seq__12124_12164);
if(temp__4657__auto___12178){
var seq__12124_12179__$1 = temp__4657__auto___12178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12124_12179__$1)){
var c__10659__auto___12180 = cljs.core.chunk_first.call(null,seq__12124_12179__$1);
var G__12181 = cljs.core.chunk_rest.call(null,seq__12124_12179__$1);
var G__12182 = c__10659__auto___12180;
var G__12183 = cljs.core.count.call(null,c__10659__auto___12180);
var G__12184 = (0);
seq__12124_12164 = G__12181;
chunk__12125_12165 = G__12182;
count__12126_12166 = G__12183;
i__12127_12167 = G__12184;
continue;
} else {
var vec__12133_12185 = cljs.core.first.call(null,seq__12124_12179__$1);
var name_12186 = cljs.core.nth.call(null,vec__12133_12185,(0),null);
var map__12136_12187 = cljs.core.nth.call(null,vec__12133_12185,(1),null);
var map__12136_12188__$1 = ((((!((map__12136_12187 == null)))?((((map__12136_12187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12136_12187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12136_12187):map__12136_12187);
var doc_12189 = cljs.core.get.call(null,map__12136_12188__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12190 = cljs.core.get.call(null,map__12136_12188__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12186);

cljs.core.println.call(null," ",arglists_12190);

if(cljs.core.truth_(doc_12189)){
cljs.core.println.call(null," ",doc_12189);
} else {
}

var G__12191 = cljs.core.next.call(null,seq__12124_12179__$1);
var G__12192 = null;
var G__12193 = (0);
var G__12194 = (0);
seq__12124_12164 = G__12191;
chunk__12125_12165 = G__12192;
count__12126_12166 = G__12193;
i__12127_12167 = G__12194;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__12138 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12139 = null;
var count__12140 = (0);
var i__12141 = (0);
while(true){
if((i__12141 < count__12140)){
var role = cljs.core._nth.call(null,chunk__12139,i__12141);
var temp__4657__auto___12195__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12195__$1)){
var spec_12196 = temp__4657__auto___12195__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12196));
} else {
}

var G__12197 = seq__12138;
var G__12198 = chunk__12139;
var G__12199 = count__12140;
var G__12200 = (i__12141 + (1));
seq__12138 = G__12197;
chunk__12139 = G__12198;
count__12140 = G__12199;
i__12141 = G__12200;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12138);
if(temp__4657__auto____$1){
var seq__12138__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12138__$1)){
var c__10659__auto__ = cljs.core.chunk_first.call(null,seq__12138__$1);
var G__12201 = cljs.core.chunk_rest.call(null,seq__12138__$1);
var G__12202 = c__10659__auto__;
var G__12203 = cljs.core.count.call(null,c__10659__auto__);
var G__12204 = (0);
seq__12138 = G__12201;
chunk__12139 = G__12202;
count__12140 = G__12203;
i__12141 = G__12204;
continue;
} else {
var role = cljs.core.first.call(null,seq__12138__$1);
var temp__4657__auto___12205__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12205__$2)){
var spec_12206 = temp__4657__auto___12205__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_12206));
} else {
}

var G__12207 = cljs.core.next.call(null,seq__12138__$1);
var G__12208 = null;
var G__12209 = (0);
var G__12210 = (0);
seq__12138 = G__12207;
chunk__12139 = G__12208;
count__12140 = G__12209;
i__12141 = G__12210;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map