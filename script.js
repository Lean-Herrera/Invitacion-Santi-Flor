console.log('Hello, World!');



// // Selecciona la imagen
// const image = document.querySelector('.animated-image');

// // Función para comprobar si el elemento está en el viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Evento de scroll
// window.addEventListener('scroll', () => {
//     if (isInViewport(image)) {
//         image.classList.add('show');
//     }
// });

// Selecciona la imagen
const image = document.querySelector('.animated-image');


// Función para añadir la clase 'show' al cargar la página
function showOnLoad() {
    image.classList.add('show');
}



// Función para comprobar si el elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Añade la clase al cargar la página
window.addEventListener('load', showOnLoad);


// Evento de scroll
window.addEventListener('scroll', () => {
    if (isInViewport(image)) {
        image.classList.add('show');
    }
});


// Selecciona la imagen
const image2 = document.querySelector('.animated-image-2');


// Función para añadir la clase 'show' al cargar la página
function showOnLoad() {
    image2.classList.add('show');
}



// Función para comprobar si el elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const intervalTime = 5000; // Intervalo de tiempo en milisegundos (1.5 segundos)

// Función para mostrar la imagen actual
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Función para avanzar las imágenes
function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0; // Volver al inicio
    showSlide(currentIndex);
}

// Función para retroceder las imágenes
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1; // Ir al final
    showSlide(currentIndex);
}

// Navegación manual
function moveSlide(n) {
    currentIndex += n;
    if (currentIndex >= slides.length) currentIndex = 0; // Volver al inicio
    if (currentIndex < 0) currentIndex = slides.length - 1; // Ir al final
    showSlide(currentIndex);
}

// Mostrar la primera imagen al cargar la página
showSlide(currentIndex);

// Rotación automática cada 1.5 segundos
const autoSlideInterval = setInterval(nextSlide, intervalTime);

// Detener el carrusel al hacer hover sobre él
document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Reanudar el carrusel al salir del hover
document.querySelector('.carousel-container').addEventListener('mouseout', () => {
    setInterval(nextSlide, intervalTime);
});

// // Añade la clase al cargar la página
// window.addEventListener('load', showOnLoad);


// // Evento de scroll
// window.addEventListener('scroll', () => {
//     if (isInViewport(image2)) {
//         image2.classList.add('show');
//     }
// });


// // Selecciona la imagen
// const image1 = document.querySelector('.animated-image-1');


// // Función para añadir la clase 'show' al cargar la página
// function showOnLoad() {
//     image1.classList.add('show');
// }



// // Función para comprobar si el elemento está en el viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Añade la clase al cargar la página
// window.addEventListener('load', showOnLoad);


// // Evento de scroll
// window.addEventListener('scroll', () => {
//     if (isInViewport(image1)) {
//         image1.classList.add('show');
//     }
// });

