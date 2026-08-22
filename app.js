
const DEFAULT_ROOMS=[
{id:1,room_name:"Deluxe Room",room_type:"Deluxe",price:2500,status:"Available",image:"Deluxe Room.png"},
{id:2,room_name:"Suite Room",room_type:"Suite",price:4500,status:"Available",image:"Suite Room.png"},
{id:3,room_name:"Family Room",room_type:"Family",price:3500,status:"Available",image:"Family Room.png"}];
function getRooms(){const x=localStorage.getItem("hotel_rooms");if(!x){saveRooms(DEFAULT_ROOMS);return [...DEFAULT_ROOMS]}return JSON.parse(x)}
function saveRooms(x){localStorage.setItem("hotel_rooms",JSON.stringify(x))}
function getBookings(){return JSON.parse(localStorage.getItem("hotel_bookings")||"[]")}
function saveBookings(x){localStorage.setItem("hotel_bookings",JSON.stringify(x))}
function money(n){return "₹ "+Number(n||0).toLocaleString("en-IN",{minimumFractionDigits:2})}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function isAdmin(){return sessionStorage.getItem("hotel_admin")==="true"}
function requireAdmin(){if(!isAdmin())location.href="login.html"}
function logout(){sessionStorage.removeItem("hotel_admin");location.href="login.html"}
function bookingId(){const d=new Date(),p=n=>String(n).padStart(2,"0");return "BK"+d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+Math.floor(1000+Math.random()*9000)}
function daysBetween(a,b){return Math.max(1,Math.ceil((new Date(b)-new Date(a))/86400000))}
function qs(n){return new URLSearchParams(location.search).get(n)||""}
