//import "./styles.css";
const mainEL = document.getElementsByName("main")[0];
 console.log(mainEL);
//let mainEl = document.getElementsByTagName('main');
//console.log(mainEl);
mainEl.style.backgroundColor = "var(--main-bg)";
//document.querySelector("h1").innerText = "DOM Manipulation";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
//mainEL.style.textAlign="center"
const topMenuEl = document.getElementById("top-menu");
// Set the height of topMenuEl to be 100%
topMenuEl.style.height = "100%";
// Set the background color of topMenuEl to the value stored in --top-menu-bg CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
menuLinks.forEach(function (i) {
  //Create an <a> element.
  const link = document.createElement("a");
  link.innerText = i.text;
  link.href = `${i.href}`;
  topMenuEl.appendChild(link);
});

// var menuLinks = [
//   { text: "about", href: "/about" },
//   {
//     text: "catalog",
//     href: "#",
//     subLinks: [
//       { text: "all", href: "/catalog/all" },
//       { text: "top selling", href: "/catalog/top" },
//       { text: "search", href: "/catalog/search" },
//     ],
//   },
//   {
//     text: "orders",
//     href: "#",
//     subLinks: [
//       { text: "new", href: "/orders/new" },
//       { text: "pending", href: "/orders/pending" },
//       { text: "history", href: "/orders/history" },
//     ],
//   },
//   {
//     text: "account",
//     href: "#",
//     subLinks: [
//       { text: "profile", href: "/account/profile" },
//       { text: "sign out", href: "/account/signout" },
//     ],
//   },
// ];


// //Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// const subMenuEl = document.getElementById("sub-menu");
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// subMenuEl.classList.add("flex-around");
// console.log(subMenuEl);
// var topMenuLinks = document.querySelector("topMenuE1");
// console.log(topMenuLinks);


// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
console.log ("hello")