// function $d(e) {
//     return document.getElementById(e)
// }
// var addeventatc = function() {
//     var p, u, i, b, t, e = !1, s = 1, l = !1, r = !0, v = !1, m = !1, g = !1, h = "", f = !0, x = !0, w = !0, k = !0, y = !0, _ = !0, T = !0, N = "Apple", E = "Google <em>(online)</em>", z = "Office 365 <em>(online)</em>", A = "Outlook", I = "Outlook.com <em>(online)</em>", C = "Yahoo <em>(online)</em>", $ = "Facebook Event", S = null, L = null, a = null, H = null, U = null, R = null;
//     return {
//         initialize: function() {
//             if (!e) {
//                 e = !0;
//                 try {
//                     addeventasync()
//                 } catch (e) {}
//                 addeventatc.trycss(),
//                 addeventatc.generate()
//             }
//         },
//         generate: function() {
//             for (var d = document.getElementsByTagName("*"), c = 0; c < d.length; c += 1)
//                 addeventatc.hasclass(d[c], "addeventatc") && function() {
//                     var a = "addeventatc" + s;
//                     d[c].id = a,
//                     addeventatc.hasclass(d[c], "keeptitle") || (d[c].title = ""),
//                     d[c].style.visibility = "visible",
//                     d[c].setAttribute("aria-haspopup", "true"),
//                     d[c].setAttribute("aria-expanded", "false"),
//                     d[c].setAttribute("tabindex", "0"),
//                     d[c].setAttribute("translate", "no"),
//                     d[c].setAttribute("data-loaded", "true"),
//                     l ? (d[c].onclick = function() {
//                         return !1
//                     }
//                     ,
//                     d[c].onmouseover = function() {
//                         clearTimeout(i),
//                         addeventatc.toogle(this, {
//                             type: "mouseover",
//                             id: a
//                         })
//                     }
//                     ,
//                     d[c].onmouseout = function() {
//                         i = setTimeout(function() {
//                             addeventatc.mouseout(this, {
//                                 type: "mouseout",
//                                 id: a
//                             })
//                         }, 100)
//                     }
//                     ) : (d[c].onclick = function() {
//                         return addeventatc.toogle(this, {
//                             type: "click",
//                             id: a
//                         }),
//                         !1
//                     }
//                     ,
//                     d[c].onmouseover = function() {}
//                     ,
//                     d[c].onmouseout = function() {}
//                     ),
//                     d[c].onkeydown = function(e) {
//                         var t = e.which || e.keyCode;
//                         "13" != t && "32" != t && "27" != t && "38" != t && "40" != t || e.preventDefault(),
//                         "13" != t && "32" != t || (addeventatc.keyboardclick(this, {
//                             type: "click",
//                             id: a
//                         }),
//                         addeventatc.toogle(this, {
//                             type: "click",
//                             id: a,
//                             keynav: !0
//                         })),
//                         "27" == t && addeventatc.hideandreset(),
//                         "9" == t && addeventatc.hideandreset(),
//                         "38" == t && addeventatc.keyboard(this, {
//                             type: "keyboard",
//                             id: a,
//                             key: "up"
//                         }),
//                         "40" == t && addeventatc.keyboard(this, {
//                             type: "keyboard",
//                             id: a,
//                             key: "down"
//                         }),
//                         0
//                     }
//                     ,
//                     d[c].onblur = function() {}
//                     ;
//                     var e = d[c];
//                     "none" != d[c].getAttribute("data-styling") && "inline-buttons" != d[c].getAttribute("data-render") || (r = !1),
//                     r && ((o = document.createElement("span")).className = "addeventatc_icon",
//                     e.appendChild(o)),
//                     s++,
//                     v = !0;
//                     for (var t = d[c].getElementsByTagName("*"), n = 0; n < t.length; n += 1)
//                         addeventatc.hasclass(t[n], "atc_node") || ("" != t[n].className ? t[n].className += " atc_node notranslate" : t[n].className += "atc_node");
//                     if ("inline-buttons" == d[c].getAttribute("data-render")) {
//                         d[c].onclick = function() {}
//                         ,
//                         addeventatc.toogle(d[c], {
//                             type: "render",
//                             id: a
//                         }),
//                         d[c].setAttribute("aria-expanded", "true"),
//                         d[c].removeAttribute("tabindex"),
//                         d[c].onkeydown = function() {}
//                         ,
//                         d[c].blur = function() {}
//                         ;
//                         var o = document.getElementById(a + "-drop");
//                         if (o) {
//                             o.setAttribute("aria-hidden", "false");
//                             for (t = o.getElementsByTagName("SPAN"),
//                             n = 0; n < t.length; n += 1) {
//                                 t[n];
//                                 t[n].tabIndex = "0",
//                                 t[n].onkeydown = function(e) {
//                                     var t = e.which || e.keyCode;
//                                     "13" != t && "32" != t || e.target.click()
//                                 }
//                             }
//                         }
//                     }
//                 }();
//             r ? addeventatc.applycss() : (addeventatc.removeelement($d("ate_css")),
//             addeventatc.removeelement($d("ate_tmp_css")),
//             addeventatc.helpercss()),
//             v && !m && (m = !0,
//             addeventatc.track({
//                 typ: "exposure",
//                 cal: ""
//             }))
//         },
//         toogle: function(e, t) {
//             var a, n = "", o = !1, d = e.id, c = $d(d);
//             if (c) {
//                 s = c.getAttribute("data-direct");
//                 var i = c.getAttribute("data-intel")
//                   , e = c.getAttribute("data-intel-apple");
//                 "ios" == addeventatc.agent() && "click" == t.type && "true" !== e && "false" !== i && (s = "appleical",
//                 c.setAttribute("data-intel-apple", "true"));
//                 try {
//                     "" != $d(d).querySelector(".recurring").innerHTML && (o = !0)
//                 } catch (e) {}
//                 try {
//                     "recurring" == c.getAttribute("data-event-type") && (o = !0)
//                 } catch (e) {}
//                 if ("outlook" == s || "google" == s || "yahoo" == s || "hotmail" == s || "outlookcom" == s || "appleical" == s || "apple" == s || "facebook" == s)
//                     "click" == t.type && (addeventatc.click({
//                         button: d,
//                         service: s,
//                         id: t.id
//                     }),
//                     null != S && addeventatc.trigger("button_click", {
//                         id: d
//                     }));
//                 else if ("mouseover" == t.type && u != c && (g = !1),
//                 "click" == t.type || "render" == t.type || "mouseover" == t.type && !g) {
//                     "mouseover" == t.type && (g = !0,
//                     null != L && addeventatc.trigger("button_mouseover", {
//                         id: d
//                     })),
//                     a = addeventatc.getburl({
//                         id: d,
//                         facebook: !0
//                     }),
//                     "" == h && (h = "appleical,google,office365,outlook,outlookcom,yahoo,facebook");
//                     for (var s, l = (h = (h += ",").replace(/ /gi, "")).split(","), r = 0; r < l.length; r += 1)
//                         (f && "ical" == l[r] || f && "appleical" == l[r]) && (n += '<span class="ateappleical" id="' + d + '-appleical" role="menuitem" tabindex="-1">' + N + "</span>"),
//                         x && "google" == l[r] && (n += '<span class="ategoogle" id="' + d + '-google" role="menuitem" tabindex="-1">' + E + "</span>"),
//                         w && "office365" == l[r] && (n += '<span class="ateoffice365" id="' + d + '-office365" role="menuitem" tabindex="-1">' + z + "</span>"),
//                         k && "outlook" == l[r] && (n += '<span class="ateoutlook" id="' + d + '-outlook" role="menuitem" tabindex="-1">' + A + "</span>"),
//                         (y && "hotmail" == l[r] || y && "outlookcom" == l[r]) && (n += '<span class="ateoutlookcom" id="' + d + '-outlookcom" role="menuitem" tabindex="-1">' + I + "</span>"),
//                         _ && "yahoo" == l[r] && !o && (n += '<span class="ateyahoo" id="' + d + '-yahoo" role="menuitem" tabindex="-1">' + C + "</span>"),
//                         a && "facebook" == l[r] && T && "facebook" == l[r] && (n += '<span class="atefacebook" id="' + d + '-facebook" role="menuitem" tabindex="-1">' + $ + "</span>");
//                     addeventatc.getlicense(p) || (n += '<em class="copyx"><em class="brx"></em><em class="frs"><a href="https://www.addevent.com" title="" tabindex="-1" id="' + d + '-home">AddEvent.com</a></em></em>'),
//                     $d(d + "-drop") || ((s = document.createElement("span")).id = d + "-drop",
//                     s.className = "addeventatc_dropdown",
//                     s.setAttribute("aria-hidden", "true"),
//                     s.setAttribute("aria-labelledby", d),
//                     s.innerHTML = n,
//                     c.appendChild(s)),
//                     $d(d + "-appleical") && ($d(d + "-appleical").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "appleical",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-google") && ($d(d + "-google").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "google",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-office365") && ($d(d + "-office365").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "office365",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-outlook") && ($d(d + "-outlook").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "outlook",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-outlookcom") && ($d(d + "-outlookcom").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "outlookcom",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-yahoo") && ($d(d + "-yahoo").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "yahoo",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-facebook") && ($d(d + "-facebook").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "facebook",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     $d(d + "-home") && ($d(d + "-home").onclick = function() {
//                         addeventatc.click({
//                             button: d,
//                             service: "home",
//                             id: t.id
//                         })
//                     }
//                     ),
//                     addeventatc.show(d, t)
//                 }
//                 return u = c,
//                 !1
//             }
//         },
//         click: function(e) {
//             var t, a, n = !0, o = window.location.href, d = $d(e.button);
//             if (d) {
//                 "home" == e.service ? a = window.configAeBaseUrl ? "https://" + window.configAeBaseUrl : "https://www.addevent.com" : (t = addeventatc.getburl({
//                     id: e.button,
//                     facebook: !1
//                 }),
//                 a = window.configAeBaseUrl ? "https://" + window.configAeBaseUrl + "/create/?service=" + e.service + t + "&reference=" + o : "https://www.addevent.com/create/?service=" + e.service + t + "&reference=" + o,
//                 "outlook" != e.service && "appleical" != e.service || (n = !1,
//                 addeventatc.usewebcal() && (a = window.configAeBaseUrl ? "webcal://" + window.configAeBaseUrl + "/create/?uwc=on&service=" + e.service + t + "&reference=" + o : "webcal://www.addevent.com/create/?uwc=on&service=" + e.service + t + "&reference=" + o)),
//                 null !== (d = d.getAttribute("data-id")) && (a = addeventatc.usewebcal() ? window.configAeBaseUrl ? "webcal://" + window.configAeBaseUrl + "/event/" + d + "+" + e.service + "/?uwc=on" : "webcal://www.addevent.com/event/" + d + "+" + e.service + "/?uwc=on" : window.configAeBaseUrl ? "https://" + window.configAeBaseUrl + "/event/" + d + "+" + e.service : "https://www.addevent.com/event/" + d + "+" + e.service)),
//                 $d("atecllink") || ((c = document.createElement("a")).id = "atecllink",
//                 c.rel = "external",
//                 c.setAttribute("data-role", "none"),
//                 c.innerHTML = "{addeventatc-ghost-link}",
//                 c.style.display = "none",
//                 document.body.appendChild(c));
//                 var c = $d("atecllink");
//                 if (c.target = n ? "_blank" : "_self",
//                 c.href = a,
//                 addeventatc.eclick("atecllink"),
//                 addeventatc.track({
//                     typ: "click",
//                     cal: e.service
//                 }),
//                 null != R) {
//                     addeventatc.trigger("button_dropdown_click", {
//                         id: e.button,
//                         service: e.service
//                     });
//                     try {
//                         (event || window.event).stopPropagation()
//                     } catch (e) {}
//                 }
//             }
//         },
//         mouseout: function(e, t) {
//             g = !1,
//             addeventatc.hideandreset(),
//             null != a && addeventatc.trigger("button_mouseout", {
//                 id: t.id
//             })
//         },
//         show: function(e, t) {
//             var a, n, o, d, c, i, s, l, r, p, u, v, m, g, h = $d(e), f = $d(e + "-drop");
//             h && f && ("block" == addeventatc.getstyle(f, "display") ? addeventatc.hideandreset() : (addeventatc.hideandreset(!0),
//             f.style.display = "block",
//             h.style.outline = "0",
//             b = addeventatc.topzindex(),
//             h.style.zIndex = b + 1,
//             h.className = h.className.replace(/\s+/g, " "),
//             h.setAttribute("aria-expanded", "true"),
//             f.setAttribute("aria-hidden", "false"),
//             t.keynav && addeventatc.keyboard(this, {
//                 type: "keyboard",
//                 id: e,
//                 key: "down"
//             }),
//             a = "auto",
//             n = null != (u = h.getAttribute("data-dropdown-x")) ? u : "auto",
//             null != (p = h.getAttribute("data-dropdown-y")) && (a = p),
//             f.style.left = "0px",
//             f.style.top = "0px",
//             f.style.display = "block",
//             o = parseInt(h.offsetHeight),
//             d = parseInt(h.offsetWidth),
//             c = parseInt(f.offsetHeight),
//             i = parseInt(f.offsetWidth),
//             g = addeventatc.viewport(),
//             v = parseInt(g.w),
//             s = parseInt(g.h),
//             m = parseInt(g.x),
//             l = parseInt(g.y),
//             r = addeventatc.elementposition(f),
//             u = parseInt(r.x),
//             p = parseInt(r.y),
//             r = (g = addeventatc.elementposition(h)).x,
//             h = u + i,
//             p = v + m,
//             v = u = 0,
//             m = "",
//             g = g.y - (c / 2 - o),
//             "down" == a && "left" == n ? (v = u = "-2px",
//             m = "topdown") : "up" == a && "left" == n ? (u = "0px",
//             v = -(c - o - 2) + "px") : "down" == a && "right" == n ? (u = -(i - d - 2) + "px",
//             v = "-2px",
//             m = "topdown") : "up" == a && "right" == n ? (u = -(i - d - 2) + "px",
//             v = -(c - o - 2) + "px") : "auto" == a && "left" == n ? (u = "0px",
//             g < l ? (v = "-2px",
//             m = "topdown") : v = l + s < g + c ? -(c - o - 2) + "px" : -(c / 2 - o) + "px") : "auto" == a && "right" == n ? (u = -(i - d - 2) + "px",
//             g < l ? (v = "-2px",
//             m = "topdown") : v = l + s < g + c ? -(c - o - 2) + "px" : -(c / 2 - o) + "px") : "down" == a && "auto" == n ? (u = p < h ? -(i - d - 2) + "px" : "-2px",
//             v = "-2px",
//             m = "topdown") : "up" == a && "auto" == n ? (u = p < h ? -(i - d - 2) + "px" : "-2px",
//             v = -(c - o - 2) + "px") : (g < l ? (v = "-2px",
//             m = "topdown") : v = l + s < g + c ? -(c - o - 2) + "px" : -(c / 2 - o) + "px",
//             u = p < h ? -(i - d - 2) + "px" : "-2px"),
//             f.style.left = u,
//             f.style.top = v,
//             "" != m && (f.className = f.className + " " + m),
//             setTimeout(function() {
//                 f.className = f.className + " addeventatc-selected"
//             }, 1),
//             "click" == t.type && null != S && addeventatc.trigger("button_click", {
//                 id: e
//             }),
//             null != H && addeventatc.trigger("button_dropdown_show", {
//                 id: e
//             })))
//         },
//         hide: function(e) {
//             var t = !1;
//             ("string" == typeof e && "" !== e || e instanceof String && "" !== e) && (-1 < e.indexOf("addeventatc") || -1 < e.indexOf("atc_node")) && (t = !0),
//             t || addeventatc.hideandreset()
//         },
//         hideandreset: function(e) {
//             for (var t = "", a = document.getElementsByTagName("*"), n = 0; n < a.length; n += 1)
//                 if (addeventatc.hasclass(a[n], "addeventatc")) {
//                     a[n].className = a[n].className.replace(/addeventatc-selected/gi, ""),
//                     a[n].className = a[n].className.replace(/\s+$/, ""),
//                     a[n].style.outline = "";
//                     var o = $d(a[n].id + "-drop");
//                     if (o) {
//                         var d = addeventatc.getstyle(o, "display");
//                         "block" == d && (t = a[n].id),
//                         o.style.display = "none",
//                         "block" !== addeventatc.getstyle(o, "display") && (a[n].setAttribute("aria-expanded", "false"),
//                         o.setAttribute("aria-hidden", "true"),
//                         o.className = o.className.replace(/addeventatc-selected/gi, ""),
//                         o.className = o.className.replace(/topdown/gi, ""),
//                         o.removeAttribute("style"));
//                         for (var c = o.getElementsByTagName("SPAN"), i = 0; i < c.length; i += 1) {
//                             var s = new RegExp("(\\s|^)drop_markup(\\s|$)");
//                             c[i].className = c[i].className.replace(s, " "),
//                             c[i].className = c[i].className.replace(/\s+$/, ""),
//                             c[i].tabIndex = "-1"
//                         }
//                     }
//                 }
//             e || null != U && addeventatc.trigger("button_dropdown_hide", {
//                 id: t
//             })
//         },
//         getburl: function(e) {
//             var t = $d(e.id)
//               , a = ""
//               , n = !1;
//             if (t) {
//                 for (var o = t.getElementsByTagName("*"), d = 0; d < o.length; d += 1)
//                     (addeventatc.hasclass(o[d], "_start") || addeventatc.hasclass(o[d], "start")) && (a += "&dstart=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_end") || addeventatc.hasclass(o[d], "end")) && (a += "&dend=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_zonecode") || addeventatc.hasclass(o[d], "zonecode")) && (a += "&dzone=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_timezone") || addeventatc.hasclass(o[d], "timezone")) && (a += "&dtime=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_summary") || addeventatc.hasclass(o[d], "summary") || addeventatc.hasclass(o[d], "title")) && (a += "&dsum=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_description") || addeventatc.hasclass(o[d], "description")) && (a += "&ddesc=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_location") || addeventatc.hasclass(o[d], "location")) && (a += "&dloca=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_organizer") || addeventatc.hasclass(o[d], "organizer")) && (a += "&dorga=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_organizer_email") || addeventatc.hasclass(o[d], "organizer_email")) && (a += "&dorgaem=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_attendees") || addeventatc.hasclass(o[d], "attendees")) && (a += "&datte=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_all_day_event") || addeventatc.hasclass(o[d], "all_day_event")) && (a += "&dallday=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_date_format") || addeventatc.hasclass(o[d], "date_format")) && (a += "&dateformat=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_alarm_reminder") || addeventatc.hasclass(o[d], "alarm_reminder")) && (a += "&alarm=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_recurring") || addeventatc.hasclass(o[d], "recurring")) && (a += "&drule=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_facebook_event") || addeventatc.hasclass(o[d], "facebook_event")) && (a += "&fbevent=" + encodeURIComponent(o[d].innerHTML),
//                     n = !0),
//                     (addeventatc.hasclass(o[d], "_client") || addeventatc.hasclass(o[d], "client")) && (a += "&client=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_calname") || addeventatc.hasclass(o[d], "calname")) && (a += "&calname=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_uid") || addeventatc.hasclass(o[d], "uid")) && (a += "&uid=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_sequence") || addeventatc.hasclass(o[d], "sequence")) && (a += "&seq=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_status") || addeventatc.hasclass(o[d], "status")) && (a += "&status=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_method") || addeventatc.hasclass(o[d], "method")) && (a += "&method=" + encodeURIComponent(o[d].innerHTML)),
//                     (addeventatc.hasclass(o[d], "_transp") || addeventatc.hasclass(o[d], "transp")) && (a += "&transp=" + encodeURIComponent(o[d].innerHTML));
//                 "true" == t.getAttribute("data-google-api") && (a += "&gapi=true"),
//                 "true" == t.getAttribute("data-outlook-api") && (a += "&oapi=true")
//             }
//             return e.facebook && (a = n),
//             a
//         },
//         trycss: function() {
//             if (!$d("ate_tmp_css")) {
//                 try {
//                     var e = ""
//                       , e = ".addeventatc {visibility:hidden;}";
//                     e += ".addeventatc .data {display:none!important;}",
//                     e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}",
//                     r && (e += ".addeventatc {background-image:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t5.png), url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg), url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg),  url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}");
//                     var t = document.createElement("style");
//                     t.type = "text/css",
//                     t.id = "ate_tmp_css",
//                     t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
//                     document.getElementsByTagName("head")[0].appendChild(t)
//                 } catch (e) {}
//                 addeventatc.track({
//                     typ: "jsinit",
//                     cal: ""
//                 })
//             }
//         },
//         applycss: function() {
//             var e, t;
//             $d("ate_css") && !$d("ate_css_plv") && ($d("ate_css").id = $d("ate_css").id.replace(/ate_css/gi, "ate_css_plv")),
//             $d("ate_css") || (e = "",
//             e += '@import url("https://fonts.googleapis.com/css2?family=Inter&family=Open+Sans:ital,wght@0,400;0,600;1,400&display=swap");',
//             e += '.addeventatc \t\t\t\t\t\t\t{display:inline-block;position:relative;z-index:99998;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;border:1px solid transparent;padding:13px 12px 12px 43px;-webkit-border-radius:3px;border-radius:3px;cursor:pointer;-webkit-font-smoothing:antialiased!important;outline-color:rgba(0,78,255,0.5);text-shadow:1px 1px 1px rgba(0,0,0,0.004);-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);box-shadow:0 0 0 0.5px rgba(50,50,93,.17), 0 2px 5px 0 rgba(50,50,93,.1), 0 1px 1.5px 0 rgba(0,0,0,.07), 0 1px 2px 0 rgba(0,0,0,.08), 0 0 0 0 transparent!important;background-image:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t5.png), url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg), url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg), url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}',
//             e += ".addeventatc:hover \t\t\t\t\t\t{background-color:#fafafa;color:#000;font-size:15px;text-decoration:none;}",
//             e += ".addeventatc:active \t\t\t\t\t{border-width:2px 1px 0px 1px;}",
//             e += ".addeventatc-selected \t\t\t\t\t{background-color:#f9f9f9;}",
//             e += ".addeventatc .addeventatc_icon \t\t\t{width:18px;height:18px;position:absolute;z-index:1;left:12px;top:10px;background:url(https://cdn.addevent.com/libs/imgs/icon-calendar-t1.svg) no-repeat;background-size:18px 18px;}",
//             e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .client, .addeventatc .transp {display:none!important;}",
//             e += ".addeventatc br \t\t\t\t\t\t{display:none;}",
//             addeventatc.getlicense(p) ? e += '.addeventatc_dropdown \t\t\t\t{width:230px;position:absolute;padding:6px 0px 6px 0px;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;text-align:left;margin-left:-1px;display:none;-moz-border-radius:3px;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;-moz-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;transform:scale(.98,.98) translateY(5px);opacity:0.5;z-index:-1;transition:transform .15s ease;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}' : e += '.addeventatc_dropdown \t\t\t\t{width:230px;position:absolute;padding:6px 0px 0px 0px;font-family:"Open Sans",Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:600;line-height:100%;background:#fff;font-size:15px;text-decoration:none;text-align:left;margin-left:-1px;display:none;-moz-border-radius:3px;-webkit-border-radius:3px;-webkit-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;-moz-box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;box-shadow:rgba(0,0,0,0.4) 0px 10px 26px;transform:scale(.98,.98) translateY(5px);opacity:0.5;z-index:-1;transition:transform .15s ease;-webkit-user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);}',
//             e += ".addeventatc_dropdown.topdown \t\t\t{transform:scale(.98,.98) translateY(-5px)!important;}",
//             e += ".addeventatc_dropdown span \t\t\t\t{display:block;line-height:100%;background:#fff;text-decoration:none;cursor:pointer;font-size:15px;color:#333;font-weight:600;padding:14px 10px 14px 55px;margin:-2px 0px;}",
//             e += ".addeventatc_dropdown span:hover \t\t{background-color:#f4f4f4;color:#000;text-decoration:none;font-size:15px;}",
//             e += ".addeventatc_dropdown em \t\t\t\t{color:#999!important;font-size:12px!important;font-weight:400;}",
//             e += ".addeventatc_dropdown .frs a \t\t\t{background:#fff;color:#cacaca!important;cursor:pointer;font-size:9px!important;font-style:normal!important;font-weight:400!important;line-height:110%!important;padding-left:10px;position:absolute;right:10px;text-align:right;text-decoration:none;top:5px;z-index:101;}",
//             e += ".addeventatc_dropdown .frs a:hover \t\t{color:#999!important;}",
//             e += ".addeventatc_dropdown .ateappleical \t{background:url(https://cdn.addevent.com/libs/imgs/icon-apple-t5.svg) 18px 40% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .ategoogle \t\t{background:url(https://cdn.addevent.com/libs/imgs/icon-google-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .ateoffice365 \t{background:url(https://cdn.addevent.com/libs/imgs/icon-office365-t5.svg) 19px 50% no-repeat;background-size:18px 100%;}",
//             e += ".addeventatc_dropdown .ateoutlook \t\t{background:url(https://cdn.addevent.com/libs/imgs/icon-outlook-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .ateoutlookcom \t{background:url(https://cdn.addevent.com/libs/imgs/icon-outlookcom-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .ateyahoo \t\t{background:url(https://cdn.addevent.com/libs/imgs/icon-yahoo-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .atefacebook \t\t{background:url(https://cdn.addevent.com/libs/imgs/icon-facebook-t5.svg) 18px 50% no-repeat;background-size:22px 100%;}",
//             e += ".addeventatc_dropdown .copyx \t\t\t{height:21px;display:block;position:relative;cursor:default;}",
//             e += ".addeventatc_dropdown .brx \t\t\t\t{height:1px;overflow:hidden;background:#e8e8e8;position:absolute;z-index:100;left:10px;right:10px;top:9px;}",
//             e += ".addeventatc_dropdown.addeventatc-selected {opacity:1;transform:scale(1,1) translateY(0px);z-index:99999999;}",
//             e += ".addeventatc_dropdown.topdown.addeventatc-selected {transform:scale(1,1) translateY(0px)!important;}",
//             e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}",
//             (t = document.createElement("style")).type = "text/css",
//             t.id = "ate_css",
//             t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
//             document.getElementsByTagName("head")[0].appendChild(t),
//             addeventatc.removeelement($d("ate_tmp_css")))
//         },
//         helpercss: function() {
//             var e, t;
//             $d("ate_helper_css") || (e = "",
//             e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}",
//             e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:110%!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;display:inline-block;}",
//             e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}",
//             e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .sequence, .addeventatc .status, .addeventatc .method, .addeventatc .transp {display:none!important;}",
//             (t = document.createElement("style")).type = "text/css",
//             t.id = "ate_helper_css",
//             t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)),
//             document.getElementsByTagName("head")[0].appendChild(t))
//         },
//         removeelement: function(e) {
//             try {
//                 return !!(hdx = e) && hdx.parentNode.removeChild(hdx)
//             } catch (e) {}
//         },
//         topzindex: function() {
//             for (var e, t = 1, a = document.getElementsByTagName("*"), n = 0; n < a.length; n += 1)
//                 (addeventatc.hasclass(a[n], "addeventatc") || addeventatc.hasclass(a[n], "addeventstc")) && (e = addeventatc.getstyle(a[n], "z-index"),
//                 !isNaN(parseFloat(e)) && isFinite(e) && t < (e = parseInt(e)) && (t = e));
//             return t
//         },
//         viewport: function() {
//             var e = 0
//               , t = 0
//               , a = 0
//               , n = 0;
//             return "number" == typeof window.innerWidth ? (e = window.innerWidth,
//             t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth,
//             t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth,
//             t = document.body.clientHeight),
//             a = document.all ? (n = document.documentElement.scrollLeft || document.body.scrollLeft,
//             document.documentElement.scrollTop || document.body.scrollTop) : (n = window.pageXOffset,
//             window.pageYOffset),
//             {
//                 w: e,
//                 h: t,
//                 x: n,
//                 y: a
//             }
//         },
//         elementposition: function(e) {
//             var t = 0
//               , a = 0;
//             if (e.offsetParent)
//                 for (t = e.offsetLeft,
//                 a = e.offsetTop; e = e.offsetParent; )
//                     t += e.offsetLeft,
//                     a += e.offsetTop;
//             return {
//                 x: t,
//                 y: a
//             }
//         },
//         getstyle: function(e, t) {
//             var a;
//             return e.currentStyle ? a = e.currentStyle[t] : window.getComputedStyle && (a = document.defaultView.getComputedStyle(e, null).getPropertyValue(t)),
//             a
//         },
//         getlicense: function(e) {
//             var t, a, n, o = location.origin, d = !1;
//             return void 0 === location.origin && (o = location.protocol + "//" + location.host),
//             e && (t = e.substring(0, 1),
//             a = e.substring(9, 10),
//             n = e.substring(17, 18),
//             "a" == t && "z" == a && "m" == n && (d = !0)),
//             (-1 == o.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e || -1 == o.indexOf("addevent.to") && "aao8iuet5zp9iqw5sm9z" == e || -1 == o.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e) && (d = !0),
//             d
//         },
//         refresh: function() {
//             for (var e = document.getElementsByTagName("*"), t = [], a = 0; a < e.length; a += 1)
//                 if (addeventatc.hasclass(e[a], "addeventatc")) {
//                     e[a].className = e[a].className.replace(/addeventatc-selected/gi, ""),
//                     e[a].id = "";
//                     for (var n = e[a].getElementsByTagName("*"), o = 0; o < n.length; o += 1)
//                         (addeventatc.hasclass(n[o], "addeventatc_icon") || addeventatc.hasclass(n[o], "addeventatc_dropdown")) && t.push(n[o])
//                 }
//             for (var d = 0; d < t.length; d += 1)
//                 addeventatc.removeelement(t[d]);
//             addeventatc.removeelement($d("ate_css")),
//             m = !(s = 1),
//             addeventatc.generate()
//         },
//         hasclass: function(e, t) {
//             return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
//         },
//         eclick: function(e) {
//             var t = document.getElementById(e);
//             t.click ? t.click() : document.createEvent && ((e = document.createEvent("MouseEvents")).initEvent("click", !0, !0),
//             t.dispatchEvent(e))
//         },
//         track: function(e) {
//             new Image,
//             (new Date).getTime(),
//             encodeURIComponent(window.location.origin)
//         },
//         getguid: function() {
//             for (var e, t, a = "addevent_track_cookie=", n = "", o = document.cookie.split(";"), d = 0; d < o.length; d++) {
//                 for (var c = o[d]; " " == c.charAt(0); )
//                     c = c.substring(1, c.length);
//                 0 == c.indexOf(a) && (n = c.substring(a.length, c.length))
//             }
//             return "" == n && (e = (addeventatc.s4() + addeventatc.s4() + "-" + addeventatc.s4() + "-4" + addeventatc.s4().substr(0, 3) + "-" + addeventatc.s4() + "-" + addeventatc.s4() + addeventatc.s4() + addeventatc.s4()).toLowerCase(),
//             (t = new Date).setTime(t.getTime() + 31536e6),
//             t = "expires=" + t.toUTCString(),
//             document.cookie = "addevent_track_cookie=" + e + "; " + t,
//             n = e),
//             n
//         },
//         s4: function() {
//             return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
//         },
//         documentclick: function(e) {
//             e = (e = e || window.event).target || e.srcElement;
//             try {
//                 e instanceof SVGElement && (e = e.parentNode)
//             } catch (e) {}
//             ate_touch_capable ? (clearTimeout(t),
//             t = setTimeout(function() {
//                 addeventatc.hide(e.className)
//             }, 200)) : addeventatc.hide(e.className)
//         },
//         trigger: function(e, t) {
//             if ("button_click" == e)
//                 try {
//                     S(t)
//                 } catch (e) {}
//             if ("button_mouseover" == e)
//                 try {
//                     L(t)
//                 } catch (e) {}
//             if ("button_mouseout" == e)
//                 try {
//                     a(t)
//                 } catch (e) {}
//             if ("button_dropdown_show" == e)
//                 try {
//                     H(t)
//                 } catch (e) {}
//             if ("button_dropdown_hide" == e)
//                 try {
//                     U(t)
//                 } catch (e) {}
//             if ("button_dropdown_click" == e)
//                 try {
//                     R(t)
//                 } catch (e) {}
//         },
//         register: function(e, t) {
//             "button-click" == e && (S = t),
//             "button-mouseover" == e && (L = t),
//             "button-mouseout" == e && (a = t),
//             "button-dropdown-show" == e && (H = t),
//             "button-dropdown-hide" == e && (U = t),
//             "button-dropdown-click" == e && (R = t)
//         },
//         settings: function(e) {
//             null != e.license && (p = e.license),
//             null != e.css && (e.css ? r = !0 : (r = !1,
//             addeventatc.removeelement($d("ate_css")))),
//             null != e.mouse && (l = e.mouse),
//             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (l = !1),
//             null != e.outlook && null != e.outlook.show && (k = e.outlook.show),
//             null != e.google && null != e.google.show && (x = e.google.show),
//             null != e.office365 && null != e.office365.show && (w = e.office365.show),
//             null != e.yahoo && null != e.yahoo.show && (_ = e.yahoo.show),
//             null != e.hotmail && null != e.hotmail.show && (y = e.hotmail.show),
//             null != e.outlookcom && null != e.outlookcom.show && (y = e.outlookcom.show),
//             null != e.ical && null != e.ical.show && (f = e.ical.show),
//             null != e.appleical && null != e.appleical.show && (f = e.appleical.show),
//             null != e.facebook && null != e.facebook.show && (T = e.facebook.show),
//             null != e.outlook && null != e.outlook.text && (A = e.outlook.text),
//             null != e.google && null != e.google.text && (E = e.google.text),
//             null != e.office365 && null != e.office365.text && (z = e.office365.text),
//             null != e.yahoo && null != e.yahoo.text && (C = e.yahoo.text),
//             null != e.hotmail && null != e.hotmail.text && (I = e.hotmail.text),
//             null != e.outlookcom && null != e.outlookcom.text && (I = e.outlookcom.text),
//             null != e.ical && null != e.ical.text && (N = e.ical.text),
//             null != e.appleical && null != e.appleical.text && (N = e.appleical.text),
//             null != e.facebook && null != e.facebook.text && ($ = e.facebook.text),
//             null != e.dropdown && null != e.dropdown.order && (h = e.dropdown.order)
//         },
//         keyboard: function(e, t) {
//             var a = document.getElementById(t.id + "-drop");
//             if (a && "block" == addeventatc.getstyle(a, "display")) {
//                 for (var n = a.getElementsByTagName("SPAN"), o = null, d = 0, c = 0, i = 0; i < n.length; i += 1)
//                     d++,
//                     addeventatc.hasclass(n[i], "drop_markup") && (o = n[i],
//                     c = d);
//                 null === o ? c = 1 : "down" == t.key ? d <= c ? c = 1 : c++ : 1 == c ? c = d : c--;
//                 for (var s, i = d = 0; i < n.length; i += 1)
//                     ++d == c ? (n[i].className += " drop_markup",
//                     n[i].tabIndex = "0",
//                     n[i].focus()) : (s = new RegExp("(\\s|^)drop_markup(\\s|$)"),
//                     n[i].className = n[i].className.replace(s, " "),
//                     n[i].className = n[i].className.replace(/\s+$/, ""),
//                     n[i].tabIndex = "-1")
//             }
//         },
//         keyboardclick: function(e, t) {
//             t = document.getElementById(t.id + "-drop");
//             if (t) {
//                 for (var a = t.getElementsByTagName("SPAN"), n = null, o = 0; o < a.length; o += 1)
//                     addeventatc.hasclass(a[o], "drop_markup") && (n = a[o]);
//                 if (null !== n) {
//                     n.click();
//                     for (o = 0; o < a.length; o += 1) {
//                         var d = new RegExp("(\\s|^)drop_markup(\\s|$)");
//                         a[o].className = a[o].className.replace(d, " "),
//                         a[o].className = a[o].className.replace(/\s+$/, "")
//                     }
//                 }
//             }
//         },
//         usewebcal: function() {
//             var e = !1
//               , t = !1
//               , a = window.navigator.userAgent.toLowerCase();
//             navigator.userAgent.match(/CriOS|FxiOS|OPiOS|EdgiOS|mercury|gsa/i) && (t = !0);
//             var n = /iphone|ipod|ipad/.test(a);
//             (-1 < a.indexOf("fban") || -1 < a.indexOf("fbav") && n) && (t = !0);
//             a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
//             if (n && a || n && t) {
//                 for (var o = "atc_sub_mode=", d = !1, c = document.cookie.split(";"), i = 0; i < c.length; i++) {
//                     for (var s = c[i]; " " == s.charAt(0); )
//                         s = s.substring(1, s.length);
//                     0 == s.indexOf(o) && (d = s.substring(o.length, s.length))
//                 }
//                 d || alert('If the event fails to load please \n"Open the page in Safari".'),
//                 e = !0;
//                 t = new Date;
//                 t.setTime(t.getTime() + 31536e6);
//                 t = "expires=" + t.toUTCString();
//                 document.cookie = "atc_sub_mode=true;" + t + ";path=/;SameSite=Lax"
//             }
//             return e
//         },
//         agent: function() {
//             var e = navigator.userAgent || navigator.vendor || window.opera;
//             return /windows phone/i.test(e) ? "windows_phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
//         },
//         isloaded: function() {
//             return !!e
//         },
//         notloadedcnt: function() {
//             for (var e = document.getElementsByClassName("addeventatc"), t = 0, a = 0; a < e.length; a += 1)
//                 "true" == e[a].getAttribute("data-loaded") && t++;
//             e.length > t && addeventatc.refresh()
//         }
//     }
// }();
// !function(e) {
//     "use strict";
//     e = e || window;
//     var a = []
//       , n = !1
//       , o = !1;
//     function d() {
//         if (!n) {
//             n = !0;
//             for (var e = 0; e < a.length; e++)
//                 a[e].fn.call(window, a[e].ctx);
//             a = []
//         }
//     }
//     function c() {
//         "complete" === document.readyState && d()
//     }
//     e.addeventReady = function(e, t) {
//         if ("function" != typeof e)
//             throw new TypeError("callback for docReady(fn) must be a function");
//         n ? setTimeout(function() {
//             e(t)
//         }, 1) : (a.push({
//             fn: e,
//             ctx: t
//         }),
//         "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(d, 1) : o || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", d, !1),
//         window.addEventListener("load", d, !1)) : (document.attachEvent("onreadystatechange", c),
//         window.attachEvent("onload", d)),
//         o = !0))
//     }
// }(window);
// var ate_touch_capable = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch || 0 < navigator.maxTouchPoints || 0 < window.navigator.msMaxTouchPoints;
// window.addEventListener ? (document.addEventListener("click", addeventatc.documentclick, !1),
// ate_touch_capable && document.addEventListener("touchend", addeventatc.documentclick, !1)) : window.attachEvent ? (document.attachEvent("onclick", addeventatc.documentclick),
// ate_touch_capable && document.attachEvent("ontouchend", addeventatc.documentclick)) : document.onclick = function() {
//     addeventatc.documentclick(event)
// }
// ,
// addeventReady(function() {
//     addeventatc.initialize()
// });
// var flbckcnt = 0
//   , flbckint = setInterval(function() {
//     15 <= ++flbckcnt || addeventatc.isloaded() ? clearInterval(flbckint) : addeventatc.initialize()
// }, 300)
//   , nlbckcnt = 0
//   , nlbckint = setInterval(function() {
//     15 <= ++nlbckcnt ? clearInterval(nlbckint) : addeventatc.notloadedcnt()
// }, 300);
