$.namespace('webshop');

webshop.ShoppingCart = (function() {

	var items = [];

	return {
		addItem: function(product) {
			items.push(product);
		},

		getItemCount: function() {
			return items.lenth;
		},

		getTotalPrice: function() {
			var sum = 0;
			var i = this.getItemCount();

			while(i--) {
				sum += items[i].price;
			}

			return sum;
		}
	};
}());