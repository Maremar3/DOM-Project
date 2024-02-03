//import "./styles.css";
// if (typeof window !== 'undefined') {
//   // 👉️ can use document here
//   console.log('You are on the browser')

//   console.log(document.title)
//   console.log(document.getElementsByClassName('my-class'));
// } else {
//   // 👉️ can't use document here
//   console.log('You are on the server')
// }
const mainEl = document.getElementsByTagName("main")[0];
// console.log(mainEl);
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
  { text: "HOME", href: "/HOME" },
  { text: "SERVICES", href: "/SERVICES" },
  { text: "CONTACT", href: "/CONTACT" },
  { text: "ABOUT", href: "/ABOUT" },
];

//HENOCK ARRAY**********//
// menuLinks.forEach(function (i) {
//   //Create an <a> element.
//   const link = document.createElement("a");
//   link.innerText = i.text;
//   link.href = `${i.href}`;
//   topMenuEl.appendChild(link);
// });

// ****** TEACHER ARRAY*********//
menuLinks.forEach((el) => {
  let link = document.createElement('a');
  link.setAttribute('href', el.href);
  link.textContent = el.text;
  topMenuEl.appendChild(link);

});


// var menuLinks = [
//   { text: "HOME", href: "/HOME" },
//   {
//     text: "SERVICES",
//     href: "#",
//     subLinks: [
//       { text: "all", href: "/SERVICES/all" },
//       { text: "top selling", href: "/SERVICES/top" },
//       { text: "search", href: "/SERVICES/search" },
//     ],
//   },
//   {
//     text: "CONTACT",
//     href: "#",
//     subLinks: [
//       { text: "new", href: "/CONTACT/new" },
//       { text: "pending", href: "/CONTACT/pending" },
//       { text: "history", href: "/CONTACT/history" },
//     ],
//   },
//   {
//     text: "ABOUT",
//     href: "#",
//     subLinks: [
//       { text: "profile", href: "/ABOUT/profile" },
//       { text: "sign out", href: "/ABOUT/signout" },
//     ],
//   },
// ];


//Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// const subMenuEl = document.getElementById("sub-menu");
// subMenuEl.style.height = "100%";
// subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
// subMenuEl.classList.add("flex-around");
// console.log(subMenuEl);
var topMenuLinks = document.querySelector("topMenuE1");

//console.log(topMenuLinks);


// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];
//console.log ("hello")