/* Pawstock Feeding Calculator v10 - hosted on GitHub, loaded by one line in Ecwid Custom JavaScript code.
   Page section needs only: <div id="psfg-root"></div> */
(function () {
  'use strict';

  /* ===================== SETTINGS ===================== */
  var KLAVIYO_PUBLIC_KEY = 'U4HTZV';          /* Klaviyo > Settings > API keys > Public API key (6 characters). Leave '' to hide the Klaviyo text form. */
  var KLAVIYO_LIST_ID = 'SyRdW4';             /* Klaviyo list ID for calculator SMS sign-ups */
  var KLAVIYO_EVENT = 'Feeding Plan Created';
  var STORE = 'https://www.pawstock.pet/products/';
  var PAGE_URL = 'pawstock.pet/idealweight';
  var PHONE = '224-457-3893';
  var LOGO = 'https://dhgf5mcbrms62.cloudfront.net/105364568/header-qUuT6N/x8dHNV6-200x200.webp';
  var IMG = 'https://d2j6dbq0eux0bg.cloudfront.net/images/105364568/';

  /* Product lines from Lightspeed sales Aug-Oct 2026 (online + in stock).
     [name, species, format dry|wet|fd, stages p=growth a=adult s=senior, dog size s|m|l, tags wm dig skin act, units sold, sizes [[url slug, size in oz, multipack]], image] */
  var DATA = [["Fussie Cat Premium Tuna with Salmon in Aspic Cat Food","cat","wet","pas","","",245,[["fussie-cat-premium-tuna-with-salmon-in-aspic-cat-food-2-82-oz",2.82,0]],"~products/836277182/5772685185.png"],["Fussie Cat Premium Tuna w/ Chicken in Apsic","cat","wet","pas","","",231,[["fussie-cat-premium-tuna-w-chicken-in-apsic-2-82-oz",2.82,0]],""],["Fussie Cat Premium Tuna with Salmon in Aspic Pouch","cat","wet","pas","","",228,[["fussie-cat-premium-tuna-with-salmon-in-aspic-pouch-2-47-oz",2.47,0]],""],["Weruva Cats in the Kitchen Mack Jack & Sam Mackerel, Salmon & Tuna Grain-Free Wet Cat Food Pouch","cat","wet","as","","",182,[["weruva-cats-in-the-kitchen-mack-jack--sam-mackerel-salmon--tuna-grain-free-wet-cat-food-pouch-3-oz",3.0,0]],""],["Fussie Cat Tuna With Salmon In Goat Milk","cat","wet","pas","","",181,[["fussie-cat-tuna-with-salmon-in-goat-milk-2-47-oz",2.47,0]],""],["Fromm Four-Star Whitefish & Potato Dry Dog Food","dog","dry","as","","",177,[["fromm-four-star-whitefish--potato-dry-dog-food-26-lb",416.0,0],["fromm-four-star-whitefish--potato-dry-dog-food-12-lb",192.0,0],["fromm-four-star-whitefish--potato-dry-dog-food-4-lb",64.0,0]],""],["Fussie Cat Tuna Oceanfish In Goat Milk","cat","wet","pas","","",176,[["fussie-cat-tuna-oceanfish-in-goat-milk-2-47-oz",2.47,0]],""],["Fromm Grain-Free Turkey & Pumpkin Pate Wet Dog Food","dog","wet","as","","",175,[["fromm-grain-free-turkey--pumpkin-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fromm Adult Gold Dry Dog Food","dog","dry","as","","",173,[["fromm-adult-gold-dry-dog-food-30-lb",480.0,0],["fromm-adult-gold-dry-dog-food-15-lb",240.0,0],["fromm-adult-gold-dry-dog-food-5-lb",80.0,0]],""],["Fussie Cat Premium Tuna with Small Anchovies Aspic Pouch","cat","wet","pas","","",165,[["fussie-cat-premium-tuna-with-small-anchovies-aspic-pouch-2-47-oz",2.47,0]],""],["Fussie Cat Premium Tuna with Oceanfish in Aspic Pouch","cat","wet","pas","","",129,[["fussie-cat-premium-tuna-with-oceanfish-in-aspic-pouch-2-47-oz",2.47,0]],""],["Fussie Cat Chicken with Beef in Goat Milk","cat","wet","pas","","",112,[["fussie-cat-chicken-with-beef-in-goat-milk-2-47-oz",2.47,0]],""],["Fromm Chicken/Duck/Salmon Pate Wet Cat Food","cat","wet","as","","",111,[["fromm-chicken-duck-salmon-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fromm Salmon/Tuna Pate Wet Cat Food","cat","wet","as","","",111,[["fromm-salmon-tuna-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fussie Cat Black Label Tuna with Oceanfish in Gravy","cat","wet","pas","","",104,[["fussie-cat-black-label-tuna-with-oceanfish-in-gravy-2-82-oz",2.82,0]],"~products/804857762/6271326638.png"],["Fromm Grain-Free Chicken & Sweet Potato Pate Wet Dog Food","dog","wet","as","","",103,[["fromm-grain-free-chicken--sweet-potato-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fromm Puppy Gold Dry Dog Food","dog","dry","p","","",103,[["fromm-puppy-gold-dry-dog-food-30-lb",480.0,0],["fromm-puppy-gold-dry-dog-food-15-lb",240.0,0],["fromm-puppy-gold-dry-dog-food-5-lb",80.0,0]],"~4426242267.png"],["Fussie Cat Chicken with Duck in Goat Milk","cat","wet","pas","","",103,[["fussie-cat-chicken-with-duck-in-goat-milk-2-47-oz",2.47,0]],""],["Fussie Cat Premium Tuna with Chicken in Aspic Pouch","cat","wet","pas","","",103,[["fussie-cat-premium-tuna-with-chicken-in-aspic-pouch-2-47-oz",2.47,0]],""],["Weruva Cats in the Kitchen 1 If By Land, 2 If By Sea Tuna, Beef & Salmon Recipe Grain-Free Cat Food Pouches","cat","wet","as","","",94,[["weruva-cats-in-the-kitchen-1-if-by-land-2-if-by-sea-tuna-beef--salmon-recipe-grain-free-cat-food-pouches-3-oz-pouch",3.0,0]],""],["Zignature Turkey Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",91,[["zignature-turkey-limited-ingredient-formula-dry-dog-food",0,0]],""],["Fromm Adult Gold Large Breed Dry Dog Food","dog","dry","as","m","",87,[["fromm-adult-gold-large-breed-dry-dog-food-30-lb",480.0,0],["fromm-adult-gold-large-breed-dry-dog-food-15-lb",240.0,0],["fromm-adult-gold-large-breed-dry-dog-food-5-lb",80.0,0]],""],["Fussie Cat Premium Tuna w/ Shrimp","cat","wet","pas","","",84,[["fussie-cat-premium-tuna-w-shrimp-2-82-oz",2.82,0]],""],["Fussie Cat Premium Tuna with Shrimp in Aspic Pouch","cat","wet","pas","","",83,[["fussie-cat-premium-tuna-with-shrimp-in-aspic-pouch-2-47-oz",2.47,0]],""],["Fromm Digestive Support Pate Wet Dog Food","dog","wet","as","","dig",82,[["fromm-digestive-support-pate-wet-dog-food-13-oz",13.0,0]],""],["Fussie Cat Tuna with Chicken in Goat Milk","cat","wet","pas","","",82,[["fussie-cat-tuna-with-chicken-in-goat-milk-2-47-oz",2.47,0]],""],["Fromm Kitten Gold Chicken / Duck Wet Cat Food","cat","wet","p","","",79,[["fromm-kitten-gold-chicken-duck-wet-cat-food-5-oz",5.0,0]],"~5003527020.jpg"],["Weruva OMG Selfie Cam! Chicken & Lamb Wet Cat Food","cat","wet","as","","",78,[["weruva-omg-selfie-cam-chicken--lamb-wet-cat-food-2-8-oz",2.8,0]],""],["Farmina N&D Pumpkin Venison & Pumpkin Wet Cat Food","cat","wet","as","","",77,[["farmina-nd-pumpkin-venison--pumpkin-wet-cat-food-2-46-oz-can",2.46,0]],""],["Fussie Cat Black Label Tuna with Salmon in Gravy","cat","wet","pas","","",77,[["fussie-cat-black-label-tuna-with-salmon-in-gravy",NaN,0]],"~products/851768536/6271332873.png"],["Fussie Cat Chicken In Goat Milk","cat","wet","pas","","",77,[["fussie-cat-chicken-in-goat-milk-2-47-oz",2.47,0]],""],["Fussie Cat Fine Dining Mousse Mackerel with Pumpkin Entr\u00e9e","cat","wet","pas","","",77,[["fussie-cat-fine-dining-mousse-mackerel-with-pumpkin-entree-2-47-oz",2.47,0]],""],["Weruva OMG Lots-O-Luck! Duck & Tuna Wet Cat Food","cat","wet","as","","",73,[["weruva-omg-lots-o-luck-duck--tuna-wet-cat-food-2-8-oz",2.8,0]],""],["Weruva OMG Love Munchkin! Chicken & Pumpkin Wet Cat Food","cat","wet","as","","",73,[["weruva-omg-love-munchkin-chicken--pumpkin-wet-cat-food-2-8-oz",2.8,0]],""],["Zignature Freeze-Dried Turkey Entr\u00e9e Dog Food","dog","fd","as","","",73,[["zignature-freeze-dried-turkey-entree-dog-food-4-oz",4.0,0],["zignature-freeze-dried-turkey-entree-dog-food-25-oz",25.0,0],["zignature-freeze-dried-turkey-entree-dog-food-12-5-oz",12.5,0]],""],["Fromm Grain-Free Chicken Pate Wet Dog Food","dog","wet","as","","",72,[["fromm-grain-free-chicken-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Weruva OMG Best Day Eva! Beef & Salmon Wet Cat Food","cat","wet","as","","",68,[["weruva-omg-best-day-eva-beef--salmon-wet-cat-food-2-8-oz",2.8,0]],""],["Fromm Four-Star Salmon A La Veg Dry Dog Food","dog","dry","as","","",67,[["fromm-four-star-salmon-a-la-veg-dry-dog-food-26-lb",416.0,0],["fromm-four-star-salmon-a-la-veg-dry-dog-food-12-lb",192.0,0],["fromm-four-star-salmon-a-la-veg-dry-dog-food-4-lb",64.0,0]],""],["Fromm Grain-Free Chicken & Duck Pate Wet Dog Food","dog","wet","as","","",66,[["fromm-grain-free-chicken--duck-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fromm Chicken Pate Wet Cat Food","cat","wet","as","","",65,[["fromm-chicken-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fussie Cat Black Label Tuna with Prawns in Gravy","cat","wet","pas","","",64,[["fussie-cat-black-label-tuna-with-prawns-in-gravy-2-82-oz",2.82,0]],"~products/804842750/6271326656.png"],["Farmina N&D Pumpkin Lamb, Pumpkin & Blueberry Wet Cat Food","cat","wet","as","","",63,[["farmina-nd-pumpkin-lamb-pumpkin--blueberry-wet-cat-food-2-46-oz-can",2.46,0]],"~4624295448.png"],["Fromm Beef & Barley P\u00e2t\u00e9 Wet Dog Food","dog","wet","as","","",63,[["fromm-beef--barley-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fussie Cat Fine Dining Mousse Chicken with Pumpkin Entr\u00e9e","cat","wet","pas","","",62,[["fussie-cat-fine-dining-mousse-chicken-with-pumpkin-entree-2-47-oz",2.47,0]],""],["Zignature Freeze-Dried Duck Entr\u00e9e Dog Food","dog","fd","as","","",62,[["zignature-freeze-dried-duck-entree-dog-food-4-oz",4.0,0],["zignature-freeze-dried-duck-entree-dog-food-25-oz",25.0,0],["zignature-freeze-dried-duck-entree-dog-food-12-5-oz",12.5,0]],""],["Fromm Four-Star Pork & Applesauce Dry Dog Food","dog","dry","as","","",60,[["fromm-four-star-pork--applesauce-dry-dog-food-26-lb",416.0,0],["fromm-four-star-pork--applesauce-dry-dog-food-4-lb",64.0,0],["fromm-four-star-pork--applesauce-dry-dog-food-12-lb",192.0,0]],""],["Weruva OMG Crazy 4 U Chicken & Salmon Wet Cat Food","cat","wet","as","","",60,[["weruva-omg-crazy-4-u-chicken--salmon-wet-cat-food-2-8-oz",2.8,0]],""],["Fromm Grain-Free Whitefish & Lentil Pat\u00e9 Wet Dog Food","dog","wet","as","","",59,[["fromm-grain-free-whitefish--lentil-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fromm Weight Management Gold Dry Dog Food","dog","dry","as","","wm",59,[["fromm-weight-management-gold-dry-dog-food-15-lb",240.0,0],["fromm-weight-management-gold-dry-dog-food-30-lb",480.0,0],["fromm-weight-management-gold-dry-dog-food-5-lb",80.0,0]],"~4452736883.png"],["Dave's Cat Saucey Pate Chicken","cat","wet","as","","",57,[["daves-cat-saucey-pate-chicken-5-5-oz",5.5,0]],""],["Dave's Cat Turkey Pate","cat","wet","as","","",57,[["daves-cat-turkey-pate-12-5-oz",12.5,0],["daves-cat-turkey-pate-5-5-oz",5.5,0]],""],["Nulo Freestyle Shredded Chicken & Duck","cat","wet","as","","",57,[["nulo-freestyle-shredded-chicken--duck-3-oz",3.0,0]],"~5195830343.png"],["Dave's Cat Chicken Pate","cat","wet","as","","",56,[["daves-cat-chicken-pate-12-5-oz",12.5,0],["daves-cat-chicken-pate-5-5-oz",5.5,0]],""],["Weruva OMG QT Patootie! Chicken & Turkey Wet Cat Food","cat","wet","as","","",56,[["weruva-omg-qt-patootie-chicken--turkey-wet-cat-food-2-8-oz",2.8,0]],""],["Zignature Freeze-Dried Venison Entr\u00e9e Dog Food","dog","fd","as","","",56,[["zignature-freeze-dried-venison-entree-dog-food-4-oz",4.0,0],["zignature-freeze-dried-venison-entree-dog-food-25-oz",25.0,0],["zignature-freeze-dried-venison-entree-dog-food-12-5-oz",12.5,0]],""],["Weruva Dog Funky Chunky Wet Dog Food","dog","wet","as","","",55,[["weruva-dog-funky-chunky-wet-dog-food-14-oz",14.0,0]],""],["Zignature Pork Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",55,[["zignature-pork-limited-ingredient-formula-dry-dog-food",0,0]],""],["Dave's Cat Turkey & Giblet Pate","cat","wet","as","","",54,[["daves-cat-turkey--giblet-pate-12-5-oz",12.5,0],["daves-cat-turkey--giblet-pate-5-5-oz",5.5,0]],""],["Farmina N&D Ocean Trout, Salmon & Shrimp Wet Cat Food","cat","wet","as","","",53,[["farmina-nd-ocean-trout-salmon--shrimp-wet-cat-food-2-46-oz-can",2.46,0]],"~4593838663.png"],["Fromm Venison & Beef Pate Wet Dog Food","dog","wet","as","","",52,[["fromm-venison--beef-pate-wet-dog-food-12-2-oz",12.2,0]],""],["Fussie Cat Black Label Tuna with Small Anchovies in Gravy","cat","wet","pas","","",50,[["fussie-cat-black-label-tuna-with-small-anchovies-in-gravy-2-82-oz",2.82,0]],"~products/804857766/6271343294.png"],["Stella and Chewy's Lil' Bites Savory Stew for Dogs Beef & Chicken in Broth","dog","wet","as","","",50,[["stella-and-chewys-lil-bites-savory-stew-for-dogs-beef--chicken-in-broth-2-7-oz",2.7,0]],""],["Weruva Dog Paw Lickin' Chicken Wet Dog Food","dog","wet","as","","",50,[["weruva-dog-paw-lickin-chicken-wet-dog-food-14-oz",14.0,0]],""],["Weruva Dog Steak Frites Wet Dog Food","dog","wet","as","","",50,[["weruva-dog-steak-frites-wet-dog-food-14-oz",14.0,0]],""],["Zignature Freeze-Dried Kangaroo Entr\u00e9e Dog Food","dog","fd","as","","",50,[["zignature-freeze-dried-kangaroo-entree-dog-food-4-oz",4.0,0],["zignature-freeze-dried-kangaroo-entree-dog-food-12-5-oz",12.5,0]],""],["Nulo Freestyle Minced Salmon & Turkey","cat","wet","as","","",49,[["nulo-freestyle-minced-salmon--turkey-3-oz",3.0,0]],"~5195808071.png"],["Nulo Freestyle Minced Turkey & Duck","cat","wet","as","","",49,[["nulo-freestyle-minced-turkey--duck-3-oz",3.0,0]],"~5195808151.png"],["Fussie Cat Fine Dining Chicken Pate","cat","wet","pas","","",48,[["fussie-cat-fine-dining-chicken-pate-2-82-oz",2.82,0]],""],["Rawz Goat's Milk 96% Chicken & Chicken Liver Dog Food","dog","wet","as","","act",46,[["rawz-goats-milk-96-chicken--chicken-liver-dog-food-12-5-oz",12.5,0]],""],["Fromm Kitten Gold Chicken/Duck Wet Cat Food","cat","wet","p","","",45,[["fromm-kitten-gold-chicken-duck-wet-cat-food-3-oz",3.0,0]],"~products/812913857/5591006448.png"],["Weruva Pumpkin Patch Up! Wet Cat Food Pouch","cat","wet","as","","",45,[["weruva-pumpkin-patch-up-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Weruva OMG Chicken Cloud 9 Wet Cat Food","cat","wet","as","","",44,[["weruva-omg-chicken-cloud-9-wet-cat-food-2-8-oz",2.8,0]],""],["Farmina N&D Quinoa Digestion Lamb Wet Cat Food","cat","wet","as","","dig",43,[["farmina-nd-quinoa-digestion-lamb-wet-cat-food-2-8-oz-can",2.8,0]],""],["Fromm Adult Gold Small Breed Dry Dog Food","dog","dry","as","s","",43,[["fromm-adult-gold-small-breed-dry-dog-food-5-lb",80.0,0],["fromm-adult-gold-small-breed-dry-dog-food-15-lb",240.0,0]],""],["Fussie Cat Premium Tuna with Chicken in Gravy Pouch","cat","wet","pas","","",43,[["fussie-cat-premium-tuna-with-chicken-in-gravy-pouch-2-47-oz",2.47,0]],""],["Weruva OMG Chicken & Duck Dream Team Wet Cat Food","cat","wet","as","","",43,[["weruva-omg-chicken--duck-dream-team-wet-cat-food-2-8-oz",2.8,0]],""],["Fromm Chicken/Duck Pate Wet Cat Food","cat","wet","as","","",42,[["fromm-chicken-duck-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fussie Cat Fine Dining Mousse Sardine with Pumpkin Entr\u00e9e","cat","wet","pas","","",41,[["fussie-cat-fine-dining-mousse-sardine-with-pumpkin-entree-2-47-oz",2.47,0]],""],["Zignature Whitefish Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",41,[["zignature-whitefish-limited-ingredient-formula-dry-dog-food",0,0]],""],["Fromm Four-Star Chicken A La Veg Dry Dog Food","dog","dry","as","","",40,[["fromm-four-star-chicken-a-la-veg-dry-dog-food-26-lb",416.0,0],["fromm-four-star-chicken-a-la-veg-dry-dog-food-12-lb",192.0,0],["fromm-four-star-chicken-a-la-veg-dry-dog-food-4-lb",64.0,0]],""],["Fussie Cat Premium Chicken in Gravy Pouch","cat","wet","pas","","",40,[["fussie-cat-premium-chicken-in-gravy-pouch-2-47-oz",2.47,0]],""],["Fromm Adult Classic Dry Dog Food","dog","dry","as","","",39,[["fromm-adult-classic-dry-dog-food-30-lb",480.0,0],["fromm-adult-classic-dry-dog-food-5-lb",80.0,0]],"~products/833639681/5746753401.jpg"],["Fussie Cat Market Fresh Chicken & Turkey","cat","dry","as","","",39,[["fussie-cat-market-fresh-chicken--turkey-3-5-lb",56.0,0],["fussie-cat-market-fresh-chicken--turkey-10lb",160.0,0]],""],["Dave's Cat Beef & Chicken Pate","cat","wet","as","","",38,[["daves-cat-beef--chicken-pate-12-5-oz",12.5,0]],""],["Fussie Cat Tuna with Small Anchovies in Goat Milk","cat","wet","pas","","",38,[["fussie-cat-tuna-with-small-anchovies-in-goat-milk-2-47-oz",2.47,0]],""],["Farmina N&D Ocean Cod, Shrimp & Pumpkin Wet Cat Food","cat","wet","as","","",36,[["farmina-nd-ocean-cod-shrimp--pumpkin-wet-cat-food-2-46-oz-can",2.46,0]],"~4454184807.png"],["Fussie Cat Fine Dining Mousse Tuna with Pumpkin Entr\u00e9e","cat","wet","pas","","",36,[["fussie-cat-fine-dining-mousse-tuna-with-pumpkin-entree-2-47-oz",2.47,0]],""],["Weruva OMG Chicken Charge Me Up Wet Cat Food Pouch","cat","wet","as","","",36,[["weruva-omg-chicken-charge-me-up-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Zignature Duck Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",36,[["zignature-duck-limited-ingredient-formula-dry-dog-food",0,0]],""],["Zignature Pork Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",36,[["zignature-pork-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Dave's Cat Saucey Pate Chicken & Duck","cat","wet","as","","",34,[["daves-cat-saucey-pate-chicken--duck-5-5-oz",5.5,0]],""],["Dave's Cat Tuna & Salmon in Aspic","cat","wet","as","","",34,[["daves-cat-tuna--salmon-in-aspic-5-5-oz",5.5,0]],""],["Weruva OMG Chicken & Turkey Text Me Wet Cat Food Pouch","cat","wet","as","","",34,[["weruva-omg-chicken--turkey-text-me-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Farmina N&D Pumpkin Boar, Pumpkin & Apple Wet Cat Food","cat","wet","as","","",33,[["farmina-nd-pumpkin-boar-pumpkin--apple-wet-cat-food-2-46-oz-can",2.46,0]],"~4604761071.png"],["Fromm Four-Star Grain-Free Game Bird Dry Cat Food","cat","dry","as","","",33,[["fromm-four-star-grain-free-game-bird-dry-cat-food-10-lb",160.0,0],["fromm-four-star-grain-free-game-bird-dry-cat-food-4-lb",64.0,0]],""],["Fromm Puppy Gold Large Breed Dry Dog Food","dog","dry","p","l","",33,[["fromm-puppy-gold-large-breed-dry-dog-food-30-lb",480.0,0],["fromm-puppy-gold-large-breed-dry-dog-food-15-lb",240.0,0],["fromm-puppy-gold-large-breed-dry-dog-food-5-lb",80.0,0]],"~4426409251.jpg"],["Dave's Cat Saucey Pate Chicken & Tuna","cat","wet","as","","",32,[["daves-cat-saucey-pate-chicken--tuna-5-5-oz",5.5,0]],""],["Dave's Cat Tuna Entree in Gravy","cat","wet","as","","",32,[["daves-cat-tuna-entree-in-gravy-5-5-oz",5.5,0]],""],["Weruva OMG Tuna & Salmon Sweet Cheeks Wet Cat Food Pouch","cat","wet","as","","",32,[["weruva-omg-tuna--salmon-sweet-cheeks-wet-cat-food-pouch-3-oz",3.0,0]],""],["Zignature Puppy Limited Ingredient Formula Dry Dog Food","dog","dry","p","","",32,[["zignature-puppy-limited-ingredient-formula-dry-dog-food",0,0]],""],["Fromm Four-Star Grain-Free Beef Frittata Veg Dry Dog Food","dog","dry","as","","",31,[["fromm-four-star-grain-free-beef-frittata-veg-dry-dog-food-4-lb",64.0,0],["fromm-four-star-grain-free-beef-frittata-veg-dry-dog-food-26-lb",416.0,0],["fromm-four-star-grain-free-beef-frittata-veg-dry-dog-food-12-lb",192.0,0]],""],["Rawz Goat's Milk 96% Beef & Beef Liver Dog Food","dog","wet","as","","act",31,[["rawz-goats-milk-96-beef--beef-liver-dog-food-12-5-oz",12.5,0]],""],["Wholesomes Sensitive Skin & Stomach Salmon & Brown Rice Dog Food","dog","dry","as","","dig skin",31,[["wholesomes-sensitive-skin--stomach-salmon--brown-rice-dog-food-30-lb",480.0,0]],""],["Fromm Four-Star Grain-Free Hasen Duckenpfeffer Dry Dog Food","dog","dry","as","","",30,[["fromm-four-star-grain-free-hasen-duckenpfeffer-dry-dog-food-12-lb",192.0,0],["fromm-four-star-grain-free-hasen-duckenpfeffer-dry-dog-food-26-lb",416.0,0],["fromm-four-star-grain-free-hasen-duckenpfeffer-dry-dog-food-4-lb",64.0,0]],""],["Zignature Lamb Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",30,[["zignature-lamb-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Dave's Cat Shredded Fisherman Stew","cat","wet","as","","",29,[["daves-cat-shredded-fisherman-stew-5-5-oz",5.5,0]],""],["Fromm Four-Star Grain-Free Chicken Au Frommage Dry Dog Food","dog","dry","as","","",29,[["fromm-four-star-grain-free-chicken-au-frommage-dry-dog-food-4-lb",64.0,0],["fromm-four-star-grain-free-chicken-au-frommage-dry-dog-food-12-lb",192.0,0],["fromm-four-star-grain-free-chicken-au-frommage-dry-dog-food-26-lb",416.0,0]],""],["Fromm Turkey/Duck Pate Wet Cat Food","cat","wet","as","","",29,[["fromm-turkey-duck-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Rawz Duck, Turkey & Quail 96%","dog","wet","as","","act",29,[["rawz-duck-turkey--quail-96-12-5-oz",12.5,0]],""],["Dave's Cat Shredded Salmon in Gravy","cat","wet","as","","",28,[["daves-cat-shredded-salmon-in-gravy-5-5-oz",5.5,0]],""],["Dr. Marty's Nature's Feast Poultry","cat","fd","as","","",28,[["dr-martys-natures-feast-poultry-12-oz",12.0,0]],""],["Farmina N&D Prime Boar & Apple Wet Cat Food","cat","wet","as","","",28,[["farmina-nd-prime-boar--apple-wet-cat-food-2-46-oz-can",2.46,0]],"~5082256725.png"],["Fromm Indoor Gold Dry Cat Food","cat","dry","as","","",28,[["fromm-indoor-gold-dry-cat-food-10-lb",160.0,0],["fromm-indoor-gold-dry-cat-food-4-lb",64.0,0]],""],["Weruva Awesome Belly Beef, White Rice & Pumpkin Wet Dog Food","dog","wet","as","","",28,[["weruva-awesome-belly-beef-white-rice--pumpkin-wet-dog-food-14-oz",14.0,0]],""],["Wholesomes Beef Meal & Rice Adult Dry Dog Food","dog","dry","as","","",28,[["wholesomes-beef-meal--rice-adult-dry-dog-food-40-lb",640.0,0]],""],["Fussie Cat Market Fresh Salmon","cat","dry","as","","",27,[["fussie-cat-market-fresh-salmon-3-5-lb",56.0,0],["fussie-cat-market-fresh-salmon-10-lb",160.0,0]],""],["Rawz 96% Chicken & Chicken Liver Dog Food","dog","wet","as","","act",27,[["rawz-96-chicken--chicken-liver-dog-food-12-5-oz",12.5,0]],"~5273839604.png"],["Weruva Kitten Chicken & Pumpkin Wet Cat Food","cat","wet","p","","",27,[["weruva-kitten-chicken--pumpkin-wet-cat-food-3-oz",3.0,0]],"~4867432099.png"],["Zignature Salmon Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",27,[["zignature-salmon-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Zignature Zssential Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",27,[["zignature-zssential-limited-ingredient-formula-dry-dog-food",0,0]],""],["Badlands Ranch Superfood Complete Lamb & Venison Air-Dried Dog Food","dog","fd","as","","",26,[["badlands-ranch-superfood-complete-lamb--venison-air-dried-dog-food",0,0]],""],["Dave's Cat Tuna & Chicken in Gravy","cat","wet","as","","",26,[["daves-cat-tuna--chicken-in-gravy-5-5-oz",5.5,0]],""],["Fromm Chicken/Salmon Pate Wet Cat Food","cat","wet","as","","",26,[["fromm-chicken-salmon-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fromm Four-Star Duck A La Veg Dry Dog Food","dog","dry","as","","",26,[["fromm-four-star-duck-a-la-veg-dry-dog-food-26-lb",416.0,0],["fromm-four-star-duck-a-la-veg-dry-dog-food-4-lb",64.0,0],["fromm-four-star-duck-a-la-veg-dry-dog-food-12-lb",192.0,0]],""],["Fussie Cat Market Fresh Salmon/Chicken","cat","dry","as","","",26,[["fussie-cat-market-fresh-salmon-chicken-3-5-lb",56.0,0],["fussie-cat-market-fresh-salmon-chicken-10-lb",160.0,0]],""],["Fussie Cat Tuna with Anchovies in Goat Milk","cat","wet","pas","","",26,[["fussie-cat-tuna-with-anchovies-in-goat-milk-2-47-oz",2.47,0]],""],["Rawz 94% Venison & Green Mussels P\u00e2t\u00e9 Wet Dog Food","dog","wet","as","","act",26,[["rawz-94-venison--green-mussels-pate-wet-dog-food-13-oz",13.0,0]],"~products/850881956/6284226333.png"],["Weruva Dog Wok the Dog Wet Dog Food","dog","wet","as","","",26,[["weruva-dog-wok-the-dog-wet-dog-food-14-oz",14.0,0]],""],["Weruva Kitten Chicken Au Jus Wet Cat Food","cat","wet","p","","",26,[["weruva-kitten-chicken-au-jus-wet-cat-food-3-oz",3.0,0]],"~4867397210.png"],["Zignature Duck Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",26,[["zignature-duck-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Dave's Restricted Diet Skin & Coat Support Chicken & Sweet Potato Wet Dog Food","dog","wet","as","","skin",25,[["daves-restricted-diet-skin--coat-support-chicken--sweet-potato-wet-dog-food-13-2-oz",13.2,0]],""],["Fromm Heartland Gold Grain-Free Dry Dog Food","dog","dry","as","","",25,[["fromm-heartland-gold-grain-free-dry-dog-food-26-lb",416.0,0],["fromm-heartland-gold-grain-free-dry-dog-food-12-lb",192.0,0],["fromm-heartland-gold-grain-free-dry-dog-food-4-lb",64.0,0]],""],["Weruva Pumpkin Patch Up! Pumpkin with Ginger & Turmeric Wet Cat Food","cat","wet","as","","",25,[["weruva-pumpkin-patch-up-pumpkin-with-ginger--turmeric-wet-cat-food-2-8-oz",2.8,0]],""],["Zignature Lamb Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",25,[["zignature-lamb-limited-ingredient-formula-dry-dog-food",0,0]],""],["Fromm Puppy Chicken & Salmon Pate Wet Dog Food","dog","wet","p","","",24,[["fromm-puppy-chicken--salmon-pate-wet-dog-food-12-2-oz",12.2,0]],"~5083152215.png"],["Weruva Kitten Chicken & Tuna Wet Cat Food","cat","wet","p","","",24,[["weruva-kitten-chicken--tuna-wet-cat-food-3-oz",3.0,0]],"~4867453026.png"],["Dr. Marty's Nature's Blend Small Breed","dog","fd","as","s","",23,[["dr-martys-natures-blend-small-breed-48-oz",48.0,0],["dr-martys-natures-blend-small-breed-80-oz",80.0,0],["dr-martys-natures-blend-small-breed-16-oz",16.0,0]],""],["Farmina N&D Ocean Sea Bass, Sardine & Shrimp Wet Cat Food","cat","wet","as","","",23,[["farmina-nd-ocean-sea-bass-sardine--shrimp-wet-cat-food-2-46-oz-can",2.46,0]],"~4457805425.png"],["Fromm Senior Gold Dry Dog Food","dog","dry","s","","",23,[["fromm-senior-gold-dry-dog-food-30-lb",480.0,0],["fromm-senior-gold-dry-dog-food-15-lb",240.0,0]],"~4781417432.png"],["Weruva Kitten Can Jam Chicken Tuna & Salmon Variety Pack Grain-Free Wet Kitten Food","cat","wet","p","","",23,[["weruva-kitten-can-jam-chicken-tuna--salmon-variety-pack-grain-free-wet-kitten-food-3-oz",3.0,1]],"~products/837820915/6283915610.png"],["Zignature Salmon Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",23,[["zignature-salmon-limited-ingredient-formula-dry-dog-food",0,0]],""],["Dave's Cat Chicken & Whitefish Pate","cat","wet","as","","",22,[["daves-cat-chicken--whitefish-pate-5-5-oz",5.5,0]],""],["Fromm Kitten Gold Dry Cat Food","cat","dry","p","","",22,[["fromm-kitten-gold-dry-cat-food-4-lb",64.0,0],["fromm-kitten-gold-dry-cat-food-10-lb",160.0,0]],"~4755178983.jpg"],["Open Farm RawMix Front Range Recipe Dry Dog Food","dog","dry","as","","",22,[["open-farm-rawmix-front-range-recipe-dry-dog-food-20-lb",320.0,0],["open-farm-rawmix-front-range-recipe-dry-dog-food-3-5-lb",56.0,0]],""],["Rawz Shredded Beef, Pumpkin, Sweet Potato & Goat's Milk","dog","wet","as","","",22,[["rawz-shredded-beef-pumpkin-sweet-potato--goats-milk-10-oz",10.0,0]],""],["Weruva Awesome Belly Chicken Breast, White Rice & Pumpkin Wet Dog Food","dog","wet","as","","",22,[["weruva-awesome-belly-chicken-breast-white-rice--pumpkin-wet-dog-food-14-oz",14.0,0]],""],["Weruva Dog Jammin' Salmon Wet Dog Food","dog","wet","as","","",22,[["weruva-dog-jammin-salmon-wet-dog-food-14-oz",14.0,0]],""],["Zignature Kangaroo Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",22,[["zignature-kangaroo-limited-ingredient-formula-dry-dog-food",0,0]],""],["Dave's Cat Shredded Chicken in Gravy","cat","wet","as","","",21,[["daves-cat-shredded-chicken-in-gravy-5-5-oz",5.5,0]],""],["Wholesomes Chicken Meal & Rice Dry Cat Food","cat","dry","as","","",21,[["wholesomes-chicken-meal--rice-dry-cat-food-15-lb",240.0,0]],""],["Open Farm Ancient Grains Lamb Recipe Dry Dog Food","dog","dry","as","","",20,[["open-farm-ancient-grains-lamb-recipe-dry-dog-food-4-lb",64.0,0],["open-farm-ancient-grains-lamb-recipe-dry-dog-food-22-lb",352.0,0]],""],["Rawz Cat Aujou Chicken Breast & Pumpkin Food Pouch","cat","wet","as","","",20,[["rawz-cat-aujou-chicken-breast--pumpkin-food-pouch-2-46-oz",2.46,0]],""],["Dave's Dog Restricted Bland Diet Chicken & Rice","dog","wet","as","","",19,[["daves-dog-restricted-bland-diet-chicken--rice-13-2-oz",13.2,0]],""],["Dr. Marty's Nature's Blend Essential Wellness - Regular","dog","fd","as","","",19,[["dr-martys-natures-blend-essential-wellness---regular-48-oz",48.0,0],["dr-martys-natures-blend-essential-wellness---regular-6-oz",6.0,0],["dr-martys-natures-blend-essential-wellness---regular-16-oz",16.0,0]],""],["Farmina N&D Pumpkin Quail & Pumpkin Wet Cat Food","cat","wet","as","","",19,[["farmina-nd-pumpkin-quail--pumpkin-wet-cat-food-2-46-oz-can",2.46,0]],""],["Fromm Four-Star Salmon Tunachovy Dry Cat Food","cat","dry","as","","",19,[["fromm-four-star-salmon-tunachovy-dry-cat-food-10-lb",160.0,0],["fromm-four-star-salmon-tunachovy-dry-cat-food-4-lb",64.0,0]],""],["Fussie Cat Premium Ocean Fish in Gravy Pouch","cat","wet","pas","","",19,[["fussie-cat-premium-ocean-fish-in-gravy-pouch-2-47-oz",2.47,0]],""],["Open Farm Salmon & Ancient Grains Recipe Dry Dog Food","dog","dry","as","","",19,[["open-farm-salmon--ancient-grains-recipe-dry-dog-food-22-lb",352.0,0]],""],["Stella and Chewy's Lil' Bites Savory Stew for Dogs Chicken & Duck in Broth","dog","wet","as","","",19,[["stella-and-chewys-lil-bites-savory-stew-for-dogs-chicken--duck-in-broth-2-7-oz",2.7,0]],""],["Vital Essentials Mini Nibs Raw Beef Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",19,[["vital-essentials-mini-nibs-raw-beef-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0],["vital-essentials-mini-nibs-raw-beef-entree-freeze-dried-dog-food--topper-5-5-oz-bag",5.5,0]],""],["Badlands Ranch Superfood Complete Beef Air-Dried Dog Food","dog","fd","as","","",18,[["badlands-ranch-superfood-complete-beef-air-dried-dog-food",0,0]],""],["Fromm Adult Gold Chicken/Duck/Salmon Wet Cat Food","cat","wet","as","","",18,[["fromm-adult-gold-chicken-duck-salmon-wet-cat-food-5-5-oz",5.5,0],["fromm-adult-gold-chicken-duck-salmon-wet-cat-food-3-oz",3.0,0]],"~products/812901454/5590997960.png"],["Fromm Four-Star Grain-Free Game Bird Recipe Dry Dog Food","dog","dry","as","","",18,[["fromm-four-star-grain-free-game-bird-recipe-dry-dog-food-4-lb",64.0,0],["fromm-four-star-grain-free-game-bird-recipe-dry-dog-food-12-lb",192.0,0],["fromm-four-star-grain-free-game-bird-recipe-dry-dog-food-26-lb",416.0,0]],""],["Fromm Indoor Gold Chicken/Salmon Wet Cat Food","cat","wet","as","","",18,[["fromm-indoor-gold-chicken-salmon-wet-cat-food-3-oz",3.0,0],["fromm-indoor-gold-chicken-salmon-wet-cat-food-5-5-oz",5.5,0]],""],["Weruva Dog Grandma's Chicken Soup Wet Dog Food","dog","wet","as","","",18,[["weruva-dog-grandmas-chicken-soup-wet-dog-food-14-oz",14.0,0]],""],["Dave's Cat Saucey Pate Chicken & Turkey","cat","wet","as","","",17,[["daves-cat-saucey-pate-chicken--turkey-5-5-oz",5.5,0]],""],["Dr. Marty's Nature's Blend Essential Wellness","dog","fd","as","","",17,[["dr-martys-natures-blend-essential-wellness-80-oz",80.0,0]],""],["Fussie Cat Fine Dining Oceanfish with Salmon Pate","cat","wet","pas","","",17,[["fussie-cat-fine-dining-oceanfish-with-salmon-pate-2-82-oz",2.82,0]],""],["Nulo Freestyle Minced GF Beef & Mackerel in Gravy","cat","wet","as","","",17,[["nulo-freestyle-minced-gf-beef--mackerel-in-gravy-3-oz",3.0,0]],"~5195791296.png"],["RAWZ Limited Ingredient Rabbit Dry Cat Food","cat","dry","as","","",17,[["rawz-limited-ingredient-rabbit-dry-cat-food-3-5-lb",56.0,0],["rawz-limited-ingredient-rabbit-dry-cat-food-1-75-lb",28.0,0],["rawz-limited-ingredient-rabbit-dry-cat-food-7-8-lb",124.8,0]],""],["Zignature Trout & Salmon Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",17,[["zignature-trout--salmon-limited-ingredient-formula-dry-dog-food",0,0]],""],["Fromm Frommbalaya Beef Stew Wet Dog Food","dog","wet","as","","",16,[["fromm-frommbalaya-beef-stew-wet-dog-food-12-5-oz",12.5,0]],""],["Fromm Weight Management Gold Chicken/Duck Wet Cat Food","cat","wet","as","","wm",16,[["fromm-weight-management-gold-chicken-duck-wet-cat-food-3-oz",3.0,0],["fromm-weight-management-gold-chicken-duck-wet-cat-food-5-5-oz",5.5,0]],"~products/812903406/5591015062.png"],["Fussie Cat Fine Dining  Chicken w/ Lamb","cat","wet","pas","","",16,[["fussie-cat-fine-dining--chicken-w-lamb-2-82oz",2.82,0]],""],["Stella and Chewy's Raw Blend Dry Dog Food Red Meat","dog","dry","as","","",16,[["stella-and-chewys-raw-blend-dry-dog-food-red-meat-3-5-lb",56.0,0],["stella-and-chewys-raw-blend-dry-dog-food-red-meat-22-lb",352.0,0]],""],["Wholesomes Chicken Meal & Rice Adult Dry Dog Food","dog","dry","as","","",16,[["wholesomes-chicken-meal--rice-adult-dry-dog-food-40-lb",640.0,0]],""],["Dave's Cat Tuna & Mackerel in Gravy","cat","wet","as","","",15,[["daves-cat-tuna--mackerel-in-gravy-5-5-oz",5.5,0]],""],["Fine Dining Tuna with Shrimp Pate","cat","wet","as","","",15,[["fine-dining-tuna-with-shrimp-pate-2-82-oz",2.82,0]],""],["Fromm Four-Star Grain-Free Lamb & Lentil Dry Dog Food","dog","dry","as","","",15,[["fromm-four-star-grain-free-lamb--lentil-dry-dog-food-4-lb",64.0,0],["fromm-four-star-grain-free-lamb--lentil-dry-dog-food-26-lb",416.0,0]],""],["Fromm Four-Star Grain-Free Salmon Tunalini Dry Dog Food","dog","dry","as","","",15,[["fromm-four-star-grain-free-salmon-tunalini-dry-dog-food-26-lb",416.0,0],["fromm-four-star-grain-free-salmon-tunalini-dry-dog-food-12-lb",192.0,0],["fromm-four-star-grain-free-salmon-tunalini-dry-dog-food-4-lb",64.0,0]],""],["Fromm Puppy Classic Dry Dog Food","dog","dry","p","","",15,[["fromm-puppy-classic-dry-dog-food-5-lb",80.0,0],["fromm-puppy-classic-dry-dog-food-30-lb",480.0,0]],"~4426301349.jpg"],["Tucker's Freeze Dried Raw Dog Food Beef & Pumpkin","dog","fd","as","","",15,[["tuckers-freeze-dried-raw-dog-food-beef--pumpkin-14-oz",14.0,0]],""],["Wholesomes Sensitive Skin & Stomach Lamb & Brown Rice Dog Food","dog","dry","as","","dig skin",15,[["wholesomes-sensitive-skin--stomach-lamb--brown-rice-dog-food-30-lb",480.0,0]],""],["Dave's Dog Premium 95% Turkey","dog","wet","as","","act",14,[["daves-dog-premium-95-turkey-13-oz",13.0,0]],""],["Fromm Adult Gold Dry Cat Food","cat","dry","as","","",14,[["fromm-adult-gold-dry-cat-food-10-lb",160.0,0],["fromm-adult-gold-dry-cat-food-4-lb",64.0,0]],"~4752251480.jpg"],["Fromm Four-Star Grain-Free Surf & Turf Dry Cat Food","cat","dry","as","","",14,[["fromm-four-star-grain-free-surf--turf-dry-cat-food-4-lb",64.0,0],["fromm-four-star-grain-free-surf--turf-dry-cat-food-10-lb",160.0,0]],""],["Fussie Cat Fine Dining Mousse Oceanfish with Pumpkin Entr\u00e9e","cat","wet","pas","","",14,[["fussie-cat-fine-dining-mousse-oceanfish-with-pumpkin-entree-2-47-oz",2.47,0]],""],["Weruva OMG Seeya Sooner! Chicken & Tuna Wet Cat Food Pouch","cat","wet","as","","",14,[["weruva-omg-seeya-sooner-chicken--tuna-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Wholesomes Whitefish Meal & Rice Adult Dry Dog Food","dog","dry","as","","",14,[["wholesomes-whitefish-meal--rice-adult-dry-dog-food-40-lb",640.0,0]],""],["Boss Cat Freeze-Dried Raw Pork Cat Food","cat","fd","as","","",13,[["boss-cat-freeze-dried-raw-pork-cat-food-9-oz",9.0,0]],""],["Dr. Marty's Nature's Feast Medley - Beef, Salmon & Poultry","cat","fd","as","","",13,[["dr-martys-natures-feast-medley---beef-salmon--poultry-12-oz",12.0,0]],""],["Fromm Four-Star Chicken A La Veg Dry Cat Food","cat","dry","as","","",13,[["fromm-four-star-chicken-a-la-veg-dry-cat-food-10-lb",160.0,0],["fromm-four-star-chicken-a-la-veg-dry-cat-food-4-lb",64.0,0]],""],["Fromm Four-Star Grain-Free Hasen Duckenpfeffer Dry Cat Food","cat","dry","as","","",13,[["fromm-four-star-grain-free-hasen-duckenpfeffer-dry-cat-food-10-lb",160.0,0],["fromm-four-star-grain-free-hasen-duckenpfeffer-dry-cat-food-4-lb",64.0,0]],""],["Fromm Healthy Weight Gold Dry Cat Food","cat","dry","as","","wm",13,[["fromm-healthy-weight-gold-dry-cat-food-4-lb",64.0,0],["fromm-healthy-weight-gold-dry-cat-food-10-lb",160.0,0]],"~4781414417.jpg"],["Nulo Freestyle Shredded Turkey & Halibut","cat","wet","as","","",13,[["nulo-freestyle-shredded-turkey--halibut-3-oz",3.0,0]],"~5195827486.png"],["The Honest Kitchen Whole Food Clusters Grain Free Beef","dog","dry","as","","",13,[["the-honest-kitchen-whole-food-clusters-grain-free-beef-5-lb",80.0,0]],""],["Vital Essentials Soft Nibs Raw Beef & Salmon Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","","",13,[["vital-essentials-soft-nibs-raw-beef--salmon-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Dave's Bland Diet Beef & Rice Wet Dog Food Pouch","dog","wet","as","","",12,[["daves-bland-diet-beef--rice-wet-dog-food-pouch-9-oz",9.0,0]],""],["Dave's Dog Premium 95% Chicken","dog","wet","as","","act",12,[["daves-dog-premium-95-chicken-13-oz",13.0,0]],""],["Farmina N&D Quinoa Digestion Lamb Dry Cat Food","cat","dry","as","","dig",12,[["farmina-nd-quinoa-digestion-lamb-dry-cat-food-3-3-lb-bag",52.8,0],["farmina-nd-quinoa-digestion-lamb-dry-cat-food-11-lb-bag",176.0,0]],""],["Farmina N&D Quinoa Hairball Control Dry Cat Food","cat","dry","as","","",12,[["farmina-nd-quinoa-hairball-control-dry-cat-food-3-3-lb-bag",52.8,0]],""],["Stella and Chewy's Lil' Bites Savory Stew for Dogs Chicken & Salmon in Broth","dog","wet","as","","",12,[["stella-and-chewys-lil-bites-savory-stew-for-dogs-chicken--salmon-in-broth-2-7-oz",2.7,0]],""],["Vital Essentials Soft Nibs Raw Beef Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","","",12,[["vital-essentials-soft-nibs-raw-beef-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Weruva OMG Date Night! Duck & Salmon Wet Cat Food Pouch","cat","wet","as","","",12,[["weruva-omg-date-night-duck--salmon-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Weruva OMG Purr-Fect Plannin'! Chicken, Turkey & Salmon Wet Cat Food Pouch","cat","wet","as","","",12,[["weruva-omg-purr-fect-plannin-chicken-turkey--salmon-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Weruva OMG Tuna & Duck Devour Me Wet Cat Food Pouch","cat","wet","as","","",12,[["weruva-omg-tuna--duck-devour-me-wet-cat-food-pouch-3-oz",3.0,0]],""],["Weruva OMG Tuna & Turkey Tickles Wet Cat Food Pouch","cat","wet","as","","",12,[["weruva-omg-tuna--turkey-tickles-wet-cat-food-pouch-3-oz",3.0,0]],""],["Wholesomes Lamb Meal & Rice Adult Dry Dog Food","dog","dry","as","","",12,[["wholesomes-lamb-meal--rice-adult-dry-dog-food-40-lb",640.0,0]],""],["Zignature Venison Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",12,[["zignature-venison-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Dr. Marty's Nature's Feast Essential Wellness Fish & Poultry","cat","fd","as","","",11,[["dr-martys-natures-feast-essential-wellness-fish--poultry-12-oz",12.0,0]],""],["Fromm Four-Star Grain-Free Surf & Turf Dry Dog Food","dog","dry","as","","",11,[["fromm-four-star-grain-free-surf--turf-dry-dog-food-12-lb",192.0,0],["fromm-four-star-grain-free-surf--turf-dry-dog-food-26-lb",416.0,0],["fromm-four-star-grain-free-surf--turf-dry-dog-food-4-lb",64.0,0]],""],["Fromm Four-Star Trout & Whitefish Recipe Dry Cat Food","cat","dry","as","","",11,[["fromm-four-star-trout--whitefish-recipe-dry-cat-food-10-lb",160.0,0],["fromm-four-star-trout--whitefish-recipe-dry-cat-food-4-lb",64.0,0]],""],["Fromm Turkey Pate Wet Cat Food","cat","wet","as","","",11,[["fromm-turkey-pate-wet-cat-food-5-5-oz",5.5,0]],""],["Fussie Cat Fine Dining Tuna with Vegetables Pate","cat","wet","pas","","",11,[["fussie-cat-fine-dining-tuna-with-vegetables-pate-2-82-oz",2.82,0]],""],["Open Farm RawMix Wild Ocean Recipe Dry Dog Food","dog","dry","as","","",11,[["open-farm-rawmix-wild-ocean-recipe-dry-dog-food-20-lb",320.0,0],["open-farm-rawmix-wild-ocean-recipe-dry-dog-food-3-5-lb",56.0,0]],""],["RAWZ Meal-Free Chicken & Turkey Dry Cat Food","cat","dry","as","","",11,[["rawz-meal-free-chicken--turkey-dry-cat-food-3-5-lb",56.0,0],["rawz-meal-free-chicken--turkey-dry-cat-food-1-75-lb",28.0,0],["rawz-meal-free-chicken--turkey-dry-cat-food--7-8-lb",124.8,0]],""],["Rawz Cat 94% Venison w/ Goat's Milk P\u00e2t\u00e9","cat","wet","as","","act",11,[["rawz-cat-94-venison-w-goats-milk-pate-6-oz",6.0,0],["rawz-cat-94-venison-w-goats-milk-pate-3-oz",3.0,0]],"~products/797111877/5474160149.png"],["Rawz Cat Immune Support Turkey, Turkey Liver & Cranberry","cat","wet","as","","",11,[["rawz-cat-immune-support-turkey-turkey-liver--cranberry-5-5-oz",5.5,0]],""],["Stella and Chewy's Lil' Bites Savory Stew for Dogs Chicken & Chicken Liver in Broth","dog","wet","as","","",11,[["stella-and-chewys-lil-bites-savory-stew-for-dogs-chicken--chicken-liver-in-broth-2-7-oz",2.7,0]],""],["Zignature Catfish Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",11,[["zignature-catfish-limited-ingredient-formula-dry-dog-food",0,0]],""],["Badlands Ranch Superfood Complete Chicken Air-Dried Dog Food","dog","fd","as","","",10,[["badlands-ranch-superfood-complete-chicken-air-dried-dog-food",0,0]],""],["Dave's Bland Diet Duck & Pumpkin Wet Dog Food Pouch","dog","wet","as","","",10,[["daves-bland-diet-duck--pumpkin-wet-dog-food-pouch-9-oz",9.0,0]],""],["Dave's Restricted Diet Bland Chicken & Rice Wet Dog Food","dog","wet","as","","",10,[["daves-restricted-diet-bland-chicken--rice-wet-dog-food-22-oz",22.0,0]],""],["Farmina N&D Ocean Pumpkin Herring Dry Cat Food","cat","dry","as","","",10,[["farmina-nd-ocean-pumpkin-herring-dry-cat-food-3-3-lb-bag",52.8,0],["farmina-nd-ocean-pumpkin-herring-dry-cat-food-11-lb-bag",176.0,0]],"~products/814240687/6283888419.png"],["Farmina N&D Quinoa Weight Management Lamb Medium & Maxi Adult Dry Dog Food","dog","dry","as","m","wm",10,[["farmina-nd-quinoa-weight-management-lamb-medium--maxi-adult-dry-dog-food-15-4-lb-bag",246.4,0]],"~4624208626.png"],["Fromm Four-Star Grain-Free Rancherosa Dry Dog Food","dog","dry","as","","",10,[["fromm-four-star-grain-free-rancherosa-dry-dog-food-4-lb",64.0,0]],""],["Fussie Cat Market Fresh Kitten","cat","dry","p","","",10,[["fussie-cat-market-fresh-kitten-10-lb",160.0,0],["fussie-cat-market-fresh-kitten-3-5-lb",56.0,0]],"~products/816420460/5596638821.png"],["Nulo Freestyle Shredded Beef & Trout","cat","wet","as","","",10,[["nulo-freestyle-shredded-beef--trout-3-oz",3.0,0]],"~5195822330.png"],["Tucker's Freeze Dried Raw Dog Food Pork, Beef & Pumpkin","dog","fd","as","","",10,[["tuckers-freeze-dried-raw-dog-food-pork-beef--pumpkin-14-oz",14.0,0]],""],["Vital Essentials Mini Nibs Raw Chicken Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",10,[["vital-essentials-mini-nibs-raw-chicken-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0],["vital-essentials-mini-nibs-raw-chicken-entree-freeze-dried-dog-food--topper-5-5-oz-bag",5.5,0]],""],["Wholesomes Sensitive Skin & Stomach Salmon Dry Cat Food","cat","dry","as","","dig skin",10,[["wholesomes-sensitive-skin--stomach-salmon-dry-cat-food-10-lb",160.0,0]],""],["Zignature Kangaroo Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",10,[["zignature-kangaroo-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Fromm Betty's Biscuits & Gravy Wet Dog Food","dog","wet","as","","",9,[["fromm-bettys-biscuits--gravy-wet-dog-food-12-5-oz",12.5,0]],""],["Open Farm RawMix Open Prairie Recipe Dry Dog Food","dog","dry","as","","",9,[["open-farm-rawmix-open-prairie-recipe-dry-dog-food-20-lb",320.0,0],["open-farm-rawmix-open-prairie-recipe-dry-dog-food-3-5-lb",56.0,0]],""],["Petcurean GO! Skin + Coat Care Lamb Dry Dog Food","dog","dry","as","","skin",9,[["petcurean-go-skin-coat-care-lamb-dry-dog-food",0,0]],""],["RAWZ Meal-Free Salmon, Chicken & Whitefish Dry Cat Food","cat","dry","as","","",9,[["rawz-meal-free-salmon-chicken--whitefish-dry-cat-food-3-5-lb",56.0,0],["rawz-meal-free-salmon-chicken--whitefish-dry-cat-food-7-8-lb",124.8,0]],""],["Weruva Suppertime Sweepstakes Variety Pack Wet Cat Food","cat","wet","as","","",9,[["weruva-suppertime-sweepstakes-variety-pack-wet-cat-food-3-oz-12-count",3.0,1]],""],["Farmina N&D Prime Boar Dry Cat Food","cat","dry","as","","",8,[["farmina-nd-prime-boar-dry-cat-food-3-3-lb-bag",52.8,0]],"~4735613107.png"],["Farmina N&D Pumpkin Lamb & Blueberry Mini Adult Dry Dog Food","dog","dry","as","s","",8,[["farmina-nd-pumpkin-lamb--blueberry-mini-adult-dry-dog-food-15-4-lb-bag",246.4,0],["farmina-nd-pumpkin-lamb--blueberry-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4624249453.png"],["Fromm Four-Star Lamb and Lentil Dry Dog Food","dog","dry","as","","",8,[["fromm-four-star-lamb-and-lentil-dry-dog-food-12-lb",192.0,0]],""],["Fromm Frommbalaya Turkey Stew Wet Dog Food","dog","wet","as","","",8,[["fromm-frommbalaya-turkey-stew-wet-dog-food-12-5-oz",12.5,0]],""],["Rawz Cat Aujou Chicken Breast & Chicken Liver Food Pouch","cat","wet","as","","",8,[["rawz-cat-aujou-chicken-breast--chicken-liver-food-pouch-2-46-oz",2.46,0]],"~4938796863.jpg"],["Rawz Cat Digestive Support Chicken, Pork & Pumpkin","cat","wet","as","","dig",8,[["rawz-cat-digestive-support-chicken-pork--pumpkin-5-5-oz",5.5,0]],""],["Tucker's Freeze Dried Raw Dog Food Chicken & Pumpkin","dog","fd","as","","",8,[["tuckers-freeze-dried-raw-dog-food-chicken--pumpkin-14-oz",14.0,0]],""],["Tucker's Freeze Dried Raw Dog Food Pork, Bison & Pumpkin","dog","fd","as","","",8,[["tuckers-freeze-dried-raw-dog-food-pork-bison--pumpkin-14-oz",14.0,0]],""],["Weruva OMG Tuna & Chicken Charm Me Wet Cat Food Pouch","cat","wet","as","","",8,[["weruva-omg-tuna--chicken-charm-me-wet-cat-food-pouch-3-oz",3.0,0]],""],["Weruva Wx Chicken & Tilapia in Gravy Wet Cat Food","cat","wet","as","","",8,[["weruva-wx-chicken--tilapia-in-gravy-wet-cat-food-3-oz",3.0,0]],""],["Dave's Dog Premium 95% Beef","dog","wet","as","","act",7,[["daves-dog-premium-95-beef-13-oz",13.0,0]],""],["Farmina N&D Prime Chicken & Pomegranate Dry Cat Food","cat","dry","as","","",7,[["farmina-nd-prime-chicken--pomegranate-dry-cat-food-11-lb-bag",176.0,0],["farmina-nd-prime-chicken--pomegranate-dry-cat-food-3-3-lb-bag",52.8,0]],"~4593839625.png"],["Farmina N&D Prime Lamb & Blueberry Dry Cat Food","cat","dry","as","","",7,[["farmina-nd-prime-lamb--blueberry-dry-cat-food-11-lb-bag",176.0,0],["farmina-nd-prime-lamb--blueberry-dry-cat-food-3-3-lb-bag",52.8,0]],"~5082252240.png"],["Fromm Sam's Steak & Eggs Wet Dog Food","dog","wet","as","","",7,[["fromm-sams-steak--eggs-wet-dog-food-12-5-oz",12.5,0]],""],["Stella and Chewy's Freeze Dried Raw Dinner Patties for Dogs Turkey","dog","fd","as","","",7,[["stella-and-chewys-freeze-dried-raw-dinner-patties-for-dogs-turkey-14-oz",14.0,0]],""],["Weruva Kitchen Cuties Variety Pack Wet Cat Food","cat","wet","as","","",7,[["weruva-kitchen-cuties-variety-pack-wet-cat-food-3-2-oz-12-count",3.2,1]],""],["Wholesomes Grain-Free Beef Meal & Potatoes Adult Dry Dog Food","dog","dry","as","","",7,[["wholesomes-grain-free-beef-meal--potatoes-adult-dry-dog-food-35-lb",560.0,0]],""],["Zignature Trout & Salmon Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",7,[["zignature-trout--salmon-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Zignature Zssential Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",7,[["zignature-zssential-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Diamond Pro 89","dog","dry","as","","",6,[["diamond-pro-89",NaN,0]],""],["Farmina N&D Pumpkin Lamb & Blueberry Adult Dry Dog Food","dog","dry","as","","",6,[["farmina-nd-pumpkin-lamb--blueberry-adult-dry-dog-food-26-4-lb-bag",422.4,0]],"~4604811989.png"],["Farmina N&D Pumpkin Venison Dry Cat Food","cat","dry","as","","",6,[["farmina-nd-pumpkin-venison-dry-cat-food-3-3-lb-bag",52.8,0]],"~4624272544.png"],["Farmina N&D Quinoa Weight Management Lamb Wet Cat Food","cat","wet","as","","wm",6,[["farmina-nd-quinoa-weight-management-lamb-wet-cat-food-2-8-oz-can",2.8,0]],"~4624388683.png"],["Fromm Four-Star Chicken Au Frommage Dry Cat Food","cat","dry","as","","",6,[["fromm-four-star-chicken-au-frommage-dry-cat-food-4-lb",64.0,0]],""],["Fromm Heartland Gold Large Breed Adult Dry Dog Food","dog","dry","as","m","",6,[["fromm-heartland-gold-large-breed-adult-dry-dog-food-26-lb",416.0,0]],""],["Fussie Cat Market Fresh Duck","cat","dry","as","","",6,[["fussie-cat-market-fresh-duck-3-5-lb",56.0,0],["fussie-cat-market-fresh-duck-10-lb",160.0,0]],""],["Koha Cat Bland Chicken & Rice","cat","wet","as","","",6,[["koha-cat-bland-chicken--rice-6-oz",6.0,0]],""],["Now Fresh Grain-Free Small Breed Adult Turkey, Salmon & Duck Dry Dog Food","dog","dry","as","s","",6,[["now-fresh-grain-free-small-breed-adult-turkey-salmon--duck-dry-dog-food-6-lb",96.0,0]],""],["Open Farm Beef & Ancient Grains Recipe Dry Dog Food","dog","dry","as","","",6,[["open-farm-beef--ancient-grains-recipe-dry-dog-food-22-lb",352.0,0],["open-farm-beef--ancient-grains-recipe-dry-dog-food-4-lb",64.0,0]],""],["Open Farm RawMix Large Breed Recipe Dry Dog Food","dog","dry","as","m","",6,[["open-farm-rawmix-large-breed-recipe-dry-dog-food-20-lb",320.0,0]],""],["Rawz Cat Digestive Support Rabbit & Green Mussels","cat","wet","as","","dig",6,[["rawz-cat-digestive-support-rabbit--green-mussels-5-5-oz",5.5,0]],""],["Wholesomes Grain-Free Whitefish Meal & Potatoes Dog Food","dog","dry","as","","",6,[["wholesomes-grain-free-whitefish-meal--potatoes-dog-food-35-lb",560.0,0]],""],["Zignature Turkey Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",6,[["zignature-turkey-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Farmina N&D Pumpkin Chicken & Pomegranate Adult Dry Dog Food","dog","dry","as","","",5,[["farmina-nd-pumpkin-chicken--pomegranate-adult-dry-dog-food-26-4-lb-bag",422.4,0]],"~4593839715.png"],["Farmina N&D Quinoa Skin & Coat Herring Dry Cat Food","cat","dry","as","","skin",5,[["farmina-nd-quinoa-skin--coat-herring-dry-cat-food-3-3-lb-bag",52.8,0]],""],["Fromm Four-Star Duck \u00c0 La Veg Dry Cat Food","cat","dry","as","","",5,[["fromm-four-star-duck-a-la-veg-dry-cat-food-4-lb",64.0,0]],""],["Fromm Four-Star Salmon A La Veg Dry Cat Food","cat","dry","as","","",5,[["fromm-four-star-salmon-a-la-veg-dry-cat-food-4-lb",64.0,0]],""],["Fromm Frommbalaya Chicken Stew Wet Dog Food","dog","wet","as","","",5,[["fromm-frommbalaya-chicken-stew-wet-dog-food-12-5-oz",12.5,0]],""],["Messy Mutt Can Cover","dog","wet","as","","",5,[["messy-mutt-can-cover",NaN,0]],""],["Rawz Cat Aujou Chicken Breast & Duck Food Pouch","cat","wet","as","","",5,[["rawz-cat-aujou-chicken-breast--duck-food-pouch-2-46-oz",2.46,0]],"~4938794445.jpg"],["Rawz Cat Digestive Support Rabbit & Cranberry","cat","wet","as","","dig",5,[["rawz-cat-digestive-support-rabbit--cranberry-5-5-oz",5.5,0]],""],["Stella and Chewy's Freeze Dried Raw Dinner Patties for Dogs Beef","dog","fd","as","","",5,[["stella-and-chewys-freeze-dried-raw-dinner-patties-for-dogs-beef-14-oz",14.0,0]],""],["Stella and Chewy's Freeze Dried Raw Dinner for Cats Chicken","cat","fd","as","","",5,[["stella-and-chewys-freeze-dried-raw-dinner-for-cats-chicken-18-oz",18.0,0]],""],["Stella and Chewy's Raw Coated Dry Dog Food Grass Fed Beef","dog","dry","as","","",5,[["stella-and-chewys-raw-coated-dry-dog-food-grass-fed-beef-22-lb",352.0,0],["stella-and-chewys-raw-coated-dry-dog-food-grass-fed-beef-3-5-lb",56.0,0]],""],["Vital Essentials Mini Nibs Raw Turkey Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",5,[["vital-essentials-mini-nibs-raw-turkey-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0],["vital-essentials-mini-nibs-raw-turkey-entree-freeze-dried-dog-food--topper-5-5-oz-bag",5.5,0]],""],["Vital Essentials Soft Nibs Raw Duck Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","","",5,[["vital-essentials-soft-nibs-raw-duck-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Weruva OMG Ciao Baby! Chicken & Shrimp Wet Cat Food Pouch","cat","wet","as","","",5,[["weruva-omg-ciao-baby-chicken--shrimp-wet-cat-food-pouch-2-8-oz",2.8,0]],""],["Zignature Inception Chicken Recipe Dry Dog Food","dog","dry","as","","",5,[["zignature-inception-chicken-recipe-dry-dog-food-27-lb-bag",432.0,0],["zignature-inception-chicken-recipe-dry-dog-food-4-lb-bag",64.0,0]],""],["Boss Cat Freeze-Dried Raw Chicken Cat Food","cat","fd","as","","",4,[["boss-cat-freeze-dried-raw-chicken-cat-food-9-oz",9.0,0]],""],["Boss Dog Freeze-Dried Raw Fish Dog Food","dog","fd","as","","",4,[["boss-dog-freeze-dried-raw-fish-dog-food-12-oz",12.0,0]],""],["Dave's Dog Restricted Bland Diet Lamb & Rice","dog","wet","as","","",4,[["daves-dog-restricted-bland-diet-lamb--rice-13-oz",13.0,0]],""],["Dave's Restricted Diet Hip & Joint Support Chicken, Duck & Turkey Wet Dog Food","dog","wet","as","","",4,[["daves-restricted-diet-hip--joint-support-chicken-duck--turkey-wet-dog-food-13-2-oz",13.2,0]],""],["Dave's Restricted Diet Bland Chicken & Rice Wet Dog Food","dog","wet","as","","",4,[["daves-restricted-diet-bland-chicken--rice-wet-dog-food-5-5-oz",5.5,0]],""],["Dr. Marty's Nature's Blend Premium Origin","dog","fd","as","","",4,[["dr-martys-natures-blend-premium-origin-80-oz",80.0,0],["dr-martys-natures-blend-premium-origin-16-oz",16.0,0]],""],["Farmina N&D Pumpkin Quail Dry Cat Food","cat","dry","as","","",4,[["farmina-nd-pumpkin-quail-dry-cat-food-3-3-lb-bag",52.8,0]],"~4624351444.png"],["Farmina N&D Pumpkin Venison & Apple Adult Dry Dog Food","dog","dry","as","","",4,[["farmina-nd-pumpkin-venison--apple-adult-dry-dog-food-26-4-lb-bag",422.4,0]],"~4624139805.png"],["Farmina N&D Quinoa Weight Management Lamb Dry Cat Food","cat","dry","as","","wm",4,[["farmina-nd-quinoa-weight-management-lamb-dry-cat-food-3-3-lb-bag",52.8,0]],"~4624285819.png"],["Farmina N&D Quinoa Weight Management Lamb Mini Adult Dry Dog Food","dog","dry","as","s","wm",4,[["farmina-nd-quinoa-weight-management-lamb-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4624253419.png"],["Fromm Four-Star Grain-Free Beef Livattini Dry Cat Food","cat","dry","as","","",4,[["fromm-four-star-grain-free-beef-livattini-dry-cat-food-4-lb",64.0,0]],""],["Fromm Heartland Gold Large Breed Puppy Dry Dog Food","dog","dry","p","l","",4,[["fromm-heartland-gold-large-breed-puppy-dry-dog-food-26-lb",416.0,0]],"~products/832504285/5735735998.png"],["Fromm Maddie's Morning Beef Hash Wet Dog Food","dog","wet","as","","",4,[["fromm-maddies-morning-beef-hash-wet-dog-food-12-5-oz",12.5,0]],""],["Fussie Cat Market Fresh Turkey","cat","dry","as","","",4,[["fussie-cat-market-fresh-turkey-10-lb",160.0,0],["fussie-cat-market-fresh-turkey-3-5-lb",56.0,0]],""],["Rawz Cat 94% Venison w/ Green Mussels P\u00e2t\u00e9","cat","wet","as","","act",4,[["rawz-cat-94-venison-w-green-mussels-pate-6-oz",6.0,0],["rawz-cat-94-venison-w-green-mussels-pate-3-oz",3.0,0]],"~products/797111873/5474165720.png"],["Stella and Chewy's Freeze Dried Raw Dinner Patties for Dogs Chicken","dog","fd","as","","",4,[["stella-and-chewys-freeze-dried-raw-dinner-patties-for-dogs-chicken-14-oz",14.0,0]],""],["Stella and Chewy's Freeze Dried Raw Solutions for Dogs Hip & Joint Chicken","dog","fd","as","","",4,[["stella-and-chewys-freeze-dried-raw-solutions-for-dogs-hip--joint-chicken-13-oz",13.0,0]],""],["Vital Essentials Mini Nibs Raw Duck Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",4,[["vital-essentials-mini-nibs-raw-duck-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Zignature Venison Limited Ingredient Formula Dry Dog Food","dog","dry","as","","",4,[["zignature-venison-limited-ingredient-formula-dry-dog-food-25-lb-bag",400.0,0],["zignature-venison-limited-ingredient-formula-dry-dog-food-4-lb-bag",64.0,0]],""],["Zignature Whitefish Limited Ingredient Formula Canned Dog Food","dog","wet","as","","",4,[["zignature-whitefish-limited-ingredient-formula-canned-dog-food-13-oz",13.0,0]],""],["Farmina N&D Pumpkin Boar & Apple Mini Adult Dry Dog Food","dog","dry","as","s","",3,[["farmina-nd-pumpkin-boar--apple-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4593838737.png"],["Wholesomes Large Breed Puppy Chicken Meal & Rice Dry Dog Food","dog","dry","p","l","",3,[["wholesomes-large-breed-puppy-chicken-meal--rice-dry-dog-food-35-lb",560.0,0]],""],["Dave's Restricted Diet Weight Management Turkey & Vegetables Dog Food","dog","wet","as","","wm",2,[["daves-restricted-diet-weight-management-turkey--vegetables-dog-food-13-2-oz",13.2,0]],"~products/828042884/5695094626.png"],["Farmina N&D Pumpkin Duck & Cantaloupe Mini Adult Dry Dog Food","dog","dry","as","s","",2,[["farmina-nd-pumpkin-duck--cantaloupe-mini-adult-dry-dog-food-4-4-lb-bag",70.4,0]],"~4604782160.png"],["Farmina N&D Quinoa Digestion Lamb Mini Adult Dry Dog Food","dog","dry","as","s","dig",2,[["farmina-nd-quinoa-digestion-lamb-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4624253078.png"],["Farmina N&D Quinoa Skin & Coat Venison & Coconut Wet Dog Food","dog","wet","as","","skin",2,[["farmina-nd-quinoa-skin--coat-venison--coconut-wet-dog-food-10-oz-can",10.0,0]],""],["Now Fresh Grain-Free Small Breed Senior Turkey, Salmon & Duck Dry Dog Food","dog","dry","s","s","",2,[["now-fresh-grain-free-small-breed-senior-turkey-salmon--duck-dry-dog-food-6-lb",96.0,0]],"~products/822617235/5645842464.png"],["Petcurean GO! Skin + Coat Care Salmon Dry Dog Food","dog","dry","as","","skin",2,[["petcurean-go-skin-coat-care-salmon-dry-dog-food",0,0]],""],["Stella and Chewy's Freeze Dried Raw Solutions for Dogs Digestive Boost Grass Fed Beef","dog","fd","as","","dig",2,[["stella-and-chewys-freeze-dried-raw-solutions-for-dogs-digestive-boost-grass-fed-beef-13-oz",13.0,0]],""],["Vital Essentials Mini Nibs Raw Rabbit Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",2,[["vital-essentials-mini-nibs-raw-rabbit-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Vital Essentials Mini Patties Raw Chicken Entr\u00e9e Freeze-Dried Cat Food","cat","fd","as","s","",2,[["vital-essentials-mini-patties-raw-chicken-entree-freeze-dried-cat-food-8-oz-bag",8.0,0]],""],["Farmina N&D Ocean Cod & Pumpkin Mini Adult Dry Dog Food","dog","dry","as","s","",1,[["farmina-nd-ocean-cod--pumpkin-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4454179157.png"],["Farmina N&D Pumpkin Chicken & Pomegranate Mini Adult Dry Dog Food","dog","dry","as","s","",1,[["farmina-nd-pumpkin-chicken--pomegranate-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4593840242.png"],["Farmina N&D Quinoa Digestion Lamb Medium & Maxi Adult Dry Dog Food","dog","dry","as","m","dig",1,[["farmina-nd-quinoa-digestion-lamb-medium--maxi-adult-dry-dog-food-15-4-lb-bag",246.4,0]],"~4624249298.png"],["Farmina N&D Quinoa Digestion Lamb Wet Dog Food","dog","wet","as","","dig",1,[["farmina-nd-quinoa-digestion-lamb-wet-dog-food-10-oz-can",10.0,0]],"~4624373329.png"],["Farmina N&D Quinoa Skin & Coat Venison & Coconut Mini Adult Dry Dog Food","dog","dry","as","s","skin",1,[["farmina-nd-quinoa-skin--coat-venison--coconut-mini-adult-dry-dog-food-5-5-lb-bag",88.0,0]],"~4624254254.png"],["Farmina N&D Quinoa Weight Management Lamb Wet Dog Food","dog","wet","as","","wm",1,[["farmina-nd-quinoa-weight-management-lamb-wet-dog-food-10-oz-can",10.0,0]],"~4624389679.png"],["Rawz Air Dried \"Just for My Small Dog\" Lamb","dog","fd","as","s","",1,[["rawz-air-dried-just-for-my-small-dog-lamb-1-lb",16.0,0]],"~products/797115322/5474227253.png"],["Vital Essentials Mini Nibs Raw Rabbit Entr\u00e9e Freeze-Dried Cat Food","cat","fd","as","s","",1,[["vital-essentials-mini-nibs-raw-rabbit-entree-freeze-dried-cat-food-8-oz-bag",8.0,0]],""],["Vital Essentials Mini Patties Raw Turkey Entr\u00e9e Freeze-Dried Dog Food & Topper","dog","fd","as","s","",1,[["vital-essentials-mini-patties-raw-turkey-entree-freeze-dried-dog-food--topper-14-oz-bag",14.0,0]],""],["Wholesomes Large Breed Chicken Meal & Rice Adult Dry Dog Food","dog","dry","as","m","",1,[["wholesomes-large-breed-chicken-meal--rice-adult-dry-dog-food-40-lb",640.0,0]],""]];
  /* =================== end settings =================== */

  var CATALOG = DATA.map(function (r, i) {
    return { n: r[0], sp: r[1], f: r[2], st: r[3], sz: r[4], t: r[5], units: r[6], sizes: r[7], img: r[8] ? r[8].replace('~', IMG) : '', idx: i, b: r[0].split(' ')[0].toLowerCase() };
  });
  var UMAX = { dog: 1, cat: 1 };
  CATALOG.forEach(function (p) { if (p.units > UMAX[p.sp]) UMAX[p.sp] = p.units; });

  var CSS = [
    '#psfg{--t:#0e7c86;--td:#0a5f67;--tl:#34bcc7;--tbg:#eaf8f9;--pk:#e8559a;--pkbg:#fdeef5;--tx:#1d3238;--mu:#566a70;--ln:#d5e4e7;--bg:#f5f8f9;--gy:#4f6066;font-family:Arial,Helvetica,sans-serif;color:var(--tx);max-width:960px;margin:0 auto;padding:12px;line-height:1.45;font-size:16px;text-align:left}',
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
    '#psfg .pf-btn.back{background:var(--gy);border-color:var(--gy);color:#fff}',
    '#psfg .pf-btn.back:hover{background:#3a484d;border-color:#3a484d}',
    '#psfg .pf-btn.ghost{background:#fff;color:var(--t)}',
    '#psfg .pf-btn.ghost:hover{background:var(--tbg);color:var(--td)}',
    '#psfg .pf-btn.pink{background:var(--pk);border-color:var(--pk)}',
    '#psfg .pf-btn.pink:hover{background:#cf3f83;border-color:#cf3f83}',
    '#psfg .pf-btn.sm{padding:10px 16px;font-size:14px}',
    '#psfg .pf-btn[disabled]{opacity:.55;cursor:default}',
    '#psfg .pf-topback{display:flex;justify-content:flex-start;margin-bottom:16px}',
    '#psfg .pf-hero{background:var(--tbg);border:2px solid #a8dde2;border-radius:16px;padding:20px;text-align:center}',
    '#psfg .pf-hero .pf-k{font-size:52px;font-weight:900;color:var(--td);line-height:1.05}',
    '#psfg .pf-hero .pf-k span{font-size:20px;font-weight:800}',
    '#psfg .pf-hero .pf-k.txt{font-size:30px}',
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
    '#psfg .pf-conv,#psfg .pf-box{border:1px solid var(--ln);border-radius:14px;padding:16px;background:var(--bg)}',
    '#psfg .pf-seg{display:inline-flex;border:2px solid var(--t);border-radius:11px;overflow:hidden}',
    '#psfg .pf-seg button{padding:10px 14px;font-weight:700;font-size:14px;color:var(--t);background:#fff}',
    '#psfg .pf-seg button+button{border-left:2px solid var(--t)}',
    '#psfg .pf-seg button[aria-pressed="true"]{background:var(--t);color:#fff;text-decoration:underline;text-underline-offset:3px}',
    '#psfg .pf-out{margin-top:14px;font-size:16px}',
    '#psfg .pf-out strong{font-size:24px;color:var(--td)}',
    '#psfg .pf-ans{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin-top:10px}',
    '#psfg .pf-an{display:flex;justify-content:space-between;align-items:center;gap:8px;border:1px solid var(--ln);background:#fff;border-radius:10px;padding:8px 10px;font-size:14px}',
    '#psfg .pf-an span{color:var(--mu)}',
    '#psfg .pf-an b{color:var(--tx)}',
    '#psfg .pf-an button{color:var(--td);font-weight:800;text-decoration:underline;font-size:13px;white-space:nowrap}',
    '#psfg .pf-prods{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-top:12px}',
    '#psfg .pf-prod{border:1px solid var(--ln);border-radius:14px;padding:12px;background:#fff;display:flex;flex-direction:column;gap:8px}',
    '#psfg .pf-img{height:150px;background:#fff;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '#psfg .pf-img img{max-width:100%;max-height:150px;object-fit:contain}',
    '#psfg .pf-prod b{font-size:14px;line-height:1.35;color:var(--tx)}',
    '#psfg .pf-size{font-size:13px;color:var(--mu)}',
    '#psfg .pf-price{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap;min-height:22px}',
    '#psfg .pf-price strong{font-size:18px;color:var(--tx)}',
    '#psfg .pf-price span{font-size:13px;color:var(--mu);font-weight:700}',
    '#psfg .pf-chips{display:flex;flex-wrap:wrap;gap:5px}',
    '#psfg .pf-chip{font-size:12px;font-weight:700;padding:3px 8px;border-radius:20px;background:var(--tbg);color:var(--td);border:1px solid #b6e1e5}',
    '#psfg .pf-chip.pop{background:var(--pkbg);color:#a3265f;border-color:#f3b6d2}',
    '#psfg .pf-oos{font-size:13px;font-weight:700;color:#b3261e}',
    '#psfg .pf-prod .pf-btn{margin-top:auto}',
    '#psfg .pf-check{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:var(--mu);line-height:1.5;margin-top:12px}',
    '#psfg .pf-check input{all:revert;width:20px;height:20px;flex:0 0 20px;margin-top:1px;accent-color:#0e7c86}',
    '#psfg .pf-check a{color:var(--td)}',
    '#psfg .pf-status{margin-top:10px;font-weight:700;font-size:14px;min-height:20px}',
    '#psfg .pf-help{margin-top:26px;padding:18px;border-radius:14px;background:var(--bg);display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}',
    '#psfg .pf-help p{font-size:15px}',
    '#psfg .pf-help a{color:var(--td);font-weight:800}',
    '#psfg .pf-acts{display:flex;gap:10px;flex-wrap:wrap}',
    '#psfg .pf-disc{font-size:13px;color:var(--mu);text-align:center;margin-top:10px}',
    '#psfg .pf-fine{font-size:12px;color:var(--mu);margin-top:18px;line-height:1.55}',
    '#psfg .pf-fine a{color:var(--td)}',
    '#psfg .pf-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media(max-width:600px){#psfg{padding:4px}#psfg .pf-head{padding:18px 16px}#psfg .pf-head img{width:56px;height:56px;flex-basis:56px}#psfg .pf-head h2{font-size:21px}#psfg .pf-body,#psfg .pf-prog{padding-left:16px;padding-right:16px}#psfg .pf-stats{grid-template-columns:1fr}#psfg .pf-grid.two{grid-template-columns:1fr}#psfg .pf-hero .pf-k{font-size:44px}#psfg .pf-prods{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}#psfg .pf-img{height:120px}#psfg .pf-img img{max-height:120px}#psfg .pf-nav .pf-btn{flex:1}}'
  ].join('\n');

  var PAW = '<svg width="54" height="54" viewBox="0 0 64 64" aria-hidden="true"><g fill="#a8dde2"><ellipse cx="18" cy="24" rx="6" ry="8"/><ellipse cx="46" cy="24" rx="6" ry="8"/><ellipse cx="28" cy="14" rx="5.5" ry="7.5"/><ellipse cx="38" cy="14" rx="5.5" ry="7.5"/><path d="M32 30c-9 0-16 10-16 17 0 6 6 7 9 6 3-1 5-2 7-2s4 1 7 2c3 1 9 0 9-6 0-7-7-17-16-17z"/></g></svg>';

  var S, step, root, liveCache = {};
  var STEPS = ['pet', 'age', 'body', 'life', 'food', 'result'];
  var STEP_NAMES = { pet: 'Pet', age: 'Age', body: 'Weight & shape', life: 'Lifestyle & health', food: 'Food type' };

  function reset() {
    S = { sp: null, name: '', stage: null, size: null, lb: '', bcs: null, ideal: '', fixed: null, act: null, health: null, fmt: 'any', focus: 'none', meals: null, dens: '', unit: 'cup', phone: '', consent: false };
    step = 0;
  }

  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmtN(n) { return Math.round(n).toLocaleString('en-US'); }
  function r5(n) { return Math.round(n / 5) * 5; }
  function num(v) { var n = parseFloat(String(v).replace(',', '.')); return isFinite(n) ? n : NaN; }
  function pet() { return S.sp === 'cat' ? 'cat' : 'dog'; }
  function nm(cap) { if (S.name.trim()) return esc(S.name.trim()); return (cap ? 'Your ' : 'your ') + pet(); }
  function young() { return S.stage === 'p1' || S.stage === 'p2' || S.stage === 'k1' || S.stage === 'k2'; }
  function preg() { return S.stage === 'preg'; }
  function med() { return S.health === 'yes'; }

  function opt(k, v, title, desc, big) {
    var on = S[k] === v;
    return '<button type="button" class="pf-opt' + (big ? ' pf-big' : '') + '" data-k="' + k + '" data-v="' + v + '" aria-pressed="' + on + '"><span class="pf-ring"></span><b>' + title + '</b>' + (desc ? '<small>' + desc + '</small>' : '') + '<span class="pf-sr">' + (on ? 'Selected' : '') + '</span></button>';
  }

  /* ---------------- calorie math (AAHA / Pet Nutrition Alliance factors) ---------------- */
  function rer(lb) { return 70 * Math.pow(lb / 2.2046226218, 0.75); }

  function compute() {
    var lb = num(S.lb), dog = S.sp === 'dog', notes = [];
    var ideal = lb, mode = 'maintain', overrideIdeal = num(S.ideal);
    if (!young() && !preg()) {
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
      if (S.stage === 'k1') f = 3.0;
      else if (S.stage === 'k2') f = 2.5;
      else f = (S.fixed === 'no' ? 1.4 : 1.2) * (S.act === 'low' ? 0.9 : S.act === 'high' ? 1.15 : 1);
    }
    if (mode === 'lose') f = dog ? 1.0 : 0.8;
    var R = rer(ideal), daily = r5(R * f);
    var treats = r5(daily * 0.10), food = daily - treats;
    var idealTxt = (Math.round(ideal * 10) / 10).toString();

    if (young()) {
      notes.push('Growing ' + (dog ? 'puppies' : 'kittens') + ' need more calories as they grow. Re-weigh every 2 to 4 weeks and run this calculator again.');
      if (S.bcs === 'over' || S.bcs === 'heavy') notes.push('Please don\u2019t cut calories for a growing ' + (dog ? 'puppy' : 'kitten') + ' on your own. Ask your veterinarian if you\u2019re worried about their weight.');
      if (S.bcs === 'thin') notes.push('If your ' + (dog ? 'puppy' : 'kitten') + ' seems thin or isn\u2019t gaining, check in with your veterinarian.');
      if (dog && S.size === 'l') notes.push('Large and giant breed puppies should eat a food labeled for large-size dogs to support steady, healthy bone growth.');
    } else if (mode === 'lose') {
      notes.push('This is a weight-loss starting point based on an ideal weight of about ' + idealTxt + ' lb. Aim for slow, steady loss of about 1% of body weight per week.');
      notes.push('Please check with your veterinarian before starting a weight-loss plan.' + (dog ? '' : ' Cats should never be put on a crash diet or go without eating.'));
    } else if (mode === 'trim') {
      notes.push('To trim gently, this feeds for an ideal weight of about ' + idealTxt + ' lb instead of the current weight.');
    } else if (mode === 'gain') {
      notes.push('This feeds for an ideal weight of about ' + idealTxt + ' lb to help add weight gradually. If weight loss happened without a clear reason, see your veterinarian.');
    }
    if (dog && S.act === 'high' && !young()) notes.push('Working, sled or competition dogs can need far more than this. Stop in and we\u2019ll help you build a performance feeding plan.');
    notes.push('Every pet is different. Weigh every 2 to 4 weeks and adjust portions by about 10% if weight moves the wrong way.');
    return { daily: daily, low: r5(daily * 0.9), high: r5(daily * 1.1), food: food, treats: treats, ideal: ideal, mode: mode, f: f, rer: R, notes: notes };
  }

  function defaultMeals() {
    if (S.stage === 'p1' || S.stage === 'k1') return 4;
    if (S.stage === 'p2' || S.stage === 'k2' || preg()) return 3;
    return 2;
  }

  /* ---------------- product picks (relevance + best-seller boost) ---------------- */
  function dogSize() {
    if (S.sp !== 'dog') return '';
    if (S.stage === 'p1' || S.stage === 'p2') return S.size || 'm';
    var lb = num(S.lb);
    if (!preg()) lb = compute().ideal;
    return lb < 25 ? 's' : lb > 50 ? 'l' : 'm';
  }

  function score(p, c) {
    var growth = young() || preg(), sz = dogSize(), s = 0, why = [];
    var isP = p.st.indexOf('p') > -1;
    if (growth) {
      if (!isP) return null;
      if (p.st === 'p') { s += 60; why.push(preg() ? 'Growth formula' : S.sp === 'dog' ? 'Puppy formula' : 'Kitten formula'); }
      else { s += 45; why.push('All life stages'); }
    } else {
      if (p.st === 'p') return null;
      if (S.stage === 's') {
        if (p.st === 's') { s += 40; why.push('Senior formula'); }
        else why.push(p.st === 'pas' ? 'All life stages' : 'Adult formula');
      } else {
        if (p.st === 's') return null;
        why.push(p.st === 'pas' ? 'All life stages' : 'Adult formula');
      }
    }
    if (S.sp === 'dog') {
      if (p.sz === 's') { if (sz === 's') { s += 30; why.push('Small breed'); } else s -= 40; }
      if (p.sz === 'm') { if (sz === 's') s -= 20; else { s += 10; why.push('Medium & large breeds'); } }
      if (p.sz === 'l') { if (sz === 'l') { s += 35; why.push('Large breed puppy'); } else s -= (sz === 's' ? 40 : 10); }
      if (growth && sz === 'l' && p.sz !== 'l') s -= 25;
    }
    var lose = !growth && c && (c.mode === 'lose' || c.mode === 'trim');
    if (p.t.indexOf('wm') > -1) { if (lose) { s += 50; why.push('Weight management'); } else s -= 30; }
    if (p.t.indexOf('act') > -1 && c && (c.mode === 'gain' || S.act === 'high')) { s += 15; why.push('Meat-rich recipe'); }
    if (S.focus === 'dig' && p.t.indexOf('dig') > -1) { s += 40; why.push('Digestive support'); }
    if (S.focus === 'skin' && p.t.indexOf('skin') > -1) { s += 40; why.push('Skin & coat'); }
    if (S.fmt === 'dry' || S.fmt === 'wet' || S.fmt === 'fd') { if (p.f === S.fmt) s += 35; else s -= 15; }
    else if (S.fmt === 'any' && p.f === 'dry') s += 4;
    var pop = 30 * Math.log(1 + p.units) / Math.log(1 + UMAX[p.sp]);
    s += pop;
    why.push(p.f === 'dry' ? 'Dry food' : p.f === 'wet' ? 'Wet food' : 'Air-dried / freeze-dried');
    return { p: p, s: s, why: why, pop: pop >= 22 };
  }

  function picks() {
    var c = (preg() || med()) ? null : compute();
    var list = CATALOG.filter(function (p) { return p.sp === S.sp; }).map(function (p) { return score(p, c); }).filter(Boolean);
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

  /* choose the bag size that lasts about 4 to 8 weeks */
  function chooseSize(p) {
    var sz = p.sizes.filter(function (z) { return !z[2]; });
    if (!sz.length) sz = p.sizes;
    if (p.f === 'wet' || sz.length === 1) return sz[0];
    var kcal = preg() ? null : compute().food;
    if (!kcal || preg()) return sz[0];
    var kpo = p.f === 'dry' ? 102 : 135, best = sz[0], bestD = 1e9;
    sz.forEach(function (z) { if (!z[1]) return; var days = z[1] * kpo / kcal, d = Math.abs(Math.log(days / 45)); if (d < bestD) { bestD = d; best = z; } });
    return best;
  }

  function sizeLabel(p, z) {
    if (!z[1]) return '';
    var oz = z[1], pouch = /pouch/i.test(p.n);
    if (p.f === 'wet') return oz + ' oz ' + (pouch ? 'pouch' : 'can');
    if (oz >= 16) return (Math.round(oz / 16 * 10) / 10) + ' lb bag';
    return oz + ' oz bag';
  }

  /* live price + photo from the product page (same site) */
  function live(slug, cb) {
    if (liveCache[slug]) { if (liveCache[slug].done) cb(liveCache[slug]); else liveCache[slug].cbs.push(cb); return; }
    var entry = liveCache[slug] = { cbs: [cb], done: false };
    function finish(d) { entry.done = true; for (var k in d) entry[k] = d[k]; entry.cbs.forEach(function (f) { f(entry); }); entry.cbs = []; }
    if (!window.fetch || location.hostname.indexOf('pawstock') < 0) { finish({ ok: false }); return; }
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 9000);
    fetch(STORE + slug, { credentials: 'same-origin', signal: ctl ? ctl.signal : undefined }).then(function (r) {
      clearTimeout(timer);
      if (!r.ok) { finish({ ok: false, missing: r.status === 404 }); return null; }
      return r.text();
    }).then(function (h) {
      if (h == null) return;
      var price = null, img = null, m;
      m = h.match(/product:price:amount"\s+content="([0-9]+(?:\.[0-9]+)?)"/) || h.match(/content="([0-9]+(?:\.[0-9]+)?)"\s+property="product:price:amount"/) ||
        h.match(/itemprop="price"[^>]*content="([0-9]+(?:\.[0-9]+)?)"/) || h.match(/"price"\s*:\s*"?([0-9]+(?:\.[0-9]{1,2})?)"?/);
      if (m) price = parseFloat(m[1]);
      m = h.match(/property="og:image"\s+content="([^"]+)"/) || h.match(/content="([^"]+)"\s+property="og:image"/);
      if (m && /^https?:/.test(m[1])) img = m[1].replace(/&amp;/g, '&');
      var oos = /OutOfStock/.test(h) && !/InStock/.test(h);
      finish({ ok: true, price: price, img: img, oos: oos });
    }).catch(function () { clearTimeout(timer); finish({ ok: false }); });
  }

  function hydrateCards() {
    var cards = root.querySelectorAll('.pf-prod[data-slug]');
    Array.prototype.forEach.call(cards, function (card) {
      var slug = card.getAttribute('data-slug'), f = card.getAttribute('data-f'), oz = parseFloat(card.getAttribute('data-oz')) || 0, multi = card.getAttribute('data-multi') === '1';
      live(slug, function (d) {
        if (!card.isConnected) return;
        if (d.missing) {
          var a = card.querySelector('a.pf-btn'); if (a) a.href = STORE + 'search?keyword=' + encodeURIComponent(card.getAttribute('data-name'));
          return;
        }
        if (!d.ok) return;
        var box = card.querySelector('.pf-img');
        if (d.img && box && !box.querySelector('img')) box.innerHTML = '<img src="' + esc(d.img) + '" alt="' + esc(card.getAttribute('data-name')) + '" loading="lazy">';
        var pr = card.querySelector('.pf-price');
        if (pr && d.price) {
          var unit = '';
          if (oz && !multi) {
            if (f === 'dry' && oz >= 16) unit = '$' + (d.price / (oz / 16)).toFixed(2) + ' / lb';
            else unit = '$' + (d.price / oz).toFixed(2) + ' / oz';
          }
          pr.innerHTML = '<strong>$' + d.price.toFixed(2) + '</strong>' + (unit ? '<span>' + unit + '</span>' : '');
        }
        if (d.oos) { var o = card.querySelector('.pf-oos'); if (o) o.textContent = 'Out of stock online. Call ' + PHONE + ' and we\u2019ll set one aside.'; }
      });
    });
  }

  /* ---------------- steps ---------------- */
  function vPet() { return S.sp ? '' : 'Choose dog or cat to continue.'; }
  function vAge() { if (!S.stage) return 'Choose an age to continue.'; if (S.sp === 'dog' && (S.stage === 'p1' || S.stage === 'p2') && !S.size) return 'Choose your puppy\u2019s expected adult size.'; return ''; }
  function vBody() {
    var lb = num(S.lb);
    if (!(lb >= 0.5 && lb <= 250)) return 'Enter a weight between 0.5 and 250 pounds.';
    if (!preg() && !S.bcs) return 'Choose the body shape that fits best.';
    if (S.ideal.trim()) { var i = num(S.ideal); if (!(i >= 0.5 && i <= 250)) return 'Ideal weight should be between 0.5 and 250 pounds, or leave it blank.'; }
    return '';
  }
  function vLife() {
    if (!preg() && !S.fixed) return 'Let us know if ' + nm() + ' is spayed or neutered.';
    if (!young() && !preg() && !S.act) return 'Choose an activity level.';
    if (!S.health) return 'Let us know about any health conditions.';
    return '';
  }
  var VALID = { pet: vPet, age: vAge, body: vBody, life: vLife, food: function () { return ''; } };

  function sPet() {
    return '<p class="pf-q">Who are we feeding?</p><p class="pf-sub">Answer five quick questions and we\u2019ll recommend a daily calorie target and foods from our shelves.</p>' +
      '<div class="pf-grid two">' + opt('sp', 'dog', 'Dog', 'Puppies, adults and seniors', true) + opt('sp', 'cat', 'Cat', 'Kittens, adults and seniors', true) + '</div>' +
      '<label class="pf-label" for="pf-name">Pet\u2019s name (optional)</label><input id="pf-name" class="pf-input" data-in="name" type="text" maxlength="30" autocomplete="off" placeholder="e.g. Biscuit" value="' + esc(S.name) + '">';
  }
  function sAge() {
    var h = '<p class="pf-q">How old is ' + nm() + '?</p><p class="pf-sub">Age changes how many calories a pet needs.</p><div class="pf-grid">';
    if (S.sp === 'dog') {
      h += opt('stage', 'p1', 'Young puppy', 'Under 4 months') + opt('stage', 'p2', 'Puppy', '4 to 12 months') + opt('stage', 'a', 'Adult', '1 to 7 years') + opt('stage', 's', 'Senior', '7 years and up') + opt('stage', 'preg', 'Pregnant or nursing', 'Expecting or feeding a litter');
      h += '</div>';
      if (S.stage === 'p1' || S.stage === 'p2') {
        h += '<p class="pf-label">How big will your puppy be as an adult?</p><div class="pf-grid">' + opt('size', 's', 'Small', 'Under 25 lb') + opt('size', 'm', 'Medium', '25 to 50 lb') + opt('size', 'l', 'Large or giant', 'Over 50 lb') + '</div>';
      }
    } else {
      h += opt('stage', 'k1', 'Young kitten', 'Under 4 months') + opt('stage', 'k2', 'Kitten', '4 to 12 months') + opt('stage', 'a', 'Adult', '1 to 10 years') + opt('stage', 's', 'Senior', '11 years and up') + opt('stage', 'preg', 'Pregnant or nursing', 'Expecting or feeding a litter') + '</div>';
    }
    return h;
  }
  function sBody() {
    var y = young() || preg();
    var h = '<p class="pf-q">How much does ' + nm() + ' weigh?</p><p class="pf-sub">Use a recent weight from the vet or a home scale if you can.</p>' +
      '<div class="pf-inrow"><input class="pf-input" data-in="lb" type="text" inputmode="decimal" placeholder="Weight" aria-label="Weight in pounds" value="' + esc(S.lb) + '"><span class="pf-unit">lb</span></div>';
    if (!preg()) {
      h += '<p class="pf-label">Which body shape fits best?</p><div class="pf-grid">' +
        opt('bcs', 'thin', 'Too thin', 'Ribs, spine or hip bones are easy to see') +
        opt('bcs', 'ideal', 'Just right', 'Ribs easy to feel, visible waist from above') +
        opt('bcs', 'heavy', 'A little heavy', 'Ribs hard to feel, waist hard to see') +
        opt('bcs', 'over', 'Overweight', 'Can\u2019t feel ribs, belly rounds out or sags') + '</div>';
    }
    if (!y && S.bcs && S.bcs !== 'ideal') {
      h += '<label class="pf-label" for="pf-ideal">Know ' + (S.name.trim() ? esc(S.name.trim()) + '\u2019s' : 'your ' + pet() + '\u2019s') + ' ideal weight? (optional)</label><p class="pf-sub" style="margin-bottom:8px">If your vet gave you a target weight, enter it. Otherwise we\u2019ll estimate it.</p><div class="pf-inrow"><input id="pf-ideal" class="pf-input" data-in="ideal" type="text" inputmode="decimal" placeholder="Ideal weight" value="' + esc(S.ideal) + '"><span class="pf-unit">lb</span></div>';
    }
    return h;
  }
  function sLife() {
    var dog = S.sp === 'dog';
    var h = '<p class="pf-q">Tell us about ' + nm() + '\u2019s lifestyle and health</p><p class="pf-sub">These all change daily calorie needs.</p>';
    if (!preg()) h += '<p class="pf-label">Spayed or neutered?</p><div class="pf-grid two">' + opt('fixed', 'yes', 'Yes', '') + opt('fixed', 'no', 'No', '') + '</div>';
    if (!young() && !preg()) {
      h += '<p class="pf-label">Activity level</p><div class="pf-grid">';
      if (dog) h += opt('act', 'low', 'Couch potato', 'Short walks, lots of naps') + opt('act', 'normal', 'Average', 'Daily walks and playtime') + opt('act', 'high', 'Very active', 'Running, hiking, field or sport work');
      else h += opt('act', 'low', 'Mostly napping', 'Rarely plays') + opt('act', 'normal', 'Typical indoor cat', 'Plays most days') + opt('act', 'high', 'Very active', 'Plays hard or goes outdoors');
      h += '</div>';
    }
    h += '<p class="pf-label">Is ' + nm() + ' being treated by a veterinarian for a health condition?</p><p class="pf-sub" style="margin-bottom:8px">For example kidney, urinary, liver, diabetes, pancreatitis or food allergies.</p><div class="pf-grid two">' + opt('health', 'no', 'No', '') + opt('health', 'yes', 'Yes', '') + '</div>';
    return h;
  }
  function sFood() {
    var dog = S.sp === 'dog';
    var h = '<p class="pf-q">What would you like to feed?</p><p class="pf-sub">We\u2019ll use this to choose foods from our shelves.</p><div class="pf-grid">' +
      opt('fmt', 'dry', 'Dry food', 'Kibble') + opt('fmt', 'wet', 'Wet food', 'Cans, pouches, pate') +
      opt('fmt', 'fd', 'Air-dried / freeze-dried', 'Raw-style nutrition, shelf stable') +
      opt('fmt', 'mix', 'A mix of dry + wet', '') + opt('fmt', 'any', 'No preference', 'Show me the best fit') + '</div>';
    if (dog) {
      h += '<p class="pf-label">Anything special to focus on?</p><div class="pf-grid">' + opt('focus', 'none', 'Nothing special', '') + opt('focus', 'dig', 'Sensitive stomach', 'Digestive support') + opt('focus', 'skin', 'Skin & coat', 'Itchy skin, dull coat') + '</div>';
    }
    return h;
  }

  function stageText() {
    return { p1: 'Young puppy', p2: 'Puppy', k1: 'Young kitten', k2: 'Kitten', a: 'Adult', s: 'Senior', preg: 'Pregnant or nursing' }[S.stage] || '';
  }
  function answers() {
    var a = [['Pet', (S.sp === 'dog' ? 'Dog' : 'Cat') + (S.name.trim() ? ', ' + esc(S.name.trim()) : ''), 0],
      ['Age', stageText() + (S.size ? ', ' + { s: 'small', m: 'medium', l: 'large' }[S.size] + ' breed' : ''), 1],
      ['Weight', num(S.lb) + ' lb' + (S.bcs ? ', ' + { thin: 'too thin', ideal: 'just right', heavy: 'a little heavy', over: 'overweight' }[S.bcs] : ''), 2],
      ['Lifestyle', (preg() ? '' : (S.fixed === 'yes' ? 'Spayed/neutered' : 'Not spayed/neutered')) + (S.act ? ', ' + { low: 'low activity', normal: 'average activity', high: 'very active' }[S.act] : '') + (med() ? (preg() ? '' : ', ') + 'under vet care' : ''), 3],
      ['Food', { dry: 'Dry', wet: 'Wet', fd: 'Air-dried / freeze-dried', mix: 'Dry + wet', any: 'No preference' }[S.fmt] + (S.focus === 'dig' ? ', sensitive stomach' : S.focus === 'skin' ? ', skin & coat' : ''), 4]];
    return '<div class="pf-box"><b>Your answers</b><div class="pf-ans">' + a.map(function (x) { return '<div class="pf-an"><div><span>' + x[0] + ':</span> <b>' + x[1] + '</b></div><button type="button" data-act="goto" data-step="' + x[2] + '">Change</button></div>'; }).join('') + '</div></div>';
  }

  function productCards(ps) {
    var h = '<div class="pf-prods">';
    ps.forEach(function (x) {
      var p = x.p, z = chooseSize(p), lbl = sizeLabel(p, z);
      h += '<div class="pf-prod" data-slug="' + esc(z[0]) + '" data-f="' + p.f + '" data-oz="' + (z[1] || 0) + '" data-multi="' + (z[2] || 0) + '" data-name="' + esc(p.n) + '"><div class="pf-img">' + (p.img ? '<img src="' + esc(p.img) + '" alt="' + esc(p.n) + '" loading="lazy">' : PAW) + '</div><b>' + esc(p.n) + '</b>' +
        (lbl ? '<div class="pf-size">' + lbl + '</div>' : '') + '<div class="pf-price"></div><div class="pf-chips">' + (x.pop ? '<span class="pf-chip pop">Pawstock best seller</span>' : '') +
        x.why.map(function (w) { return '<span class="pf-chip">' + w + '</span>'; }).join('') + '</div><div class="pf-oos"></div>' +
        '<a class="pf-btn sm" href="' + esc(STORE + z[0]) + '">View at Pawstock</a></div>';
    });
    return h + '</div>';
  }

  function textBox() {
    var h = '<div class="pf-sec"><h3>Text me my plan</h3>';
    if (KLAVIYO_PUBLIC_KEY) {
      h += '<p class="pf-sub">We\u2019ll text your calorie target and food picks to your phone.</p><div class="pf-box"><div class="pf-inrow"><input class="pf-input" data-in="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="Mobile number" aria-label="Mobile number" value="' + esc(S.phone) + '"><button type="button" class="pf-btn pink" data-act="klaviyo">Text me my plan</button></div>' +
        '<label class="pf-check"><input type="checkbox" data-in="consent"' + (S.consent ? ' checked' : '') + '><span>By checking this box, I agree to receive recurring automated marketing text messages from Pawstock at the number provided, including my feeding plan, deals and reminders. Consent is not a condition of purchase. Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to unsubscribe or HELP for help. See our <a href="https://www.pawstock.pet/Termsofservice" target="_blank" rel="noopener">Terms</a> and <a href="https://www.pawstock.pet/Privacy" target="_blank" rel="noopener">Privacy Policy</a>.</span></label>' +
        '<p class="pf-status" id="pf-kstatus" aria-live="polite"></p><p class="pf-sub" style="margin:8px 0 0">Prefer not to sign up? <a href="' + smsHref() + '" style="color:var(--td);font-weight:800">Open the plan in my messages app</a></p></div>';
    } else {
      h += '<p class="pf-sub">Send this plan to yourself or your family from your phone.</p><div class="pf-acts"><a class="pf-btn pink" href="' + smsHref() + '">Text my plan</a><button type="button" class="pf-btn ghost" data-act="copy">Copy my plan</button></div>';
    }
    return h + '</div>';
  }

  function smsHref() { return 'sms:?&body=' + encodeURIComponent(summary(true)); }

  function convText(c) {
    var d = num(S.dens);
    if (!S.dens.trim()) return '<span style="color:var(--mu)">Enter the calories from the label to see the daily amount.</span>';
    if (!(d > 0 && d <= 2000)) return '<span style="color:#b3261e;font-weight:700">Enter a calorie amount between 1 and 2,000.</span>';
    var per = S.unit === 'cup' ? 'cup' : 'can';
    var day = c.food / d, meal = day / S.meals;
    function q(n) { return Math.round(n * 100) / 100; }
    return 'Feed about <strong>' + q(day) + ' ' + per + (q(day) === 1 ? '' : 's') + '</strong> per day, or <strong>' + q(meal) + '</strong> per meal across ' + S.meals + ' meal' + (S.meals === 1 ? '' : 's') + '.' + (S.unit === 'cup' ? '<br><span style="font-size:13px;color:var(--mu)">Use a standard 8 oz measuring cup, not a scoop or mug.</span>' : '');
  }

  function sResult() {
    var who = S.name.trim() ? esc(S.name.trim()) + '\u2019s' : 'Your ' + pet() + '\u2019s';
    var dog = S.sp === 'dog';
    var h = '<div class="pf-topback"><button type="button" class="pf-btn back sm" data-act="back">\u2190 Back</button></div>';
    var disc = '<p class="pf-disc">General feeding guidance for healthy pets. Not veterinary advice.</p>';

    if (med()) {
      h += '<div class="pf-hero"><p class="pf-ht">' + who + ' feeding plan</p><div class="pf-k txt">Please follow your veterinarian\u2019s plan</div><p>Health conditions change calorie and nutrient needs, so we don\u2019t calculate a number here.</p></div>' +
        '<div class="pf-notes"><p>Bring your vet\u2019s food recommendation to Pawstock and we\u2019ll help you find it, compare sizes, or special order what you need.</p><p>Never change a therapeutic or prescription diet without talking to your veterinarian first.</p></div>' + answers();
    } else if (preg()) {
      h += '<div class="pf-hero"><p class="pf-ht">' + who + ' feeding plan</p><div class="pf-k txt">Feed freely and often</div><p>Nursing can take 2 to 6 times normal resting calories, depending on litter size and how many weeks in she is.</p></div>' +
        '<div class="pf-notes"><p>Instead of one fixed number, most veterinarians recommend a growth (' + (dog ? 'puppy' : 'kitten') + ') or All Life Stages food, offered free-choice during the last third of pregnancy and all through nursing.</p><p>Fresh water at all times, and several small meals a day. Please work with your veterinarian on her plan, especially for large litters.</p></div>' + disc + answers();
      h += '<div class="pf-sec"><h3>Foods we recommend for ' + nm() + '</h3><p class="pf-sub">Growth and All Life Stages formulas from the Pawstock shelves.</p>' + productCards(picks()) + '</div>' + textBox();
    } else {
      var c = compute();
      if (!S.meals) S.meals = defaultMeals();
      h += '<div class="pf-hero"><p class="pf-ht">' + who + ' daily calorie target</p><div class="pf-k">' + fmtN(c.daily) + ' <span>kcal / day</span></div>' +
        '<p>Typical range ' + fmtN(c.low) + ' to ' + fmtN(c.high) + ' kcal. Start here and adjust based on weigh-ins.</p></div>' +
        '<div class="pf-stats"><div class="pf-stat"><strong>' + fmtN(c.food) + '</strong><span>kcal from meals</span></div>' +
        '<div class="pf-stat"><strong>' + fmtN(c.treats) + '</strong><span>kcal max for treats (10%)</span></div>' +
        '<div class="pf-stat"><strong>' + fmtN(c.food / S.meals) + '</strong><span>kcal per meal (' + S.meals + ' meals)</span></div></div>' +
        '<div class="pf-notes">' + c.notes.map(function (n) { return '<p>' + n + '</p>'; }).join('') + '</div>' + disc + '<div class="pf-sec">' + answers() + '</div>';
      h += '<div class="pf-sec"><h3>How much is that in cups or cans?</h3><p class="pf-sub">Find \u201cCalorie Content\u201d on the bag or can and enter the kcal per cup or per can.</p><div class="pf-conv">' +
        '<div class="pf-inrow"><input class="pf-input" data-in="dens" type="text" inputmode="decimal" placeholder="e.g. 400" aria-label="Calories per cup or can" value="' + esc(S.dens) + '" style="max-width:160px"><span class="pf-unit">kcal per</span>' +
        '<span class="pf-seg"><button type="button" data-k="unit" data-v="cup" aria-pressed="' + (S.unit === 'cup') + '">Cup</button><button type="button" data-k="unit" data-v="can" aria-pressed="' + (S.unit === 'can') + '">Can / pouch</button></span></div>' +
        '<p class="pf-label" style="margin-top:14px">Meals per day</p><span class="pf-seg">' + [1, 2, 3, 4].map(function (m) { return '<button type="button" data-k="meals" data-v="' + m + '" aria-pressed="' + (S.meals === m) + '">' + m + '</button>'; }).join('') + '</span>' +
        '<div class="pf-out" id="pf-out" aria-live="polite">' + convText(c) + '</div></div></div>';
      h += '<div class="pf-sec"><h3>Foods we recommend for ' + nm() + '</h3><p class="pf-sub">Picked from the Pawstock shelves based on your answers and what local pet parents buy most.' + (S.fmt === 'mix' ? ' If mixing, split the meal calories between the dry and wet food.' : '') + '</p>' + productCards(picks()) + '</div>' + textBox();
    }

    h += '<div class="pf-help"><p>Want a more personal recommendation? Our team is happy to help in store.<br>Call <a href="tel:' + PHONE.replace(/[^0-9]/g, '') + '">' + PHONE + '</a> or visit 665 S. Eastwood Dr., Woodstock.</p>' +
      '<div class="pf-acts">' + (KLAVIYO_PUBLIC_KEY ? '<button type="button" class="pf-btn sm ghost" data-act="copy">Copy my plan</button>' : '') + '<button type="button" class="pf-btn sm ghost" data-act="restart">Start over</button></div></div>' +
      '<p class="pf-fine" id="pf-copied" aria-live="polite"></p>' +
      '<p class="pf-fine">How we calculate: resting energy = 70 \u00d7 (ideal body weight in kg)<sup>0.75</sup>, multiplied by the standard life-stage and activity factors used in the AAHA nutrition guidelines and the Pet Nutrition Alliance energy table. This is a starting estimate for healthy pets, not a veterinary diagnosis or prescription. Pets with medical conditions, and pets that are pregnant or nursing, should have a feeding plan from their veterinarian. Always choose a food whose AAFCO nutritional adequacy statement matches your pet\u2019s life stage. Prices shown are current online prices and may change. <a href="https://www.aaha.org/resources/2021-aaha-nutrition-and-weight-management-guidelines/" target="_blank" rel="noopener">AAHA nutrition guidelines</a>.</p>';
    return h;
  }

  function summary(short) {
    var lines = ['Pawstock feeding plan' + (S.name.trim() ? ' for ' + S.name.trim() : '') + ' (' + pet() + ', ' + num(S.lb) + ' lb)'];
    if (med()) lines.push('Follow your veterinarian\u2019s feeding plan. We can help you find the food your vet recommends.');
    else if (preg()) lines.push('Free-choice growth or All Life Stages food during late pregnancy and nursing. Check with your vet.');
    else {
      var c = compute();
      lines.push(fmtN(c.daily) + ' kcal/day (meals ' + fmtN(c.food) + ', treats up to ' + fmtN(c.treats) + ')');
      var d = num(S.dens);
      if (d > 0) lines.push('Current food: about ' + (Math.round(c.food / d * 100) / 100) + ' ' + (S.unit === 'cup' ? 'cups' : 'cans') + ' per day');
    }
    if (!med()) {
      var ps = picks();
      lines.push('Our picks:');
      ps.slice(0, short ? 3 : 4).forEach(function (x) { lines.push('- ' + x.p.n + ' ' + STORE + chooseSize(x.p)[0]); });
    }
    lines.push('Questions? Pawstock ' + PHONE);
    return lines.join(String.fromCharCode(10));
  }

  /* ---------------- Klaviyo ---------------- */
  function e164(v) {
    var d = String(v).replace(/[^0-9]/g, '');
    if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
    return d.length === 10 ? '+1' + d : '';
  }
  function klaviyoSend() {
    var st = root.querySelector('#pf-kstatus'), btn = root.querySelector('[data-act="klaviyo"]');
    function say(t, bad) { if (st) { st.textContent = t; st.style.color = bad ? '#b3261e' : 'var(--td)'; } }
    var phone = e164(S.phone);
    if (!phone) { say('Enter a 10-digit US mobile number.', true); return; }
    if (!S.consent) { say('Please check the box to agree to receive texts.', true); return; }
    if (btn) btn.setAttribute('disabled', 'disabled');
    say('Sending...');
    var H = { 'Content-Type': 'application/vnd.api+json', 'revision': '2024-10-15' };
    var base = 'https://a.klaviyo.com/client/';
    var sub = { data: { type: 'subscription', attributes: { custom_source: 'Pawstock Feeding Calculator', profile: { data: { type: 'profile', attributes: { phone_number: phone, subscriptions: { sms: { marketing: { consent: 'SUBSCRIBED' } } } } } } } } };
    if (KLAVIYO_LIST_ID) sub.data.relationships = { list: { data: { type: 'list', id: KLAVIYO_LIST_ID } } };
    var ps = med() ? [] : picks();
    var c = (med() || preg()) ? null : compute();
    var props = {
      pet_name: S.name.trim() || ('your ' + pet()), species: pet(), life_stage: stageText(), weight_lb: num(S.lb),
      daily_kcal: c ? c.daily : null, meal_kcal: c ? c.food : null, treat_kcal: c ? c.treats : null,
      plan_type: med() ? 'vet' : preg() ? 'pregnant_nursing' : 'standard',
      plan_summary: summary(true),
      pick_1_name: ps[0] ? ps[0].p.n : '', pick_1_url: ps[0] ? STORE + chooseSize(ps[0].p)[0] : '',
      pick_2_name: ps[1] ? ps[1].p.n : '', pick_2_url: ps[1] ? STORE + chooseSize(ps[1].p)[0] : '',
      pick_3_name: ps[2] ? ps[2].p.n : '', pick_3_url: ps[2] ? STORE + chooseSize(ps[2].p)[0] : '',
      calculator_url: 'https://www.' + PAGE_URL
    };
    var ev = { data: { type: 'event', attributes: { properties: props, metric: { data: { type: 'metric', attributes: { name: KLAVIYO_EVENT } } }, profile: { data: { type: 'profile', attributes: { phone_number: phone } } } } } };
    fetch(base + 'subscriptions?company_id=' + encodeURIComponent(KLAVIYO_PUBLIC_KEY), { method: 'POST', headers: H, body: JSON.stringify(sub) })
      .then(function (r) { if (!r.ok) throw new Error('sub ' + r.status); return fetch(base + 'events?company_id=' + encodeURIComponent(KLAVIYO_PUBLIC_KEY), { method: 'POST', headers: H, body: JSON.stringify(ev) }); })
      .then(function (r) { if (!r.ok) throw new Error('event ' + r.status); say('Done! Watch for a text from Pawstock. If we ask you to confirm, just reply Y.'); })
      .catch(function (err) { if (window.console) console.error('Pawstock Klaviyo', err); if (btn) btn.removeAttribute('disabled'); say('Sorry, that didn\u2019t go through. Please try again or call us at ' + PHONE + '.', true); });
  }

  /* ---------------- render & events ---------------- */
  function render(scroll) {
    var key = STEPS[step], total = 5;
    var body = key === 'pet' ? sPet() : key === 'age' ? sAge() : key === 'body' ? sBody() : key === 'life' ? sLife() : key === 'food' ? sFood() : sResult();
    var prog = key === 'result' ? '' : '<div class="pf-prog"><div class="pf-prog-row"><span>Step ' + (step + 1) + ' of ' + total + ': ' + STEP_NAMES[key] + '</span><span>' + Math.round(step / total * 100) + '% done</span></div><div class="pf-bar"><span style="width:' + Math.max(6, step / total * 100) + '%"></span></div></div>';
    var nav = key === 'result' ? '' : '<p class="pf-err" id="pf-err" role="alert"></p><div class="pf-nav">' + (step > 0 ? '<button type="button" class="pf-btn back" data-act="back">\u2190 Back</button>' : '<span></span>') +
      '<button type="button" class="pf-btn" data-act="next">' + (key === 'food' ? 'See my results' : 'Next \u2192') + '</button></div>';
    root.innerHTML = '<div id="psfg"><div class="pf-card"><div class="pf-head"><img src="' + LOGO + '" alt="Pawstock"><div><h2>Pawstock Feeding Calculator</h2><p>Find the right daily calories and foods for your dog or cat.</p></div></div>' + prog + '<div class="pf-body">' + body + nav + '</div></div></div>';
    if (key === 'result') hydrateCards();
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
      else if (act === 'goto') { step = parseInt(t.getAttribute('data-step'), 10) || 0; render(true); }
      else if (act === 'restart') { reset(); render(true); }
      else if (act === 'copy') copyPlan();
      else if (act === 'klaviyo') klaviyoSend();
      return;
    }
    var k = t.getAttribute('data-k'), v = t.getAttribute('data-v');
    if (k === 'meals') v = parseInt(v, 10);
    if (k === 'sp' && S.sp !== v) { var keepName = S.name; reset(); S.name = keepName; }
    if (k === 'stage' && S.stage !== v) { S.size = null; S.meals = null; if (v === 'preg') { S.bcs = null; S.fixed = null; S.act = null; } }
    S[k] = v;
    var y = window.pageYOffset;
    render(false);
    window.scrollTo(window.pageXOffset, y);
  }

  function onInput(e) {
    var k = e.target.getAttribute && e.target.getAttribute('data-in');
    if (!k) return;
    S[k] = k === 'consent' ? e.target.checked : e.target.value;
    var err = root.querySelector('#pf-err'); if (err) err.textContent = '';
    if (k === 'dens') { var o = root.querySelector('#pf-out'); if (o) o.innerHTML = convText(compute()); }
  }

  function onKey(e) {
    if (e.key === 'Enter' && e.target.getAttribute && e.target.getAttribute('data-in') && STEPS[step] !== 'result') { e.preventDefault(); go(1); }
  }

  function copyPlan() {
    var txt = summary(false), out = root.querySelector('#pf-copied');
    function done(ok) { if (out) out.textContent = ok ? 'Plan copied. Paste it into a note or message.' : ''; }
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
      root.addEventListener('change', onInput);
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
    try { init(el); } catch (err) { el.innerHTML = '<p style="font-family:Arial,sans-serif;padding:20px;text-align:center">The feeding calculator could not load. Please call us at ' + PHONE + '.</p>'; if (window.console) console.error('Pawstock calculator', err); }
    return true;
  }
  if (window.__psfgLoaded) return;
  window.__psfgLoaded = true;
  boot();
  if (window.MutationObserver) new MutationObserver(function () { boot(); }).observe(document.documentElement, { childList: true, subtree: true });
  setInterval(boot, 1000);
})();
