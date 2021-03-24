window.MaxGoods = {
    'KSP-001':20,
    'KSP-005':4,
    'KSP-010':2,
    'KSP-020':1,
    'KSC-001':20,
    'KSC-005':4,
    'KSC-010':2,
    'KSC-020':1
};


function tcart__product__updateQuantity(t, r, o, a) 
{
	if(a > window.MaxGoods[window.tcart.products[o].sku])
	{
		alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock"));
		a = window.MaxGoods[window.tcart.products[o].sku];
	}
	a > 0 ? (void 0 !== window.tcart.products[o].inv && window.tcart.products[o].inv > 0 && a > window.tcart.products[o].inv && (alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")), a = window.tcart.products[o].inv), window.tcart.products[o].quantity = a, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), r.find(".t706__product-quantity").html(window.tcart.products[o].quantity), "y" === window.tcart.products[o].single && void 0 !== window.tcart.products[o].portion && r.find(".t706__product-portion").html(tcart__showWeight(window.tcart.products[o].quantity * window.tcart.products[o].portion, window.tcart.products[o].unit)), window.tcart.products[o].amount > 0 ? r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)) : r.find(".t706__product-amount").html("")) : tcart__product__del(t), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj(), 0 == a && tcart__reDrawProducts()
}

function tcart__product__plus(t,a) {
    var r = t.closest(".t706__product"),
        o = r.attr("data-cart-product-i");
    if(window.tcart.products[o].quantity < window.MaxGoods[window.tcart.products[o].sku] || window.MaxGoods[window.tcart.products[o].sku] == undefined)
		(window.tcart.products[o] || (tcart__syncProductsObject__LStoObj(), null != window.tcart.products[o])) && (window.tcart.products[o].quantity > 0 && void 0 !== window.tcart.products[o].inv && window.tcart.products[o].inv > 0 && window.tcart.products[o].inv == window.tcart.products[o].quantity ? alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")) : (window.tcart.products[o].quantity++, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), r.find(".t706__product-quantity").html(window.tcart.products[o].quantity), "y" === window.tcart.products[o].single && void 0 !== window.tcart.products[o].portion && r.find(".t706__product-portion").html(tcart__showWeight(window.tcart.products[o].quantity * window.tcart.products[o].portion, window.tcart.products[o].unit)), window.tcart.products[o].amount > 0 ? r.find(".t706__product-amount").html(tcart__showPrice(window.tcart.products[o].amount)) : r.find(".t706__product-amount").html(""), tcart__updateTotalProductsinCartObj(), $(".t706__carticon-counter").html(window.tcart.total), tcart__reDrawTotal(), tcart__saveLocalObj()))
	else
		alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock"));
	
}

function tcart__addProduct(t) {
	
    var r = Math.floor(Date.now() / 1e3);
    tcart__syncProductsObject__LStoObj();
    var o = window.tcart.products,
        a = "";
    o.length > 0 && $.each(o, function(o, e) {
        var i = "y",
            c = "";
        if ("y" == window.tcart_oneproduct) {
            if (e.name == t.name && e.price == t.price) {
				
                if (null == e.options && null == t.options && null == e.sku && null == t.sku) return a = "yes", !1;
                if (null == e.options && null == t.options && null != e.sku && null != t.sku && e.sku == t.sku) return a = "yes", !1;
                if ("object" == typeof e.options && "object" == typeof t.options && ($.each(e.options, function(r, o) {
                        if ("object" == typeof o && "object" == typeof t.options[r]) {
                            if (o.option !== t.options[r].option || o.variant !== t.options[r].variant || o.price !== t.options[r].price) return i = !1
                        } else if (null == o || null == t.options[r]) return i = !1
                    }), e.sku === t.sku && (c = "y"), "y" === i && "y" === c)) return parseInt(window.tcart.products[o].quantity, 10) === parseInt(t.inv, 10) && alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")), a = "yes", !1
            }
        } else if (e.name == t.name && e.price == t.price && e.portion == t.portion && e.single == t.single && ("object" == typeof e.options && "object" == typeof t.options && $.each(e.options, function(r, o) {
				if ("object" == typeof o && "object" == typeof t.options[r]) {
                    if (o.option !== t.options[r].option || o.variant !== t.options[r].variant || o.price !== t.options[r].price) return i = !1
                } else if (void 0 === o || void 0 === t.options[r]) return i = !1
            }), e.sku === t.sku && (c = "y"), "y" === i && "y" === c)) {
            var n = parseInt(t.inv, 10),
                d = parseInt(t.quantity, 10),
                s = parseInt(window.tcart.products[o].quantity, 10);
			
			if(window.tcart.products[o].quantity >= window.MaxGoods[window.tcart.products[o].sku])
				window.tcart.products[o].quantity = window.MaxGoods[window.tcart.products[o].sku] - 1;
            return s === n ? (alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")), a = "yes", !1) : (void 0 !== t.quantity ? s + d > n ? (alert(tcart__dict(13, "Sorry, limit reached, this is the maximum quantity of goods in stock")), a = "yes", window.tcart.products[o].quantity = n) : window.tcart.products[o].quantity += d : window.tcart.products[o].quantity++, window.tcart.products[o].amount = window.tcart.products[o].price * window.tcart.products[o].quantity, window.tcart.products[o].amount = tcart__roundPrice(window.tcart.products[o].amount), window.tcart.products[o].ts = r, a = "yes", !1)
        }
    }), "" == a && (void 0 === t.quantity ? (t.quantity = 1, t.amount = t.price) : t.amount = tcart__roundPrice(t.price * t.quantity), t.ts = r, window.tcart.products.push(t)), tcart__updateTotalProductsinCartObj(), tcart__reDrawCartIcon(), tcart__saveLocalObj(), "yes" == $(".t706").attr("data-opencart-onorder") ? setTimeout(function() {
        tcart__openCart()
    }, 10) : ($(".t706__carticon").addClass("t706__carticon_neworder"), setTimeout(function() {
        $(".t706__carticon").removeClass("t706__carticon_neworder")
    }, 2e3))
}
