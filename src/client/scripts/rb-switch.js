/***********
 * RB-SWITCH
 ***********/
import { RbBase, props, html } from '../../base/scripts/base.js';
import template                from '../views/rb-switch.html';

export class RbSwitch extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.version = '0.0.0';
	}

	/* Properties
	 *************/
	static get props() {
		return {
			kind: props.string
		};
	}

	/* Template
	 ***********/
	render({ props, state }) { // :string
		return html template;
	}
}

customElements.define('rb-switch', RbSwitch);
