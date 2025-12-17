const { CssSelector } = require("./src/objects-tasks");


const cssSelectorBuilder = {

  element(value) {
		return new cssSelector().element(value)
  },

  id(value) {
		return new cssSelector().id(value)
		},

  class(value) {
		return new cssSelector().class(value)
  },

  attr(value) {
		return new cssSelector().attr(value)
  },

  pseudoClass(value) {
		return new cssSelector().pseudoClass(value)
  },

  pseudoElement(value) {
		return new cssSelector().pseudoElement(value)
  },

  combine(selector1, combinator, selector2) {
		return new CombineSelector(selector1,combinator,selector2)		
  },
	stringify(){
	}

};
class CombineSelector{

	constructor(selector1, combinator, selector2){
		this.selector1 = selector1;
		this.selector2 = selector2;
		this.combinator = combinator;
	}

	stringify() {
    return `${this.selector1.stringify()} ${this.combinator} ${this.selector2.stringify()}`;
  }
}
class cssSelector {

	constructor(){
		this.element1 = null;
		this.id1 = null;
		this.class1 = [];
		this.attr1 = [];
		this.pseudoClass1 = [];
		this.pseudoElement1 = null;
		this.type = null;
		this.last = null;
	}

	element(value){
		this.type = "element";
		this.isAfter()

		if(this.element1 != null) throw new Error('So much element');
		this.element1 = value;
		this.last = "element"

		return this;
	}
	id(value){
		this.type = "id";
		this.isAfter()

		if(this.id1 != null) throw new Error('So much id');
		this.id1 = value;
		this.last = "id";

		return this;
	}
	class(value){
		this.type = "class";
		this.isAfter()

		this.class1.push(value);
		this.last = "class";
		
		return this;
	}
	attr(value){
		
		this.type = "attr";
		this.isAfter()

		this.attr1.push(value);
		this.last = "attr";

		return this;
	}
	pseudoClass(value){
		this.type = "pseudoClass";
		this.isAfter()

		this.pseudoClass1.push(value);
		this.type = "pseudoClass";
		this.last = "pseudoClass";

		return this;
	}
	pseudoElement(value){
		this.type = "pseudoElement";
		this.isAfter()

		if(this.pseudoElement1 != null) throw new Error('So much pseudoElement');
		this.pseudoElement1 = value;

		this.last = "pseudoElement";

		return this;
	}

	isAfter(){
		if(this.last === null) return false;

		let order = [ "element", "id", "class", "attr", "pseudoClass", "pseudoElement"]

		if(order.indexOf(this.last) > order.indexOf(this.type)) throw new Error(
			"Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element"
		)
		return 0;
	}

	stringify(){
		console.log(this.attr1)
		console.log(this.class1)
		let result = '';
		if(this.element1) result += this.element1;
		if(this.id1) result += `#${this.id1}`
		if(this.class1.length>0)result += `.${this.class1.join('.')}`
		if(this.attr1.length>0) this.attr1.map((el) => result += `[${el}]`)
		if(this.pseudoClass1.length) result += `:${this.pseudoClass1}`
		if(this.pseudoElement1) result += `::${this.pseudoElement1}` 
		return result;
	}
}



let builder = cssSelectorBuilder;
console.log(builder.element('table').element('div'))



