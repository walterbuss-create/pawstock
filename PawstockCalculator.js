/* Pawstock Feeding Calculator v10 */
(function () {
  'use strict';

  /* =====================================================================
     PRODUCT PICKS - edit this list to change what the calculator recommends.
     Each row: [name, link slug after pawstock.pet/products/, image, species,
                stages, dog size, format, tags, kcal per cup or per can]
       stages : p = puppy/kitten, a = adult, s = senior  (e.g. 'as' = adult + senior)
       size   : dogs only. s = small breed, m = medium & large, l = large-breed puppy, '' = any
       format : dry | wet | fd (freeze-dried / air-dried)
       tags   : wm = weight management, act = meat-rich, dig = digestion, skin = skin & coat
       kcal   : optional. Copy "kcal/cup" (dry) or "kcal/can" (wet) from the bag/can label.
                When filled in, the card shows exactly how much to feed per day.
     ===================================================================== */
  var IMG = 'https://d2j6dbq0eux0bg.cloudfront.net/images/105364568/';
  var PRODUCTS = [
    /* ---- Dog: puppy ---- */
    ['Fromm Puppy Gold Dry Dog Food, 15 lb', 'fromm-puppy-gold-dry-dog-food-15-lb', '4426242267.png', 'dog', 'p', '', 'dry', '', null],
    ['Fromm Puppy Gold Large Breed Dry Dog Food, 15 lb', 'fromm-puppy-gold-large-breed-dry-dog-food-15-lb', '4426409251.jpg', 'dog', 'p', 'l', 'dry', '', null],
    ['Fromm Heartland Gold Large Breed Puppy Dry Dog Food, 26 lb', 'fromm-heartland-gold-large-breed-puppy-dry-dog-food-26-lb', 'products/832504285/5735735998.png', 'dog', 'p', 'l', 'dry', '', null],
    ['Fromm Puppy Classic Dry Dog Food, 30 lb', 'fromm-puppy-classic-dry-dog-food-30-lb', '4426301349.jpg', 'dog', 'p', '', 'dry', '', null],
    ['Fromm Puppy Chicken & Salmon Pate Wet Dog Food, 12.2 oz', 'fromm-puppy-chicken--salmon-pate-wet-dog-food-12-2-oz', '5083152215.png', 'dog', 'p', '', 'wet', '', null],
    ['Farmina N&D Pumpkin Lamb & Blueberry Puppy Dry Dog Food, 5.5 lb', 'farmina-nd-pumpkin-lamb--blueberry-puppy-dry-dog-food-5-5-lb-bag', '4624263719.png', 'dog', 'p', '', 'dry', '', null],
    ['GO! Solutions Skin + Coat Large Breed Puppy Salmon Dry Dog Food, 25 lb', 'go-solutions-skin-coat-with-grains-large-breed-puppy-salmon-dry-dog-food-25-lb', 'products/822630032/5645859846.png', 'dog', 'p', 'l', 'dry', 'skin', null],
    ['Now Fresh Grain-Free Small Breed Puppy Dry Dog Food, 3.5 lb', 'now-fresh-grain-free-small-breed-puppy-turkey-salmon--duck-dry-dog-food-3-5-lb', 'products/822627770/5645842098.png', 'dog', 'p', 's', 'dry', '', null],
    ["Stella & Chewy's Wholesome Grain Raw Coated Puppy Dry Dog Food, 22 lb", 'stella--chewys-wholesome-grain-raw-coated-cage-free-chicken-puppy-dry-dog-food-with-pumpkin--quinoa-22-lb', 'products/838033504/5789095244.jpg', 'dog', 'p', '', 'dry', '', null],
    /* ---- Dog: senior ---- */
    ['Fromm Senior Gold Dry Dog Food, 15 lb', 'fromm-senior-gold-dry-dog-food-15-lb', '4781417432.png', 'dog', 's', '', 'dry', '', null],
    ['GO! Carnivore Grain-Free Senior Dry Dog Food', 'go-carnivore-grain-free-chicken-turkey--duck-senior-dry-dog-food', 'products/822617114/5645853332.png', 'dog', 's', '', 'dry', '', null],
    ['Now Fresh Grain-Free Small Breed Senior Dry Dog Food, 6 lb', 'now-fresh-grain-free-small-breed-senior-turkey-salmon--duck-dry-dog-food-6-lb', 'products/822617235/5645842464.png', 'dog', 's', 's', 'dry', '', null],
    /* ---- Dog: weight management ---- */
    ['Fromm Weight Management Gold Dry Dog Food, 15 lb', 'fromm-weight-management-gold-dry-dog-food-15-lb', '4452736883.png', 'dog', 'as', '', 'dry', 'wm', null],
    ['Farmina N&D Quinoa Weight Management Lamb Medium & Maxi Dry Dog Food, 15.4 lb', 'farmina-nd-quinoa-weight-management-lamb-medium--maxi-adult-dry-dog-food-15-4-lb-bag', '4624208626.png', 'dog', 'as', 'm', 'dry', 'wm', null],
    ['Farmina N&D Quinoa Weight Management Lamb Mini Dry Dog Food, 5.5 lb', 'farmina-nd-quinoa-weight-management-lamb-mini-adult-dry-dog-food-5-5-lb-bag', '4624253419.png', 'dog', 'as', 's', 'dry', 'wm', null],
    ['Farmina N&D Quinoa Weight Management Lamb Wet Dog Food, 10 oz', 'farmina-nd-quinoa-weight-management-lamb-wet-dog-food-10-oz-can', '4624389679.png', 'dog', 'as', '', 'wet', 'wm', null],
    ["Dave's Carbolight Chicken Dinner Weight Management Wet Dog Food, 13 oz", 'daves-carbolight-chicken-dinner-weight-management-wet-dog-food-13-oz', 'products/828055759/5695108792.jpg', 'dog', 'as', '', 'wet', 'wm', null],
    ["Dave's Restricted Diet Weight Management Turkey & Vegetables, 13.2 oz", 'daves-restricted-diet-weight-management-turkey--vegetables-dog-food-13-2-oz', 'products/828042884/5695094626.png', 'dog', 'as', '', 'wet', 'wm', null],
    /* ---- Dog: adult ---- */
    ['Fromm Adult Classic Dry Dog Food, 30 lb', 'fromm-adult-classic-dry-dog-food-30-lb', 'products/833639681/5746753401.jpg', 'dog', 'as', '', 'dry', '', null],
    ['Farmina N&D Ocean Cod & Pumpkin Adult Dry Dog Food, 26.4 lb', 'farmina-nd-ocean-cod--pumpkin-adult-dry-dog-food-26-4-lb-bag', '4454174987.png', 'dog', 'a', 'm', 'dry', '', null],
    ['Farmina N&D Ocean Cod & Pumpkin Mini Adult Dry Dog Food, 5.5 lb', 'farmina-nd-ocean-cod--pumpkin-mini-adult-dry-dog-food-5-5-lb-bag', '4454179157.png', 'dog', 'a', 's', 'dry', '', null],
    ['Farmina N&D Pumpkin Chicken & Pomegranate Adult Dry Dog Food, 26.4 lb', 'farmina-nd-pumpkin-chicken--pomegranate-adult-dry-dog-food-26-4-lb-bag', '4593839715.png', 'dog', 'a', 'm', 'dry', '', null],
    ['Farmina N&D Pumpkin Chicken & Pomegranate Mini Adult Dry Dog Food, 5.5 lb', 'farmina-nd-pumpkin-chicken--pomegranate-mini-adult-dry-dog-food-5-5-lb-bag', '4593840242.png', 'dog', 'a', 's', 'dry', '', null],
    ['Farmina N&D Pumpkin Lamb & Blueberry Adult Dry Dog Food, 26.4 lb', 'farmina-nd-pumpkin-lamb--blueberry-adult-dry-dog-food-26-4-lb-bag', '4604811989.png', 'dog', 'a', 'm', 'dry', '', null],
    ['Farmina N&D Pumpkin Duck & Cantaloupe Mini Adult Dry Dog Food, 4.4 lb', 'farmina-nd-pumpkin-duck--cantaloupe-mini-adult-dry-dog-food-4-4-lb-bag', '4604782160.png', 'dog', 'a', 's', 'dry', '', null],
    ['Farmina N&D Pumpkin Venison & Apple Adult Dry Dog Food, 26.4 lb', 'farmina-nd-pumpkin-venison--apple-adult-dry-dog-food-26-4-lb-bag', '4624139805.png', 'dog', 'a', 'm', 'dry', '', null],
    ['Farmina N&D Quinoa Digestion Lamb Medium & Maxi Dry Dog Food, 15.4 lb', 'farmina-nd-quinoa-digestion-lamb-medium--maxi-adult-dry-dog-food-15-4-lb-bag', '4624249298.png', 'dog', 'as', 'm', 'dry', 'dig', null],
    ['Farmina N&D Quinoa Digestion Lamb Mini Dry Dog Food, 5.5 lb', 'farmina-nd-quinoa-digestion-lamb-mini-adult-dry-dog-food-5-5-lb-bag', '4624253078.png', 'dog', 'as', 's', 'dry', 'dig', null],
    ['Farmina N&D Quinoa Digestion Lamb Wet Dog Food, 10 oz', 'farmina-nd-quinoa-digestion-lamb-wet-dog-food-10-oz-can', '4624373329.png', 'dog', 'as', '', 'wet', 'dig', null],
    ['Farmina N&D Quinoa Skin & Coat Venison & Coconut Medium & Maxi Dry Dog Food, 15.4 lb', 'farmina-nd-quinoa-skin--coat-venison--coconut-medium--maxi-adult-dry-dog-food-15-4-lb-bag', 'products/786964963/5475789263.png', 'dog', 'as', 'm', 'dry', 'skin', null],
    ['Farmina N&D Quinoa Skin & Coat Venison & Coconut Mini Dry Dog Food, 5.5 lb', 'farmina-nd-quinoa-skin--coat-venison--coconut-mini-adult-dry-dog-food-5-5-lb-bag', '4624254254.png', 'dog', 'as', 's', 'dry', 'skin', null],
    ['Farmina N&D Ocean Cod & Pumpkin Wet Dog Food, 10 oz', 'farmina-nd-ocean-cod--pumpkin-wet-dog-food-10-oz-can', '4454173377.png', 'dog', 'as', '', 'wet', '', null],
    ['Rawz 96% Chicken & Chicken Liver Wet Dog Food, 12.5 oz', 'rawz-96-chicken--chicken-liver-dog-food-12-5-oz', '5273839604.png', 'dog', 'as', '', 'wet', 'act', null],
    ['Rawz 96% Beef & Beef Liver Wet Dog Food, 12.5 oz', 'rawz-96-beef--beef-liver-steam-cooked-dog-food-12-5-oz', 'products/873824114/6352511811.png', 'dog', 'as', '', 'wet', 'act', null],
    ['Rawz Air Dried "Just for My Small Dog" Chicken, 1 lb', 'rawz-air-dried-just-for-my-small-dog-chicken-1-lb', 'products/797112175/5474175377.png', 'dog', 'as', 's', 'fd', 'act', null],
    ['Rawz Air Dried "Just for My Small Dog" Beef, 1 lb', 'rawz-air-dried-just-for-my-small-dog-beef-1-lb', 'products/797113644/5474171939.png', 'dog', 'as', 's', 'fd', 'act', null],
    ["Dr. Marty's Nature's Blend Active Vitality, 16 oz", 'dr-martys-natures-blend-active-vitality-16-oz', '4552026249.png', 'dog', 'a', '', 'fd', 'act', null],
    /* ---- Cat: kitten ---- */
    ['Fromm Kitten Gold Dry Cat Food, 10 lb', 'fromm-kitten-gold-dry-cat-food-10-lb', '4755178983.jpg', 'cat', 'p', '', 'dry', '', null],
    ['Fussie Cat Market Fresh Kitten Dry Cat Food, 10 lb', 'fussie-cat-market-fresh-kitten-10-lb', 'products/816420460/5596638821.png', 'cat', 'p', '', 'dry', '', null],
    ['Fromm Kitten Gold Chicken & Duck Wet Cat Food, 5 oz', 'fromm-kitten-gold-chicken-duck-wet-cat-food-5-oz', '5003527020.jpg', 'cat', 'p', '', 'wet', '', null],
    ['Weruva Kitten Can Jam Variety Pack Wet Kitten Food, 3 oz', 'weruva-kitten-can-jam-chicken-tuna--salmon-variety-pack-grain-free-wet-kitten-food-3-oz', 'products/837820915/6283915610.png', 'cat', 'p', '', 'wet', '', null],
    ['Weruva Kitten Chicken & Pumpkin Wet Cat Food, 3 oz', 'weruva-kitten-chicken--pumpkin-wet-cat-food-3-oz', '4867432099.png', 'cat', 'p', '', 'wet', '', null],
    ['Weruva Kitten Chicken Au Jus Wet Cat Food, 3 oz', 'weruva-kitten-chicken-au-jus-wet-cat-food-3-oz', '4867397210.png', 'cat', 'p', '', 'wet', '', null],
    /* ---- Cat: weight management ---- */
    ['Fromm Healthy Weight Gold Dry Cat Food, 10 lb', 'fromm-healthy-weight-gold-dry-cat-food-10-lb', '4781414417.jpg', 'cat', 'as', '', 'dry', 'wm', null],
    ['Farmina N&D Quinoa Weight Management Lamb Dry Cat Food, 3.3 lb', 'farmina-nd-quinoa-weight-management-lamb-dry-cat-food-3-3-lb-bag', '4624285819.png', 'cat', 'as', '', 'dry', 'wm', null],
    ['Farmina N&D Quinoa Weight Management Lamb Wet Cat Food, 2.8 oz', 'farmina-nd-quinoa-weight-management-lamb-wet-cat-food-2-8-oz-can', '4624388683.png', 'cat', 'as', '', 'wet', 'wm', null],
    ['Fromm Weight Management Gold Chicken & Duck Wet Cat Food, 3 oz', 'fromm-weight-management-gold-chicken-duck-wet-cat-food-3-oz', 'products/812903406/5591015062.png', 'cat', 'as', '', 'wet', 'wm', null],
    /* ---- Cat: adult & senior ---- */
    ['Fromm Adult Gold Dry Cat Food, 10 lb', 'fromm-adult-gold-dry-cat-food-10-lb', '4752251480.jpg', 'cat', 'as', '', 'dry', '', null],
    ['Fromm Adult Gold Chicken, Duck & Salmon Wet Cat Food, 3 oz', 'fromm-adult-gold-chicken-duck-salmon-wet-cat-food-3-oz', 'products/812901454/5590997960.png', 'cat', 'as', '', 'wet', '', null],
    ['Farmina N&D Prime Chicken & Pomegranate Dry Cat Food, 11 lb', 'farmina-nd-prime-chicken--pomegranate-dry-cat-food-11-lb-bag', '4593839625.png', 'cat', 'as', '', 'dry', '', null],
    ['Farmina N&D Prime Lamb & Blueberry Dry Cat Food, 11 lb', 'farmina-nd-prime-lamb--blueberry-dry-cat-food-11-lb-bag', '5082252240.png', 'cat', 'as', '', 'dry', '', null],
    ['Farmina N&D Ocean Pumpkin Herring Dry Cat Food, 11 lb', 'farmina-nd-ocean-pumpkin-herring-dry-cat-food-11-lb-bag', 'products/814240687/6283888419.png', 'cat', 'as', '', 'dry', '', null],
    ['Farmina N&D Pumpkin Quail Dry Cat Food, 3.3 lb', 'farmina-nd-pumpkin-quail-dry-cat-food-3-3-lb-bag', '4624351444.png', 'cat', 'as', '', 'dry', '', null],
    ["Rawz Cat 94% Venison with Goat's Milk Pate, 3 oz", 'rawz-cat-94-venison-w-goats-milk-pate-3-oz', 'products/797111877/5474160149.png', 'cat', 'as', '', 'wet', 'act', null],
    ['Rawz Cat 94% Venison with Green Mussels Pate, 3 oz', 'rawz-cat-94-venison-w-green-mussels-pate-3-oz', 'products/797111873/5474165720.png', 'cat', 'as', '', 'wet', 'act', null],
    ['Nulo Freestyle Shredded Chicken & Duck Wet Cat Food, 3 oz', 'nulo-freestyle-shredded-chicken--duck-3-oz', '5195830343.png', 'cat', 'as', '', 'wet', '', null],
    ['Nulo Freestyle Minced Salmon & Turkey Wet Cat Food, 3 oz', 'nulo-freestyle-minced-salmon--turkey-3-oz', '5195808071.png', 'cat', 'as', '', 'wet', '', null],
    ['Farmina N&D Ocean Cod, Shrimp & Pumpkin Wet Cat Food, 2.46 oz', 'farmina-nd-ocean-cod-shrimp--pumpkin-wet-cat-food-2-46-oz-can', '4454184807.png', 'cat', 'as', '', 'wet', '', null],
    ['Farmina N&D Pumpkin Lamb & Blueberry Wet Cat Food, 2.46 oz', 'farmina-nd-pumpkin-lamb-pumpkin--blueberry-wet-cat-food-2-46-oz-can', '4624295448.png', 'cat', 'as', '', 'wet', '', null]
  ];
  var STORE = 'https://www.pawstock.pet/products/';
  var PHONE = '224-457-3893';
  /* ===================== end of editable settings ===================== */

  var CSS = [
    '#psfg{--t:#0e7c86;--td:#0a5f67;--tl:#34bcc7;--tbg:#eaf8f9;--pk:#e8559a;--pkbg:#fdeef5;--tx:#1d3238;--mu:#566a70;--ln:#d5e4e7;--bg:#f5f8f9;font-family:Arial,Helvetica,sans-serif;color:var(--tx);max-width:940px;margin:0 auto;padding:12px;line-height:1.45;font-size:16px;text-align:left}',
    '#psfg *,#psfg *:before,#psfg *:after{box-sizing:border-box}',
    '#psfg h2,#psfg h3,#psfg p{margin:0;padding:0;font-family:inherit;color:inherit;letter-spacing:normal;text-transform:none}',
    '#psfg button{all:unset;box-sizing:border-box;cursor:pointer;font-family:inherit}',
    '#psfg button:focus-visible,#psfg a:focus-visible,#psfg input:focus-visible{outline:3px solid var(--pk);outline-offset:2px}',
    '#psfg .pf-card{background:#fff;border:1px solid var(--ln);border-radius:18px;box-shadow:0 6px 18px rgba(20,50,60,.07);overflow:hidden}',
    '#psfg .pf-head{background:linear-gradient(120deg,#0e7c86,#34bcc7 75%,#e8559a);color:#fff;padding:22px 24px;display:flex;gap:16px;align-items:center}',
    '#psfg .pf-head img{width:72px;height:72px;object-fit:contain;flex:0 0 72px;background:#fff;border-radius:14px;padding:4px}',
    '#psfg .pf-head h2{font-size:26px;font-weight:800;line-height:1.15;color:#fff}',
    '#psfg .pf-head p{font-size:15px;opacity:.95;margin-top:4px;color:#fff}',
    '#psfg .pf-prog{padding:16px 24px 0}',
    '#psfg .pf-prog-row{display:flex;justify-content:space-between;font-size:13px;font-weight:700;color:var(--mu);margin-bottom:6px}',
    '#psfg .pf-bar{height:8px;background:var(--bg);border-radius:9px;overflow:hidden}',
    '#psfg .pf-bar span{display:block;height:100%;background:var(--t);border-radius:9px;transition:width .3s}',
    '#psfg .pf-body{padding:20px 24px 24px}',
    '#psfg .pf-q{font-size:22px;font-weight:800;margin-bottom:6px;color:var(--tx)}',
    '#psfg .pf-sub{color:var(--mu);font-size:15px;margin-bottom:16px}',
    '#psfg .pf-label{display:block;font-weight:700;font-size:15px;margin:18px 0 8px;color:var(--tx)}',
    '#psfg .pf-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}',
    '#psfg .pf-grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}',
    '#psfg .pf-opt{display:flex;flex-direction:column;gap:4px;border:2px solid var(--ln);border-radius:14px;padding:14px 14px 14px 46px;background:#fff;position:relative;min-height:64px;transition:border-color .15s,background .15s}',
    '#psfg .pf-opt:hover{border-color:var(--tl)}',
    '#psfg .pf-opt b{font-size:16px;color:var(--tx)}',
    '#psfg .pf-opt small{font-size:13px;color:var(--mu);line-height:1.35}',
    '#psfg .pf-opt .pf-ring{position:absolute;left:14px;top:16px;width:22px;height:22px;border-radius:50%;border:2px solid #9fb4b9;background:#fff;display:flex;align-items:center;justify-content:center}',
    '#psfg .pf-opt[aria-pressed="true"]{border:3px solid var(--td);background:var(--tbg);padding:13px 13px 13px 45px}',
    '#psfg .pf-opt[aria-pressed="true"] .pf-ring{border-color:var(--td);background:var(--td)}',
    '#psfg .pf-opt[aria-pressed="true"] .pf-ring:after{content:"";width:6px;height:11px;border:solid #fff;border-width:0 3px 3px 0;transform:rotate(45deg);margin-top:-2px}',
    '#psfg .pf-big{padding:22px 18px 22px 54px;min-height:92px}',
    '#psfg .pf-big[aria-pressed="true"]{padding:21px 17px 21px 53px}',
    '#psfg .pf-big b{font-size:22px}',
    '#psfg .pf-big .pf-ring{top:28px;left:18px}',
    '#psfg .pf-input{all:unset;box-sizing:border-box;width:100%;max-width:260px;border:2px solid #b9d3d8;border-radius:12px;padding:12px 14px;font-size:18px;background:#fff;color:var(--tx);font-family:inherit}',
    '#psfg .pf-input:focus{border-color:var(--t)}',
    '#psfg .pf-inrow{display:flex;align-items:center;gap:10px;flex-wrap:wrap}',
    '#psfg .pf-unit{font-weight:700;color:var(--mu)}',
    '#psfg .pf-err{color:#b3261e;font-weight:700;font-size:14px;margin-top:14px;min-height:20px}',
    '#psfg .pf-nav{display:flex;justify-content:space-between;gap:12px;margin-top:22px;flex-wrap:wrap}',
    '#psfg .pf-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--t);color:#fff;font-weight:800;font-size:16px;padding:14px 24px;border-radius:12px;border:2px solid var(--t);text-decoration:none;text-align:center;line-height:1.2}',
    '#psfg .pf-btn:hover{background:var(--td);border-color:var(--td);color:#fff}',
    '#psfg .pf-btn.ghost{background:#fff;color:var(--t)}',
    '#psfg .pf-btn.ghost:hover{background:var(--tbg);color:var(--td)}',
    '#psfg .pf-btn.pink{background:var(--pk);border-color:var(--pk)}',
    '#psfg .pf-btn.pink:hover{background:#cf3f83;border-color:#cf3f83}',
    '#psfg .pf-btn.sm{padding:10px 16px;font-size:14px}',
    '#psfg .pf-hero{background:var(--tbg);border:2px solid #a8dde2;border-radius:16px;padding:20px;text-align:center}',
    '#psfg .pf-hero .pf-k{font-size:52px;font-weight:900;color:var(--td);line-height:1.05}',
    '#psfg .pf-hero .pf-k span{font-size:20px;font-weight:800}',
    '#psfg .pf-hero p{color:var(--mu);font-size:14px;margin-top:6px}',
    '#psfg .pf-hero .pf-ht{font-size:16px;font-weight:800;color:var(--tx);margin:0 0 6px}',
    '#psfg .pf-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:12px}',
    '#psfg .pf-stat{border:1px solid var(--ln);border-radius:12px;padding:12px;background:#fff;text-align:center}',
    '#psfg .pf-stat strong{display:block;font-size:22px;color:var(--td)}',
    '#psfg .pf-stat span{font-size:13px;color:var(--mu)}',
    '#psfg .pf-notes{margin:16px 0 0;padding:14px 16px;border-left:5px solid var(--pk);background:var(--pkbg);border-radius:10px;font-size:14px}',
    '#psfg .pf-notes p+p{margin-top:8px}',
    '#psfg .pf-sec{margin-top:26px}',
    '#psfg .pf-sec h3{font-size:20px;font-weight:800;margin-bottom:4px;color:var(--tx)}',
    '#psfg .pf-conv{border:1px solid var(--ln);border-radius:14px;padding:16px;background:var(--bg)}',
    '#psfg .pf-seg{display:inline-flex;border:2px solid var(--t);border-radius:11px;overflow:hidden}',
    '#psfg .pf-seg button{padding:10px 14px;font-weight:700;font-size:14px;color:var(--t);background:#fff}',
    '#psfg .pf-seg button+button{border-left:2px solid var(--t)}',
    '#psfg .pf-seg button[aria-pressed="true"]{background:var(--t);color:#fff;text-decoration:underline;text-underline-offset:3px}',
    '#psfg .pf-out{margin-top:14px;font-size:16px}',
    '#psfg .pf-out strong{font-size:24px;color:var(--td)}',
    '#psfg .pf-prods{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:12px}',
    '#psfg .pf-prod{border:1px solid var(--ln);border-radius:14px;padding:12px;background:#fff;display:flex;flex-direction:column;gap:8px}',
    '#psfg .pf-img{height:150px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '#psfg .pf-img img{max-width:100%;max-height:150px;object-fit:contain}',
    '#psfg .pf-prod b{font-size:14px;line-height:1.35;color:var(--tx)}',
    '#psfg .pf-chips{display:flex;flex-wrap:wrap;gap:5px}',
    '#psfg .pf-chip{font-size:12px;font-weight:700;padding:3px 8px;border-radius:20px;background:var(--tbg);color:var(--td);border:1px solid #b6e1e5}',
    '#psfg .pf-amt{font-size:13px;color:var(--tx);background:var(--bg);border-radius:8px;padding:7px 9px}',
    '#psfg .pf-prod .pf-btn{margin-top:auto}',
    '#psfg .pf-help{margin-top:26px;padding:18px;border-radius:14px;background:var(--bg);display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}',
    '#psfg .pf-help p{font-size:15px}',
    '#psfg .pf-help a{color:var(--td);font-weight:800}',
    '#psfg .pf-acts{display:flex;gap:10px;flex-wrap:wrap}',
    '#psfg .pf-fine{font-size:12px;color:var(--mu);margin-top:18px;line-height:1.55}',
    '#psfg .pf-fine a{color:var(--td)}',
    '#psfg .pf-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media(max-width:600px){#psfg{padding:4px}#psfg .pf-head{padding:18px 16px}#psfg .pf-head img{width:56px;height:56px;flex-basis:56px}#psfg .pf-head h2{font-size:21px}#psfg .pf-body,#psfg .pf-prog{padding-left:16px;padding-right:16px}#psfg .pf-stats{grid-template-columns:1fr}#psfg .pf-grid.two{grid-template-columns:1fr}#psfg .pf-hero .pf-k{font-size:44px}#psfg .pf-prods{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}#psfg .pf-img{height:120px}#psfg .pf-img img{max-height:120px}#psfg .pf-nav .pf-btn{flex:1}}'
  ].join(' ');

  var LOGO = 'https://dhgf5mcbrms62.cloudfront.net/105364568/header-qUuT6N/x8dHNV6-200x200.webp';
  var PAW = '<svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true"><g fill="#a8dde2"><ellipse cx="18" cy="24" rx="6" ry="8"/><ellipse cx="46" cy="24" rx="6" ry="8"/><ellipse cx="28" cy="14" rx="5.5" ry="7.5"/><ellipse cx="38" cy="14" rx="5.5" ry="7.5"/><path d="M32 30c-9 0-16 10-16 17 0 6 6 7 9 6 3-1 5-2 7-2s4 1 7 2c3 1 9 0 9-6 0-7-7-17-16-17z"/></g></svg>';

  var CATALOG = PRODUCTS.map(function (r, i) {
    return { n: r[0], u: STORE + r[1], i: r[2] ? IMG + r[2] : '', sp: r[3], st: r[4], sz: r[5], f: r[6], t: r[7], k: r[8], idx: i, b: r[0].split(' ')[0] };
  });

  var S, step, root;
  var STEPS = ['pet', 'age', 'body', 'life', 'food', 'result'];

  function reset() {
    S = { sp: null, name: '', stage: null, size: null, lb: '', bcs: null, ideal: '', fixed: null, act: null, fmt: 'any', focus: 'none', meals: null, dens: '', unit: 'cup' };
    step = 0;
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmtN(n) { return Math.round(n).toLocaleString('en-US'); }
  function r5(n) { return Math.round(n / 5) * 5; }
  function num(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : NaN; }
  function pet() { return S.sp === 'cat' ? 'cat' : 'dog'; }
  function nm(cap) { if (S.name.trim()) return esc(S.name.trim()); return (cap ? 'Your ' : 'your ') + pet(); }
  function young() { return S.stage === 'p1' || S.stage === 'p2' || S.stage === 'k'; }

  function opt(k, v, title, desc, big) {
    var on = S[k] === v;
    return '<button type="button" class="pf-opt' + (big ? ' pf-big' : '') + '" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + on + '"><span class="pf-ring"></span><b>' + title + '</b>' + (desc ? '<small>' + desc + '</small>' : '') + '<span class="pf-sr">' + (on ? 'Selected' : '') + '</span></button>';
  }

  /* ---------------- calorie math ---------------- */
  function rer(lb) { return 70 * Math.pow(lb / 2.2046226218, 0.75); }

  function compute() {
    var lb = num(S.lb), dog = S.sp === 'dog', notes = [];
    var ideal = lb, mode = 'maintain', overrideIdeal = num(S.ideal);
    if (!young()) {
      if (S.bcs === 'thin') { ideal = lb * 1.10; mode = 'gain'; }
      else if (S.bcs === 'heavy') { ideal = lb / 1.10; mode = 'trim'; }
      else if (S.bcs === 'over') { ideal = lb / 1.20; mode = 'lose'; }
      if (S.bcs !== 'ideal' && overrideIdeal >= 0.5 && overrideIdeal <= 250) ideal = overrideIdeal;
    }
    var f;
    if (dog) {
      if (S.stage === 'p1') f = 3.0;
      else if (S.stage === 'p2') f = 2.0;
      else {
        var base = S.stage === 's' ? (S.fixed === 'no' ? 1.6 : 1.4) : (S.fixed === 'no' ? 1.8 : 1.6);
        f = base * (S.act === 'low' ? 0.85 : S.act === 'high' ? 1.25 : 1);
      }
    } else {
      if (S.stage === 'k') f = 2.5;
      else f = (S.fixed === 'no' ? 1.4 : 1.2) * (S.act === 'low' ? 0.9 : S.act === 'high' ? 1.15 : 1);
    }
    var R = rer(ideal), daily;
    if (mode === 'lose') { f = dog ? 1.0 : 0.8; }
    daily = r5(R * f);
    var treats = r5(daily * 0.10), food = daily - treats;

    var idealTxt = (Math.round(ideal * 10) / 10).toString();
    if (young()) {
      notes.push('Growing ' + (dog ? 'puppies' : 'kittens') + ' need more calories as they grow. Re-weigh every 2 to 4 weeks and run this calculator again.');
      if (S.bcs === 'over' || S.bcs === 'heavy') notes.push('Please don’t cut calories for a growing ' + (dog ? 'puppy' : 'kitten') + ' on your own. Ask your veterinarian if you’re worried about their weight.');
      if (S.bcs === 'thin') notes.push('If your ' + (dog ? 'puppy' : 'kitten') + ' seems thin or isn’t gaining, check in with your veterinarian.');
    } else if (mode === 'lose') {
      notes.push('This is a weight-loss starting point based on an ideal weight of about ' + idealTxt + ' lb. Aim for slow, steady loss of about 1% of body weight per week.');
      notes.push('Please check with your veterinarian before starting a weight-loss plan.' + (dog ? '' : ' Cats should never be put on a crash diet or go without eating.'));
    } else if (mode === 'trim') {
      notes.push('To trim gently, this feeds for an ideal weight of about ' + idealTxt + ' lb instead of the current weight.');
    } else if (mode === 'gain') {
      notes.push('This feeds for an ideal weight of about ' + idealTxt + ' lb to help add weight gradually. If weight loss happened without a clear reason, see your veterinarian.');
    }
    notes.push('Every pet is different. Weigh every 2 to 4 weeks and adjust portions by about 10% if weight moves the wrong way.');
    return { daily: daily, low: r5(daily * 0.9), high: r5(daily * 1.1), food: food, treats: treats, ideal: ideal, mode: mode, f: f, rer: R, notes: notes };
  }

  function defaultMeals() {
    if (S.stage === 'p1') return 4;
    if (S.stage === 'p2' || S.stage === 'k') return 3;
    return 2;
  }

  /* ---------------- product picks ---------------- */
  function dogSize() {
    if (S.sp !== 'dog') return '';
    if (S.stage === 'p1' || S.stage === 'p2') return S.size || 'm';
    var c = compute(), w = c.ideal;
    return w < 25 ? 's' : w > 50 ? 'l' : 'm';
  }

  function score(p) {
    var y = young(), sz = dogSize(), c = compute(), s = 0, why = [];
    var isP = p.st.indexOf('p') > -1;
    if (y) { if (!isP) return null; s += 60; why.push(S.sp === 'dog' ? 'Puppy formula' : 'Kitten formula'); }
    else {
      if (isP) return null;
      if (S.stage === 's') {
        if (p.st === 's') { s += 40; why.push('Senior formula'); }
        else if (p.st.indexOf('s') > -1) { s += 15; why.push('Adult & senior'); }
      } else {
        if (p.st.indexOf('a') < 0) return null;
        why.push('Adult formula');
      }
    }
    if (S.sp === 'dog') {
      if (p.sz === 's') { if (sz === 's') { s += 30; why.push('Small breed'); } else s -= 40; }
      if (p.sz === 'm') { if (sz === 's') s -= 20; else { s += 10; why.push('Medium & large breeds'); } }
      if (p.sz === 'l') { if (sz === 'l') { s += 35; why.push('Large breed puppy'); } else s -= (sz === 's' ? 40 : 10); }
    }
    var lose = !y && (c.mode === 'lose' || c.mode === 'trim');
    if (p.t.indexOf('wm') > -1) { if (lose) { s += 50; why.push('Weight management'); } else s -= 30; }
    if (p.t.indexOf('act') > -1 && (c.mode === 'gain' || S.act === 'high')) { s += 15; why.push('Meat-rich recipe'); }
    if (S.focus === 'dig') { if (p.t.indexOf('dig') > -1) { s += 40; why.push('Digestive support'); } }
    if (S.focus === 'skin') { if (p.t.indexOf('skin') > -1) { s += 40; why.push('Skin & coat'); } }
    if (S.fmt === 'dry' || S.fmt === 'wet' || S.fmt === 'fd') { if (p.f === S.fmt) s += 35; else s -= 15; }
    else if (S.fmt === 'any' && p.f === 'dry') s += 4;
    why.push(p.f === 'dry' ? 'Dry food' : p.f === 'wet' ? 'Wet food' : 'Air-dried / freeze-dried');
    return { p: p, s: s, why: why };
  }

  function picks() {
    var list = CATALOG.filter(function (p) { return p.sp === S.sp; }).map(score).filter(Boolean);
    list.sort(function (a, b) { return b.s - a.s || a.p.idx - b.p.idx; });
    function take(src, n, out, brands) {
      for (var i = 0; i < src.length && out.length < n; i++) {
        var x = src[i];
        if (out.indexOf(x) > -1) continue;
        if ((brands[x.p.b] || 0) >= 2) continue;
        out.push(x); brands[x.p.b] = (brands[x.p.b] || 0) + 1;
      }
      return out;
    }
    var out = [], brands = {};
    if (S.fmt === 'mix') {
      take(list.filter(function (x) { return x.p.f === 'dry'; }), 2, out, brands);
      take(list.filter(function (x) { return x.p.f === 'wet'; }), 4, out, brands);
    }
    take(list, 4, out, brands);
    if (out.length < 4) take(list, 4, out, {});
    return out;
  }

  /* ---------------- steps ---------------- */
  function vPet() { return S.sp ? '' : 'Choose dog or cat to continue.'; }
  function vAge() { if (!S.stage) return 'Choose an age to continue.'; if (S.sp === 'dog' && (S.stage === 'p1' || S.stage === 'p2') && !S.size) return 'Choose your puppy’s expected adult size.'; return ''; }
  function vBody() {
    var lb = num(S.lb);
    if (!(lb >= 0.5 && lb <= 250)) return 'Enter a weight between 0.5 and 250 pounds.';
    if (!S.bcs) return 'Choose the body shape that fits best.';
    if (S.ideal.trim()) { var i = num(S.ideal); if (!(i >= 0.5 && i <= 250)) return 'Ideal weight should be between 0.5 and 250 pounds, or leave it blank.'; }
    return '';
  }
  function vLife() { if (!S.fixed) return 'Let us know if ' + nm() + ' is spayed or neutered.'; if (!young() && !S.act) return 'Choose an activity level.'; return ''; }
  var VALID = { pet: vPet, age: vAge, body: vBody, life: vLife, food: function () { return ''; } };

  function sPet() {
    return '<p class="pf-q">Who are we feeding?</p><p class="pf-sub">Answer five quick questions and we’ll recommend a daily calorie target and foods we carry.</p>' +
      '<div class="pf-grid two">' + opt('sp', 'dog', 'Dog', 'Puppies, adults and seniors', true) + opt('sp', 'cat', 'Cat', 'Kittens, adults and seniors', true) + '</div>' +
      '<label class="pf-label" for="pf-name">Pet’s name (optional)</label><input id="pf-name" class="pf-input" data-in="name" type="text" maxlength="30" autocomplete="off" placeholder="e.g. Biscuit" value="' + esc(S.name) + '">';
  }
  function sAge() {
    var h = '<p class="pf-q">How old is ' + nm() + '?</p><p class="pf-sub">Age changes how many calories a pet needs.</p><div class="pf-grid">';
    if (S.sp === 'dog') {
      h += opt('stage', 'p1', 'Young puppy', 'Under 4 months') + opt('stage', 'p2', 'Puppy', '4 to 12 months') + opt('stage', 'a', 'Adult', '1 to 7 years') + opt('stage', 's', 'Senior', '7 years and up');
      h += '</div>';
      if (S.stage === 'p1' || S.stage === 'p2') {
        h += '<p class="pf-label">How big will your puppy be as an adult?</p><div class="pf-grid">' + opt('size', 's', 'Small', 'Under 25 lb') + opt('size', 'm', 'Medium', '25 to 50 lb') + opt('size', 'l', 'Large or giant', 'Over 50 lb') + '</div>';
      }
    } else {
      h += opt('stage', 'k', 'Kitten', 'Under 1 year') + opt('stage', 'a', 'Adult', '1 to 10 years') + opt('stage', 's', 'Senior', '11 years and up') + '</div>';
    }
    return h;
  }
  function sBody() {
    var y = young();
    var h = '<p class="pf-q">How much does ' + nm() + ' weigh?</p><p class="pf-sub">Use a recent weight from the vet or a home scale if you can.</p>' +
      '<div class="pf-inrow"><input class="pf-input" data-in="lb" type="text" inputmode="decimal" placeholder="Weight" aria-label="Weight in pounds" value="' + esc(S.lb) + '"><span class="pf-unit">lb</span></div>' +
      '<p class="pf-label">Which body shape fits best?</p><div class="pf-grid">' +
      opt('bcs', 'thin', 'Too thin', 'Ribs, spine or hip bones are easy to see') +
      opt('bcs', 'ideal', 'Just right', 'Ribs easy to feel, visible waist from above') +
      opt('bcs', 'heavy', 'A little heavy', 'Ribs hard to feel, waist hard to see') +
      opt('bcs', 'over', 'Overweight', 'Can’t feel ribs, belly rounds out or sags') + '</div>';
    if (!y && S.bcs && S.bcs !== 'ideal') {
      h += '<label class="pf-label" for="pf-ideal">Know ' + (S.name.trim() ? esc(S.name.trim()) + '’s' : 'your ' + pet() + '’s') + ' ideal weight? (optional)</label><p class="pf-sub" style="margin-bottom:8px">If your vet gave you a target weight, enter it. Otherwise we’ll estimate it.</p><div class="pf-inrow"><input id="pf-ideal" class="pf-input" data-in="ideal" type="text" inputmode="decimal" placeholder="Ideal weight" value="' + esc(S.ideal) + '"><span class="pf-unit">lb</span></div>';
    }
    return h;
  }
  function sLife() {
    var dog = S.sp === 'dog';
    var h = '<p class="pf-q">Tell us about ' + nm() + '’s lifestyle</p><p class="pf-sub">Spaying, neutering and activity all change daily calorie needs.</p>' +
      '<p class="pf-label">Spayed or neutered?</p><div class="pf-grid two">' + opt('fixed', 'yes', 'Yes', '') + opt('fixed', 'no', 'Not yet', '') + '</div>';
    if (!young()) {
      h += '<p class="pf-label">Activity level</p><div class="pf-grid">';
      if (dog) h += opt('act', 'low', 'Couch potato', 'Short walks, lots of naps') + opt('act', 'normal', 'Average', 'Daily walks and playtime') + opt('act', 'high', 'Very active', 'Running, hiking, field or sport work');
      else h += opt('act', 'low', 'Mostly napping', 'Rarely plays') + opt('act', 'normal', 'Typical indoor cat', 'Plays most days') + opt('act', 'high', 'Very active', 'Plays hard or goes outdoors');
      h += '</div>';
    }
    return h;
  }
  function sFood() {
    var dog = S.sp === 'dog';
    var h = '<p class="pf-q">What would you like to feed?</p><p class="pf-sub">We’ll use this to choose foods from our shelves.</p><div class="pf-grid">' +
      opt('fmt', 'dry', 'Dry food', 'Kibble') + opt('fmt', 'wet', 'Wet food', 'Cans, pouches, pate') +
      (dog ? opt('fmt', 'fd', 'Air-dried / freeze-dried', 'Raw-style nutrition, shelf stable') : '') +
      opt('fmt', 'mix', 'A mix of dry + wet', '') + opt('fmt', 'any', 'No preference', 'Show me the best fit') + '</div>';
    if (dog) {
      h += '<p class="pf-label">Anything special to focus on?</p><div class="pf-grid">' + opt('focus', 'none', 'Nothing special', '') + opt('focus', 'dig', 'Sensitive stomach', 'Digestive support') + opt('focus', 'skin', 'Skin & coat', 'Itchy skin, dull coat') + '</div>';
    }
    return h;
  }

  function amountText(foodKcal, k, f) {
    var per = f === 'dry' ? 'cup' : 'can';
    var n = foodKcal / k;
    var q = Math.round(n * 4) / 4;
    var unit = per + (q === 1 ? '' : 's');
    if (f === 'dry') return 'About <b>' + q + ' ' + unit + '</b> per day';
    return 'About <b>' + q + ' ' + unit + '</b> per day (if feeding only this food)';
  }

  function sResult() {
    var c = compute(), dog = S.sp === 'dog';
    if (!S.meals) S.meals = defaultMeals();
    var who = S.name.trim() ? esc(S.name.trim()) + '’s' : 'Your ' + pet() + '’s';
    var h = '<div class="pf-hero"><p class="pf-ht">' + who + ' daily calorie target</p><div class="pf-k">' + fmtN(c.daily) + ' <span>kcal / day</span></div>' +
      '<p>Typical range ' + fmtN(c.low) + ' to ' + fmtN(c.high) + ' kcal. Start here and adjust based on weigh-ins.</p></div>' +
      '<div class="pf-stats"><div class="pf-stat"><strong>' + fmtN(c.food) + '</strong><span>kcal from meals</span></div>' +
      '<div class="pf-stat"><strong>' + fmtN(c.treats) + '</strong><span>kcal max for treats (10%)</span></div>' +
      '<div class="pf-stat"><strong id="pf-permeal">' + fmtN(c.food / S.meals) + '</strong><span id="pf-permeal-l">kcal per meal (' + S.meals + ' meals)</span></div></div>' +
      '<div class="pf-notes">' + c.notes.map(function (n) { return '<p>' + n + '</p>'; }).join('') + '</div>';

    h += '<div class="pf-sec"><h3>How much is that in cups or cans?</h3><p class="pf-sub">Find “Calorie Content” on the bag or can and enter the kcal per cup or per can.</p><div class="pf-conv">' +
      '<div class="pf-inrow"><input class="pf-input" data-in="dens" type="text" inputmode="decimal" placeholder="e.g. 400" aria-label="Calories per cup or can" value="' + esc(S.dens) + '" style="max-width:160px"><span class="pf-unit">kcal per</span>' +
      '<span class="pf-seg"><button type="button" data-k="unit" data-v="cup" aria-pressed="' + (S.unit === 'cup') + '">Cup</button><button type="button" data-k="unit" data-v="can" aria-pressed="' + (S.unit === 'can') + '">Can / pouch</button></span></div>' +
      '<p class="pf-label" style="margin-top:14px">Meals per day</p><span class="pf-seg">' + [1, 2, 3, 4].map(function (m) { return '<button type="button" data-k="meals" data-v="' + m + '" aria-pressed="' + (S.meals === m) + '">' + m + '</button>'; }).join('') + '</span>' +
      '<div class="pf-out" id="pf-out" aria-live="polite">' + convText(c) + '</div></div></div>';

    var ps = picks();
    h += '<div class="pf-sec"><h3>Foods we recommend for ' + nm() + '</h3><p class="pf-sub">Hand-picked from the Pawstock shelves based on your answers.' + (S.fmt === 'mix' ? ' If mixing, split the meal calories between the dry and wet food.' : '') + '</p><div class="pf-prods">';
    ps.forEach(function (x) {
      var p = x.p;
      h += '<div class="pf-prod"><div class="pf-img">' + (p.i ? '<img src="' + esc(p.i) + '" alt="' + esc(p.n) + '" loading="lazy">' : PAW) + '</div><b>' + esc(p.n) + '</b><div class="pf-chips">' +
        x.why.map(function (w) { return '<span class="pf-chip">' + w + '</span>'; }).join('') + '</div>' +
        (p.k ? '<div class="pf-amt">' + amountText(c.food, p.k, p.f) + '</div>' : '') +
        '<a class="pf-btn sm" href="' + esc(p.u) + '">View at Pawstock</a></div>';
    });
    h += '</div></div>';

    h += '<div class="pf-help"><p>Want a second opinion? Our team is happy to help you choose.<br>Call <a href="tel:' + PHONE.replace(/[^0-9]/g, '') + '">' + PHONE + '</a> or visit 665 S. Eastwood Dr., Woodstock.</p>' +
      '<div class="pf-acts"><button type="button" class="pf-btn sm pink" data-act="copy">Copy my plan</button><button type="button" class="pf-btn sm ghost" data-act="back">Edit answers</button><button type="button" class="pf-btn sm ghost" data-act="restart">Start over</button></div></div>' +
      '<p class="pf-fine" id="pf-copied" aria-live="polite"></p>' +
      '<p class="pf-fine">How we calculate: resting energy = 70 × (ideal body weight in kg)<sup>0.75</sup>, multiplied by a standard life-stage and activity factor (' + c.f.toFixed(2) + ' for ' + nm() + '). This is a starting estimate for healthy pets, not a veterinary prescription. Pets with medical conditions, or that are pregnant or nursing, should have a feeding plan from their veterinarian. Always choose a food whose AAFCO statement matches your pet’s life stage. Method based on the <a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/" target="_blank" rel="noopener">AAHA nutrition guidelines</a>.</p>';
    return h;
  }

  function convText(c) {
    var d = num(S.dens);
    if (!S.dens.trim()) return '<span style="color:var(--mu)">Enter the calories from the label to see the daily amount.</span>';
    if (!(d > 0 && d <= 2000)) return '<span style="color:#b3261e;font-weight:700">Enter a calorie amount between 1 and 2,000.</span>';
    var per = S.unit === 'cup' ? 'cup' : 'can';
    var day = c.food / d, meal = day / S.meals;
    function q(n) { return Math.round(n * 100) / 100; }
    return 'Feed about <strong>' + q(day) + ' ' + per + (q(day) === 1 ? '' : 's') + '</strong> per day, or <strong>' + q(meal) + '</strong> per meal across ' + S.meals + ' meal' + (S.meals === 1 ? '' : 's') + '.' + (S.unit === 'cup' ? '<br><span style="font-size:13px;color:var(--mu)">Use a standard 8 oz measuring cup, not a scoop or mug.</span>' : '');
  }

  function summary() {
    var c = compute();
    var lines = ['Pawstock Feeding Plan' + (S.name.trim() ? ' for ' + S.name.trim() : ''), (S.sp === 'dog' ? 'Dog' : 'Cat') + ', ' + num(S.lb) + ' lb',
      'Daily calories: ' + fmtN(c.daily) + ' kcal (range ' + fmtN(c.low) + '-' + fmtN(c.high) + ')',
      'From meals: ' + fmtN(c.food) + ' kcal / Treats: up to ' + fmtN(c.treats) + ' kcal'];
    var d = num(S.dens);
    if (d > 0) lines.push('Current food: ' + (Math.round(c.food / d * 100) / 100) + ' ' + (S.unit === 'cup' ? 'cups' : 'cans') + ' per day');
    lines.push('Recommended foods:');
    picks().forEach(function (x) { lines.push('- ' + x.p.n + ' ' + x.p.u); });
    lines.push('Questions? Pawstock ' + PHONE);
    return lines.join(String.fromCharCode(10));
  }

  /* ---------------- render & events ---------------- */
  function render(scroll) {
    var key = STEPS[step], total = 5;
    var body = key === 'pet' ? sPet() : key === 'age' ? sAge() : key === 'body' ? sBody() : key === 'life' ? sLife() : key === 'food' ? sFood() : sResult();
    var prog = key === 'result' ? '' : '<div class="pf-prog"><div class="pf-prog-row"><span>Step ' + (step + 1) + ' of ' + total + '</span><span>' + Math.round(step / total * 100) + '% done</span></div><div class="pf-bar"><span style="width:' + Math.max(6, step / total * 100) + '%"></span></div></div>';
    var nav = key === 'result' ? '' : '<p class="pf-err" id="pf-err" role="alert"></p><div class="pf-nav">' + (step > 0 ? '<button type="button" class="pf-btn ghost" data-act="back">Back</button>' : '<span></span>') +
      '<button type="button" class="pf-btn" data-act="next">' + (key === 'food' ? 'See my results' : 'Next') + '</button></div>';
    root.innerHTML = '<div id="psfg"><div class="pf-card"><div class="pf-head"><img src="' + LOGO + '" alt="Pawstock"><div><h2>Pawstock Feeding Calculator</h2><p>Find the right daily calories and foods for your dog or cat.</p></div></div>' + prog + '<div class="pf-body">' + body + nav + '</div></div></div>';
    if (scroll) {
      var top = root.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.6) { try { root.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { root.scrollIntoView(); } }
    }
  }

  function go(d) {
    var key = STEPS[step];
    if (d > 0 && VALID[key]) {
      var msg = VALID[key]();
      if (msg) { var e = root.querySelector('#pf-err'); if (e) e.textContent = msg; return; }
    }
    step = Math.max(0, Math.min(STEPS.length - 1, step + d));
    render(true);
  }

  function onClick(e) {
    var t = e.target.closest ? e.target.closest('[data-k],[data-act]') : null;
    if (!t || !root.contains(t)) return;
    var act = t.getAttribute('data-act');
    if (act) {
      e.preventDefault();
      if (act === 'next') go(1);
      else if (act === 'back') go(-1);
      else if (act === 'restart') { reset(); render(true); }
      else if (act === 'copy') copyPlan();
      return;
    }
    var k = t.getAttribute('data-k'), v = t.getAttribute('data-v');
    if (k === 'meals') v = parseInt(v, 10);
    if (k === 'sp' && S.sp !== v) { var keepName = S.name; reset(); S.name = keepName; }
    if (k === 'stage' && S.stage !== v) { S.size = null; S.meals = null; }
    S[k] = v;
    var y = window.pageYOffset;
    render(false);
    window.scrollTo(window.pageXOffset, y);
  }

  function onInput(e) {
    var k = e.target.getAttribute && e.target.getAttribute('data-in');
    if (!k) return;
    S[k] = e.target.value;
    var err = root.querySelector('#pf-err'); if (err) err.textContent = '';
    if (k === 'dens') { var o = root.querySelector('#pf-out'); if (o) o.innerHTML = convText(compute()); }
  }

  function onKey(e) {
    if (e.key === 'Enter' && e.target.getAttribute && e.target.getAttribute('data-in') && STEPS[step] !== 'result') { e.preventDefault(); go(1); }
  }

  function copyPlan() {
    var txt = summary(), out = root.querySelector('#pf-copied');
    function done(ok) { if (out) out.textContent = ok ? 'Plan copied. Paste it into a note or text message.' : ''; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { done(true); }, function () { window.prompt('Copy your feeding plan:', txt); });
    else window.prompt('Copy your feeding plan:', txt);
  }

  function onImgError(e) {
    var t = e.target;
    if (t && t.tagName === 'IMG' && t.parentNode && t.parentNode.className === 'pf-img') t.parentNode.innerHTML = PAW;
  }

  function init(el) {
    root = el;
    root.setAttribute('data-ready', '1');
    if (!document.getElementById('psfg-style')) {
      var st = document.createElement('style'); st.id = 'psfg-style'; st.textContent = CSS;
      (document.head || document.documentElement).appendChild(st);
    }
    reset();
    if (!root.__psfgBound) {
      root.__psfgBound = true;
      root.addEventListener('click', onClick);
      root.addEventListener('input', onInput);
      root.addEventListener('keydown', onKey);
      root.addEventListener('error', onImgError, true);
    }
    render(false);
  }

  function boot() {
    var el = document.getElementById('psfg-root');
    if (!el) return false;
    if (el.getAttribute('data-ready') === '1' && el.querySelector('#psfg')) return true;
    if (el.getAttribute('data-ready') === '1') el.removeAttribute('data-ready');
    if (el.getAttribute('data-ready') !== '1') { try { init(el); } catch (err) { el.innerHTML = '<p style="font-family:Arial,sans-serif;padding:20px;text-align:center">The feeding calculator could not load. Please call us at ' + PHONE + '.</p>'; if (window.console) console.error('Pawstock calculator', err); } }
    return true;
  }
  boot();
  if (window.MutationObserver) new MutationObserver(function () { boot(); }).observe(document.documentElement, { childList: true, subtree: true });
  setInterval(boot, 1000);
})();
