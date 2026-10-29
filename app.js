const groups={
'Hot Coffee':[['Spanish Latte',199,'Hot coffee'],['Caramel Macchiato',199,'Hot coffee'],['Americano',139,'Hot coffee'],['Cafe Latte',169,'Hot coffee']],
'Iced Coffee':[['Spanish Latte Iced Coffee',259,'Iced coffee'],['Caramel Macchiato Iced Coffee',259,'Iced coffee'],['Americano Iced Coffee',209,'Iced coffee']],
'Matcha & Frappe':[['Matcha',179,'Hot or iced options; from'],['Dirty Matcha',209,'Matcha with coffee; from'],['Java Chip Frappe',249,'Blended coffee drink'],['Salted Caramel Frappe',229,'Blended drink']],
'Pasta':[['Carbonara',259,'White pasta'],['Lasagna',259,'Pasta'],['Aglio Olio',319,'Seafood pasta with garlic and olive oil']],
'Pizza':[['Hawaiian Pizza',469,'Thin crust · bacon, ham, pineapple and mozzarella'],['All Meat Pizza',469,'Thin crust · ground beef, bacon, ham and mozzarella'],['Bacon and Mushroom Pizza',469,'Thin crust'],['Chicken Veggie Pizza',469,'Thin crust · chicken, cabbage and mozzarella']],
'Rice Meals':[['Crispy Chicken',249,'Rice meal'],['Spicy Chicken',269,'Rice meal'],['Chicken Wings',299,'Rice meal; from'],['Beef Rolls',229,'Beef rolls served with rice; from'],['Lemon Fish',359,'Fish dory in lemon sauce with rice']],
'Burgers & Sandwiches':[['Sunrise Burger',299,'Burger'],['Spicy Chicken Burger',299,'Burger'],['Ham & Cheese Melt',219,'Sandwich']],
'To Share':[['Nachos Beef',319,'Nachos'],['Nachos Chicken',319,'Nachos'],['Loaded Fries Beef',319,'Loaded fries'],['Loaded Fries Chicken',319,'Loaded fries']],
'Tea & Milk Tea':[['Mango Lychee Fruit Tea',189,'Fruit tea'],['Honey Lemon Fruit Tea',189,'Fruit tea'],['Wintermelon Milk Tea',189,'Milk tea'],['Chocolate Milk Tea',189,'Milk tea'],['Signature Cheesecake Milk Tea',219,'Milk tea'],['Okinawa Milktea',189,'Pearl milk tea'],['Taro Milktea',189,'Pearl milk tea']],
'Shakes & Yakult':[['Mango Shake',219,'Shake'],['Avocado Shake',219,'Shake'],['Cookies & Cream Shake',219,'Shake'],['Dark Choco Shake',219,'Shake'],['Mango Yakult',229,'Yakult drink'],['Blueberry Yakult',229,'Yakult drink'],['Strawberry Yakult',229,'Yakult drink'],['Lychee Yakult Drink',203,'Yakult drink']]};
let category='All';let pendingCategory=null;
const itemPhotos={
  "Crispy Chicken": "menu/item-7",
  "Spicy Chicken": "menu/item-8",
  "Chicken Wings": "menu/item-9",
  "Beef Rolls": "menu/item-10",
  "Lemon Fish": "menu/item-11",
  "Hawaiian Pizza": "menu/item-12",
  "All Meat Pizza": "menu/item-13",
  "Bacon and Mushroom Pizza": "pizza",
  "Chicken Veggie Pizza": "pizza-veggie",
  "Ham & Cheese Melt": "menu/item-16",
  "Sunrise Burger": "menu/item-17",
  "Spicy Chicken Burger": "menu/item-18",
  "Lasagna": "menu/item-19",
  "Carbonara": "menu/item-20",
  "Aglio Olio": "menu/item-21",
  "Nachos Beef": "menu/item-22",
  "Nachos Chicken": "menu/item-23",
  "Loaded Fries Beef": "menu/item-24",
  "Loaded Fries Chicken": "menu/item-25",
  "Spanish Latte": "hot-coffee",
  "Caramel Macchiato": "menu/item-27",
  "Americano": "menu/item-28",
  "Cafe Latte": "menu/item-29",
  "Spanish Latte Iced Coffee": "menu/item-30",
  "Caramel Macchiato Iced Coffee": "menu/item-31",
  "Americano Iced Coffee": "menu/item-32",
  "Matcha": "menu/item-33",
  "Dirty Matcha": "menu/item-34",
  "Java Chip Frappe": "menu/item-35",
  "Salted Caramel Frappe": "menu/item-36",
  "Mango Lychee Fruit Tea": "menu/item-37",
  "Honey Lemon Fruit Tea": "menu/item-38",
  "Wintermelon Milk Tea": "menu/item-39",
  "Chocolate Milk Tea": "menu/item-40",
  "Signature Cheesecake Milk Tea": "menu/item-41",
  "Okinawa Milktea": "menu/item-42",
  "Taro Milktea": "menu/item-43",
  "Mango Yakult": "menu/item-44",
  "Blueberry Yakult": "menu/item-45",
  "Strawberry Yakult": "menu/item-46",
  "Lychee Yakult Drink": "menu/item-47",
  "Mango Shake": "menu/item-48",
  "Avocado Shake": "menu/item-49",
  "Cookies & Cream Shake": "menu/item-50",
  "Dark Choco Shake": "menu/item-51"
};
function menuPhoto(name){return [itemPhotos[name],name]}
const drinkCells={"Caramel Macchiato": 0, "Americano": 1, "Spanish Latte Iced Coffee": 2, "Caramel Macchiato Iced Coffee": 3, "Americano Iced Coffee": 4, "Dirty Matcha": 5, "Wintermelon Milk Tea": 6, "Chocolate Milk Tea": 7, "Signature Cheesecake Milk Tea": 8, "Okinawa Milktea": 9, "Taro Milktea": 10, "Mango Yakult": 11, "Blueberry Yakult": 12, "Strawberry Yakult": 13, "Lychee Yakult Drink": 14, "Mango Shake": 15, "Avocado Shake": 16, "Cookies & Cream Shake": 17, "Dark Choco Shake": 18, "Spanish Latte": 19};
const atlasSize={width:1122,height:1402};
function menuThumbnail(name){
 if(Object.hasOwn(drinkCells,name)){
  const cell=drinkCells[name];
  const [x,right]=[[0,281],[286,559],[564,839],[844,1122]][cell%4];
  const [y,bottom]=[[0,264],[267,526],[528,791],[793,1056],[1058,1402]][Math.floor(cell/4)];
  const inset=10,w=right-x-inset*2,h=bottom-y-inset*2;
  return `<svg class="menu-thumb" role="img" aria-label="${name}" viewBox="${x+inset} ${y+inset} ${w} ${h}" preserveAspectRatio="xMidYMid slice"><image href="assets/menu-drinks.png" width="${atlasSize.width}" height="${atlasSize.height}"/></svg>`;
 }
 const [photo,alt]=menuPhoto(name);
 return `<img class="menu-thumb" src="assets/${photo}.jpg" alt="${alt}" loading="lazy" width="96" height="96">`;
}
const itemHTML=([name,price,desc])=>`<article class="menu-item">${menuThumbnail(name)}<div><h3>${name}</h3><p>${desc.replace('; from','')}</p></div><span class="price">${desc.includes('from')?'<small>from</small>':''}₱${price}</span></article>`;
function homeMenu(cat='Hot Coffee'){document.querySelector('#homeMenu').innerHTML=groups[cat].map(itemHTML).join('');document.querySelectorAll('[data-homecat]').forEach(b=>{b.classList.toggle('active',b.dataset.homecat===cat);b.setAttribute('aria-pressed',b.dataset.homecat===cat)})}
function renderMenu(){const query=document.querySelector('#search').value.trim().toLowerCase();const rows=(category==='All'?Object.values(groups).flat():groups[category]).filter(r=>r[0].toLowerCase().includes(query));document.querySelector('#fullMenu').innerHTML=rows.map(itemHTML).join('');document.querySelector('#empty').hidden=rows.length>0;document.querySelectorAll('[data-cat]').forEach(b=>{b.classList.toggle('active',b.dataset.cat===category);b.setAttribute('aria-pressed',b.dataset.cat===category)})}
document.querySelector('#menuTabs').innerHTML=['All',...Object.keys(groups)].map(c=>`<button data-cat="${c}" aria-pressed="${c==='All'}">${c}</button>`).join('');
document.querySelectorAll('[data-homecat]').forEach(b=>b.addEventListener('click',()=>homeMenu(b.dataset.homecat)));
document.querySelectorAll('[data-cat]').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.cat;renderMenu()}));
document.querySelectorAll('[data-filter]').forEach(a=>a.addEventListener('click',()=>{pendingCategory=a.dataset.filter;if(location.hash==='#menu'){category=pendingCategory;pendingCategory=null;renderMenu()}}));
document.querySelector('#search').addEventListener('input',renderMenu);
const nav=document.querySelector('#nav'), toggle=document.querySelector('#navToggle');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.textContent=open?'×':'☰'});
function route(){let page=location.hash.slice(1)||'home';if(page==='main')return;if(!['home','about','menu','visit'].includes(page))page='home';document.querySelectorAll('[data-page]').forEach(s=>s.hidden=s.dataset.page!==page);document.querySelectorAll('[data-route]').forEach(a=>{a.classList.toggle('active',a.dataset.route===page);if(a.dataset.route===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});if(pendingCategory){category=pendingCategory;pendingCategory=null;renderMenu()}nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';toggle.setAttribute('aria-label','Open navigation');document.title=({home:'Forever Cafe & Lounge | Coffee & Good Company in Ormoc',about:'Our Cafe | Forever Cafe & Lounge',menu:'Menu | Forever Cafe & Lounge',visit:'Visit & Contact | Forever Cafe & Lounge'})[page];window.scrollTo({top:0,behavior:'instant'})}window.addEventListener('hashchange',route);
const photos=['hero','latte','beans'];
const layers=[...document.querySelectorAll('.hero-photo')];
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let photoIndex=0,activeLayer=0,slideshowTimer=null,slideshowPaused=reducedMotion.matches;
photos.forEach(name=>{const image=new Image();image.src=`assets/${name}.jpg`});
function advancePhoto(){
  photoIndex=(photoIndex+1)%photos.length;
  const nextLayer=1-activeLayer;
  layers[nextLayer].style.backgroundImage=`url('assets/${photos[photoIndex]}.jpg')`;
  layers[nextLayer].classList.add('is-active');
  layers[activeLayer].classList.remove('is-active');
  activeLayer=nextLayer;
}
function syncSlideshow(){
  clearInterval(slideshowTimer);
  if(!slideshowPaused&&!document.hidden)slideshowTimer=setInterval(advancePhoto,6500);
}
document.addEventListener('visibilitychange',syncSlideshow);
reducedMotion.addEventListener('change',()=>{slideshowPaused=reducedMotion.matches;syncSlideshow()});
syncSlideshow();homeMenu();renderMenu();route();
