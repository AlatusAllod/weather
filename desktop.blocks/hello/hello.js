// подключение зависимости от i-bem-dom, input и button
modules.define('hello', ['i-bem-dom', 'input', 'button'],
	// функция, в которую передаются имена используемых модулей
	function (provide, bemDom, Input, Button) {

		// декларация блока hello
		provide(bemDom.declBlock('hello', {
			onSetMod: {
				js: {
					inited: function () {
						this._input = this.findChildBlock(Input);
					}
				}
			},
			_onSubmit: function (e) {
				e.preventDefault();
				this._elem('greeting').domElem.text('Hello ' + this._input.getVal() + '!');
			}
		}, {
				lazyInit: true,
				onInit: function () {
					this._domEvents().on('submit', this.prototype._onSubmit);
				}
			}));
	});
