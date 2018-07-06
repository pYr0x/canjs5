import {Component} from "can";
Component.extend({
  tag: "x-foo",
  view: `{{message}} World!`,
  ViewModel: {  message: {default: "Hello"} }
});