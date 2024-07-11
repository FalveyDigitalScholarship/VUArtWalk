!(function (a, b) {
    "use strict";
    (L.ArtMarkers = {}),
        (L.ArtMarkers.version = "1.0.1"),
        (L.ArtMarkers.Icon = L.Icon.extend({
            options: {
                iconSize: [35, 45],
                iconAnchor: [17, 42],
                popupAnchor: [1, -32],
                shadowAnchor: [10, 12],
                shadowSize: [36, 16],
                className: "extra-marker-painting", "extra-marker-sculpture", "extra-marker-religious",
                prefix: "",
                extraClasses: "",
                shape: "circle",
                icon: "",
                markerColor: "red",
                iconColor: "#fff",
                number: "",
            },
            initialize: function (a) {
                a = L.Util.setOptions(this, a);
            },
            createIcon: function () {
                var a = b.createElement("div"),
                    c = this.options;
                return c.icon && (a.innerHTML = this._createInner()), c.bgPos && (a.style.backgroundPosition = -c.bgPos.x + "px " + -c.bgPos.y + "px"), this._setIconStyles(a, c.shape + "-" + c.markerColor), a;
            },
            _createInner: function () {
                var a = "",
                    b = "",
                    c = this.options;
                return c.iconColor && (a = "style='color: " + c.iconColor + "' "), c.number && (b = "number='" + c.number + "' "), "<i " + b + a + "class='" + c.extraClasses + " " + c.prefix + " " + c.icon + "'></i>";
            },
            _setIconStyles: function (a, b) {
                var c,
                    d,
                    e = this.options,
                    f = L.point(e["shadow" === b ? "shadowSize" : "iconSize"]);
                "shadow" === b ? ((c = L.point(e.shadowAnchor || e.iconAnchor)), (d = "shadow")) : ((c = L.point(e.iconAnchor)), (d = "icon")),
                    !c && f && (c = f.divideBy(2, !0)),
                    (a.className = "leaflet-marker-" + d + " extra-marker-" + b + " " + e.className),
                    c && ((a.style.marginLeft = -c.x + "px"), (a.style.marginTop = -c.y + "px")),
                    f && ((a.style.width = f.x + "px"), (a.style.height = f.y + "px"));
            },
            createShadow: function () {
                var a = b.createElement("div");
                return this._setIconStyles(a, "shadow"), a;
            },
        })),
        (L.ExtraMarkers.icon = function (a) {
            return new L.ExtraMarkers.Icon(a);
        });
})(this, document);
