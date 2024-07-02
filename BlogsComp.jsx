import React from "react";
import BlogCard from "./BlogCard";

const BlogsData = [
	{
		id: 1,
		image:
			"https://images.pexels.com/photos/11024977/pexels-photo-11024977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		name: '"Paradise on Earth" : Kashmir',

		description: [
			`Popularly referred to as the "Paradise on Earth," Kashmir is a breathtaking region in northwestern India. Historically part of the princely state of Jammu and Kashmir, Jammu & Kashmir was declared a Union Territory in 2019. The major cities in the Kashmir Valley include Srinagar, Gulmarg, Anantnag, and Baramulla. Nestled in the  Pir Panjal and Karakoram mountain ranges of the Himalayas, it is known for its scenic splendor, snow-capped mountains, plentiful wildlife, exquisite monuments, hospitable people, and handicrafts. `,
			`Kashmir is home to Asia's longest Cable Car - Gulmarg Gondola, an enchanting experience. The Shikara in the Dal Lake of Srinagar cannot be missed! The exquisite Mughal gardens like Nishat Bagh, Shalimar Bagh, and Chashm-E-Shahi are also must-visits. `,
			`Kashmir's trekking and hiking routes are spellbinding, dotted with the most beautiful mountain peaks, massive glaciers, verdant meadows, and tall pine trees. Some popular trekking routes are Kashmir Great Lakes Trek and Tarsar Marsar. While adventure sports like Skiing, golf, river rafting, paragliding, and camping make the trip to Kashmir more adventurous, Amarnath and Vaishno Devi attract many pilgrims yearly. `,
			`Kashmiri cuisine, or Wazwan, is famous all over the globe. So, in Kashmir, trying out the local dishes rich in unique fragrant spices is a must. Also, the Kashmiri shawls, Kashmiri apples, and dried fruits (almonds and walnuts) from the Lal Chowk Market are a must-buy. Be mindful of heavy snowfall affecting connectivity to some destinations in Kashmir during the winter months of December to February.`,
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/bgImages/KASHMIR.jpg",
			"https://media.holidify.com/images/cmsuploads/compressed/Untitleddesign12_20240401122022.png",
			"https://media.holidify.com/images/cmsuploads/compressed/Untitleddesign13_20240401165930.png",
			"https://media.holidify.com/images/cmsuploads/compressed/Untitleddesign14_20240401170853.png",
			"https://media.holidify.com/images/cmsuploads/compressed/1b59d6f8-7bf4-4dc2-9093-f0ee434c6424_20240401170242.png",
			"https://media.holidify.com/images/cmsuploads/compressed/Untitleddesign15_20240401171116.png",
			"https://www.holidify.com/images/cmsuploads/compressed/pexels-photo-6617744_20240108105710.jpeg",
			"https://www.holidify.com/images/cmsuploads/compressed/pexels-photo-6532472_20240108105939.jpeg",
			"https://www.holidify.com/images/cmsuploads/compressed/pexels-photo-6667914_20240108110406.jpeg",
			"https://www.holidify.com/images/cmsuploads/compressed/pexels-photo-6530747_20240108111017.jpeg",
			"https://www.holidify.com/images/cmsuploads/compressed/pexels-photo-10674726_20240108111148.jpeg",
		],
		mustKnow: [
			`Heavy snowfall affects the connectivity to some destinations in Kashmir during the winter months of December to February, plan your trip accordingly.`,
			`Communal tensions also lead to frequent curfews in some parts of the state; however, things have improved in the past few years. Yet, it's best to be cautious.`,
			`All postpaid SIM work until Bandipore. Prepaid sim card does not work in Kashmir due to security reasons.`,
			`If you plan to take a Gondola ride in Gulmarg, book the tickets at least one month in advance during peak season.`,
		],
		howToReach: [
			`By Air : Srinagar International Airport (SXR), also known as Sheikh-ul-Alam Airport, and Kushok Bakula Rimpochee Airport (IXL) in Leh are the major airports in Jammu and Kashmir state. The airport in Srinagar is connected with major cities in India including Delhi, Kolkata, Mumbai, and Bangalore. The airport in Leh has direct flights to and from Delhi, Mumbai, and Srinagar. Taxi rentals and private shuttles are available at both airports in Jammu and Kashmir.Furthermore, Jammu Aiport or Jammu Civil Enclave handles domestic flights from major urban centres in India.`,
			`By Train : Jammu Tawi, located in the state’s winter capital, is the busiest railway station in Jammu and Kashmir. It serves as the northern terminal of major trains connecting the city with the rest of India. Regular express trains from Jammu to Delhi, Mumbai, Kolkata, and Trivandrum run efficiently.The picturesque section between Banihal and Baramulla of Jammu–Baramulla railway line passes through several towns in Kashmir Valley. It is an excellent alternative for those wanting to take the tracks not often taken.`,
			`By Road : Jammu and Srinagar, seasonal capitals of the state can be reached throughout the year by road. Jammu is served by a network of state and national highways. If you’re wondering about how to reach Kashmir Valley by road, follow the NH1(A) that passes through the city of Jammu to Srinagar in Kashmir Valley. The highway continues to the east before terminating at Leh in Ladakh region. NH1 is a major and vital highway which handles the primary traffic coming in and out of the region. Government and private operators run buses and taxis between Jammu, Srinagar, and Leh.The Jawahar Tunnel, 2.8 kilometres in length, connects Jammu with Kashmir Valley. The 3,528-m-high mountain pass Zoji La carries the Srinagar-Leh highway extending into Ladakh. The 474-km-long Leh-Manali Highway is another major road with serving the Ladakh region. Both Srinagar-Leh and Leh-Manali highways remain vulnerable to weather conditions in winter as the snowfall blocks the road access.`,
		],
		placesToVisit: [
			{
				image: "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
				name: "Srinagar",
			},
			{
				image: "https://www.holidify.com/images/bgImages/GULMARG.jpg",
				name: "Gulmarg",
			},
			{
				image: "https://www.holidify.com/images/bgImages/SONAMARG.jpg",
				name: "Sonarmarg",
			},
			{
				image: "https://www.holidify.com/images/bgImages/PAHALGAM.jpg",
				name: "Pahalgam",
			},
			{
				image: "https://www.holidify.com/images/bgImages/PULWAMA.jpg",
				name: "Pulwama",
			},
			{
				image: "https://www.holidify.com/images/bgImages/SANASAR.jpg",
				name: "Sonasar",
			},
		],
	},
	{
		id: 2,
		image:
			"https://www.holidify.com/images/cmsuploads/compressed/attr_1448_20190212100722jpg",
		name: "Taj Mahal",
		description: [
			"The Taj Mahal, a symbol of eternal love and affection of a King for his queen, is a rare sight and experience for almost all visitors. Situated in the city of Agra, it stands formidably around 210 km toward south of Delhi. An acclaimed UNESCO World Heritage Site and one of the Seven Wonders of the World, the Taj pulls in both locals and global tourists from all walks of life and across the globe all year round.",
			"One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. Constructed entirely out of white marble in the 17th century, Taj Mahal is one of the most beautiful monuments in the world. Every year visitors numbering more than the entire population of Agra pass through the magnificent gates to catch a glimpse of this breathtaking monument!",
			"A UNESCO World Heritage Site, the Taj Mahal stands for the Crown of Palaces in the Persian language. The tomb is laid out in a rectangular shape and can be approached through a massive gateway which has an arch and alcoves on either side of it. There are water channels and fountains in the entrance which makes the monument even more spectacular. The reflection of this majestic spectacle in the Yamuna is almost poetic in its perfection!",
			"Covering an area of approximately 42 Acres, the construction of the Taj Mahal began in 1631 and it took 17 years before it was completed in 1648! It was constructed using white marble obtained from Makrana in Rajasthan.",
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/attr_wiki/compressed/attr_wiki_27.jpg",
			"https://www.holidify.com/images/attr_wiki/compressed/attr_wiki_29.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Taj_Mahal_28Edited29_20190510111052.jpeg",
			"https://www.holidify.com/images/compressed/3660.jpg",
			"https://www.holidify.com/images/attr_wiki/compressed/attr_wiki_11.jpg",
			"https://www.holidify.com/images/attr_wiki/compressed/attr_wiki_23.jpg",
		],
		mustKnow: [
			"Don't forget to retrieve your free bottle of water (500ml) and shoe covers which are included in the ticket price.",
			`You can store your luggage for free beside the ticket offices and also pick up an audio guide for INR 118.
Visitors are allowed to use free Wi-Fi internet service inside the compound for half an hour, and then they will be charged at INR 30 per hour after the half hour is complete.`,
			`Drone is prohibited inside and around Taj Mahal
Eating and smoking
Mobile phones to be kept on silent or switched off mode`,
		],
		howToReach: [
			`The quickest way to reach any destination and the Taj in Agra alike is by flight or air. Agra is well connected and has its own airport terminal – the Kheria Airport (AGR) - that is around 7 km east from heart of the city. Air India Flights connects the Agra's Kheria Airport (AGR) to Khajuraho (and flies onward to Varanasi City in Uttar Pradesh) thrice a week, and operates four weekly flights to Jaipur. Plans to upgrade the airport are underway. Moreover, the most-awaited ‘Taj International Airport’ will most likely now be constructed closer to Delhi than Agra, and hence, will have limited use. The cost of a taxi from the Airport to the main city will be around Rs. 300 approx.`,
			"There is a decent connectivity of trains with Agra with the rest of India. Besides the main railway station of Agra - Agra Cantonment - there are two other operational railway stations in Agra - the Agra Fort and Raja-ki-Mandi railway stations. The main trains that connects Agra with Delhi are The Rajdhani Express (12433), one of the fastest trains that will take you from New Delhi to Agra, U Abhatoofan Express (13007),The Habibganj Shatabdi Express (12002), The Taj Express (12280) and the famous Palace on Wheels soaked in royalty and luxury.",
			`NH2 highway connects Delhi to Agra (210 km). It takes around 4 to5 hours, and a bit more depending on the traffic you may have to navigate through to get to the Highway. The interstate is connected along the Mathura Road in Delhi; however, if you are travelling from South Delhi or New Delhi Airport, it would be less demanding to take the Aurobindo Marg along Mehrauli Road and then work your way to NH2 via Tughlaqabad. While the road is well-divided, do look out for trucks, bullock carts, autos and cycles heading in the wrong direction towards you.

From the Airport, it is advisable to hire an auto with a driver who is aware of the roads and the directions to your desired destination. However, be careful! If you need to get from Agra to the Airport terminal, make sure that you add a good share of time to your travel, as traffic conditions may add hours to your travel-time. Likewise, it is savvy to know who your driver is and if he is reliable or not. You may face a situation when the driver may take five hours to cover the distance that would have taken 2 hours otherwise, but you can't force him to drive any quicker, if the traffic is bad.

The most recent boon for tourists and locals driving from Delhi city to Agra is the accessibility of the new Yamuna Expressway that connects the Capital city to Agra via Noida. This is an extremely advanced six-lane expressway, also known as the Taj Expressway, which has become a boon to travelers. The usual 5-6 hour drive to Agra is cut down to just 2-3 hours if one uses this expressway to travel to Agra from Delhi.`,
		],
		placesToVisit: [
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/799px-Agra_FortAgra_India_20200702133907.jpg",
				name: "Agra Fort",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/6838307914_163ca5c0e1_o_20181218131558.jpg",
				name: "Taj Mahotsav",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1078858838_20200320164009.jpg",
				name: "Fatehpur Sikri",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/Tomb_of_Itmaduddaulah_20191104101412_20191104101509.jpg",
				name: "Itimad-ud-daulah's Tomb",
			},
		],
	},
	{
		id: 3,
		image: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
		name: `"India's Own Moonland" Leh Ladakh `,
		imagesOfThePlace: [
			"https://www.holidify.com/images/cmsuploads/compressed/zanskar-river-3859214_1920_20190304123111.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Karakoram-West_Tibetan_Plateau_alpine_steppe_20190402182622.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/22612041358_4a9fec35d2_b_20190403172758.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/8213533086_d60a422a89_z_20190304110547.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/13023849643_cc0f2429f4_z_20190304123011.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/38722698830_d046ee7316_b_20190206191913jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/9539446702_998a22abb0_z_20190304123041.jpg",
			"https://www.holidify.com/images/compressed/3007.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/4443.png",
			"https://www.holidify.com/images/cmsuploads/compressed/4318377018_a2224dee70_z_20190304123205.jpg",
		],
		description: [
			"Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.",
			"Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, Ladakh is a riot of intricate murals and red-robed monks. With a culture similar to the Tibetans, the people of Ladakh are friendly and welcoming to tourists.",
			`Ladakh is divided into two districts: district Leh and district Kargil. The former district has a famous town, "Leh", and is a great tourist attraction because of its beautiful monasteries nearby, Shanti Stupa, cafes and Leh Bazaar defining the place's culture.`,
			`Ladakh is an adventure playground for rafting and high-altitude trekking. Note that Leh Ladakh is inaccessible by road outside the summer months. The route passes close altogether from around October to May, and the only way to reach is by air. Chadar trek on frozen Zanskar river takes place in January to the end of February.`,
		],
		mustKnow: [
			"Leh Ladakh generally remains closed for more than 6 months from November to April or Mid-May due to heavy snowfall on the mountain passes. ",
			"Inner Line Permits are no longer required to travel the inner line areas of Ladakh from August 2021 for Indian Nationals. However, Permits for International Tourists. ",
			`Ladakh is a plastic-free union territor Carry sufficient cash as there are no ATMs outside of Leh and sometimes these ATMs won't be operational due to bad weather and power issues`,
		],
		howToReach: [
			`There are various ways of reaching Ladakh but the most comfortable of them all is taking a flight. Take a look and find out about how to reach Ladakh by flight?Several flights fly to Ladakh during the peak season and also during the offseason. However, it should be remembered that changes in flights are not unusual due to the unpredictable weather conditions during winters.The closest airport to Leh is the Kushok Bakula Rimpochee Airport. It operates flights to major cities like Delhi, Jammu, Srinagar, and Chandigarh. This airport, being a military air terminal, is very strict when it comes to security checks. Therefore, it would be best to take a printout of your e-ticket before entering, not doing so may result in your being denied entry into the airport. From the airport, however, you can avail taxis to reach your lodging or resort.`,
			"Some people also prefer to travel by train to Ladakh. If you are traveling by train, then the closest railway station is Jammu Tawi, located at a distance of almost 700 km from Ladakh. It is well-connected to the major cities in India like Delhi, Kolkata, and Mumbai. From Jammu, arrangements for traveling to Ladakh by a private vehicle can be made.",
			`This is one of the lesser-used routes to reach Leh. Traveling from Srinagar will require you to cover a distance of almost 434 km. Route: Srinagar – Sonmarg – Zozi La – Drass – Kargil – Mulbek – Lamayaru – Saspol – Leh Accommodation on Srinagar-Leh highway . Manali to Leh is the most preferred route by tourists, not only for its convenience but also for the amazing sightseeing opportunities it provides. The total distance covered by this route is almost 490 km. Along the way, you are treated to the spectacular beauty of the region. Route: Manali – Rohtang – Gramphu – Kokhsar – Keylong – Jispa – Darcha – Zingzingbar – Baralacha La – Bharatpur – Sarchu – Gata Loops – Nakee La – Lachulung La – Pang – Tanglang La – Gya –Upshi – Karu – Leh`,
		],
		placesToVisit: [
			{
				image:
					"https://www.holidify.com/images/compressed/attractions/attr_640.jpg",
				name: "Pangong Lake",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/800px-Khardung_La_Ladakh_20200521124208.jpg",
				name: "Khardung La",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/attr_662_20200618161315.jpg",
				name: "Magnetic Hill",
			},
			{
				image: "https://www.holidify.com/images/bgImages/HEMIS.jpg",
				name: "Hemis",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/attr_8108_20190306174446.jpg",
				name: "Zanskar Valley",
			},
			{
				image: "https://www.holidify.com/images/bgImages/NUBRA-VALLEY.jpg",
				name: "Nubra Valley",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/Shanti_Stupa,_Leh,_Ladakh_20180305180249.jpg",
				name: "Shanti Stupa",
			},
		],
	},
	{
		id: 4,
		image: "https://www.holidify.com/images/bgImages/SRINAGAR.jpg",
		name: `"The Paradise on Earth" : Srinagar`,
		description: [
			"Famously known as 'Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake. Adorned with tranquil Dal Lake & Nigeen Lake, Srinagar is the dream destination for honeymoon and family holidays.",
			"The tourists use Shikaras to see attractions like the Floating Vegetable Market and the Mir Bahris – a lively community of people who live on the lake itself. In addition, there are a lot of houseboats that provide a beautiful and unique stay experience on the lake. Srinagar is home to some of India's most exquisite Mughal-age gardens, with the top attractions being Nishat Bagh, Shalimar Bagh and Chashm-E-Shahi Garden. It is also home to Asia's largest tulip garden.",
			"Kashmiri cuisine or Wazwan is famous all over the globe. So when in Srinagar, trying out the local dishes, which are rich in unique fragrant spices, is a must. Srinagar is also famous for the Kashmiri shawls, Kashmiri apples, and dried fruits (almonds and walnuts) from the Lal Chowk Market.",
			"Heavy snowfall affects the connectivity of Srinagar during the winter months of December to February. Communal tensions also lead to frequent curfews in some parts of the city; however, things have improved in the past few years. So, make sure to check the situation before visiting.",
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/compressed/1815.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1817.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1818.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1819.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1820.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1822.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1823.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1824.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1825.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/1826.jpg?v=1.1",
		],
		mustKnow: [
			"Heavy snowfall affects the connectivity of Srinagar during the winter months of December to February.",
			"Communal tensions also lead to frequent curfews in some parts of the city; however, things have improved in the past few years.",
		],
		howToReach: [
			`The Srinagar International Airport is well connected to must major cities in and outside India.Nearest Airport: Srinagar International Airport (SXR)`,
			" The closest railway station to Srinagar is in Jammu Tawai. This is a main railhead for the region.",
			"Srinagar is connected by a network of roads to Chandigarh, Gulmarg, Jammu, Sonamarg, Delhi and Pahalgam.",
		],
		placesToVisit: [
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/800px-Dal_Lake_Kashmir_20200716133708.jpg",
				name: "Dal Lake",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_572712061_20191209172419.jpg",
				name: "Indira Gandhi Memorial Tulip Garden",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/1818_20200526123732.jpg",
				name: "Shankaracharya Temple",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/SideViewofShalimarBagh_20200525150742.jpg",
				name: "Shalimar Bagh Mughal Garden",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/attr_1489_20190302002827.jpg",
				name: "Stay in a Houseboat",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/5009_20210608175128.JPG",
				name: "Shikara Ride",
			},
		],
	},
	{
		id: 5,
		image:
			"https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
		name: "Andaman",
		description: [
			"Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India. Port Blair, the capital of this union territory, has a major airport and seaport connected with the rest of the country and with various tourist islands via multiple daily ferries. Havelock and Neil Islands are popular among tourists for their white sandy beaches and excellent diving options. ",
			"Andaman & Nicobar Islands comprises 572 islands, only 37 of which are inhabited, and a few are open to tourists. Havelock Island is one of the largest and the most popular islands of all Andaman & Nicobar Islands. Travellers typically enter from Port Blair via flight or ship and spend multiple nights in Havelock and Neil Islands that offer some great resorts.",
			"The southern coast of the Havelock island has the charming Radhanagar Beach, while the azure beauty of Vijayanagar Beach is situated towards the east of the island.  Perhaps the most endearing feature of Neil island is its three sandy beaches, namely Bharatpur Beach, Sitapur Beach and Lakshmanpur Beaches.",
			"Port Blair is generally used as a base city to catch ferries to nearby islands. However, tourists also spend a day or two here to explore the town and nearby beaches. People also take day trips to Ross Island and North Bay Island or Baratang and Jolly Buoy island from Port Blair.",
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/cmsuploads/compressed/15200591704_491338852a_z_20190315163300.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/800px-North_bay_island_andmans_12_20190416150118.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/30519582556_242d729acf_b_20190416151538.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Mangrove_on_andaman_20190416152728.jpg",
			"https://www.holidify.com/images/compressed/3617.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/3618.jpg?v=1.1",
			"https://www.holidify.com/images/cmsuploads/compressed/sita_20190315151253.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/4976286928_721865c146_z_20190315142954.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/5557573747_d382a3b218_z_20190315143145.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/3083605208_a2988fbe20_z_20190315143304.jpg",
		],
		mustKnow: [
			"Indian citizens do not require a passport and Restricted area permit for traveling to the Andaman & Nicobar Islands. ",
			"All foreign residents visiting the Andaman and Nicobar Islands must get a RAP (Restricted Area Permit). It is a 30-day permit issued to Non-Indians at the Port Blair Airport upon their arrival. Please note that none of the hotels in the Andaman Islands will offer accommodation to foreign citizens without a RAP. So, acquiring this permit is a compulsory formality.",
			"While debit and credit cards are accepted, due to poor internet connectivity it's advised to keep INR 10,000-15,000 in cash to avoid failed transactional situations. ",
			"Apart from BSNL, the Airtel network is now available in Port Blair and Andaman and at a few points in Neil Island. It will be difficult to get connectivity for any other cellular service.",
		],
		howToReach: [
			"There are no international flights to the Andamans, so you’re looking at a domestic flight into Port Blair from mainland-India cities such as Chennai, Hyderabad, Mumbai, Delhi or Bengaluru. It's also possible to reach the islands via the original route: by sea. A few ferries rattle across the Bay of Bengal to Port Blair from Chennai, Kolkata and Visakhapatnam, though timings are unreliable and distances long.",
			"No train services exists at this place",
			"No road services exists at this place",
		],
		placesToVisit: [
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg",
				name: "Cellular Jail",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/RadhanagarBeach_20190520152048_20190520152129.jpg",
				name: "Radhanagar Beach",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/shutterstock_365085719_20200116102256_20200116102320.png",
				name: "Elephant Beach",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/15545775398_8d0a338ca8_b_20190116170457.jpg",
				name: "Water Sports in Andamans",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/Chidiya_Tapu_20180306143133.jpg",
				name: "Chidiya Tapu",
			},
			{
				image: "https://www.holidify.com/images/bgImages/PORT-BLAIR.jpg",
				name: "Port Blair",
			},
			{
				image: "https://www.holidify.com/images/bgImages/NEIL-ISLAND.jpg",
				name: "Neil Island",
			},
			{
				image: "https://www.holidify.com/images/bgImages/HAVELOCK-ISLAND.jpg",
				name: "Havelock Island",
			},
		],
	},
	{
		id: 6,
		image: "https://www.holidify.com/images/bgImages/MANALI.jpg",
		name: `"Lover's Paradise - India's Honeymoon capital" : Manali`,
		description: [
			"Nestled in the Himalayan peaks of Himachal Pradesh, Manali is a picturesque town beloved by adventurers and peace-seekers alike. At an elevation of 2,050 meters, it offers diverse attractions from the ancient Hidimba Devi Temple with its exquisite wood carvings to thrilling outdoor activities in Solang Valley, such as skiing and paragliding. Rohtang Pass provides stunning mountain vistas and challenging routes for bikers. Manali serves as an ideal base for treks and showcases a rich cultural mix evident in its festivals and monastic sites, reflecting both Buddhist and Hindu influences.",
			"Over the last few years, Manali has evolved into a place loved by young people looking for more extended stays. With ambient cafes, good wifi availability, small eateries, and convenient shops, Old Manali is among the favorite neighborhood for such people. In addition, many homestays and hostels offer dorm beds for cheap for longer durations. ",
			"Apart from vacations and workations, Manali is a must-visit for trekkers, as it's an excellent base for exploring this side of the Himalayas. River Beas provides great rafting options in the nearby town of Kullu. Adjoining the Parvati river lies the Parvati Valley, with  Kasol, Manikaran, Tosh, and small villages attracting travelers for extended stays. Atal Tunnel allows travelers to reach Sissu within a few hours, making Spiti more accessible. ",
			"Tourists flock to Rohtang Pass & Solang valley for various adventure activities, including skiing, paragliding, horse-riding & zorbing. It snows the most in January & February, followed by December and March. If you're fortunate, you might find some snow in April.",
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/cmsuploads/compressed/15655691644_c0a92b03d7_z_20190305135005.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/mountain-3092438_960_720_20190313095203.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Manali_Himachal_Pradesh_20190313120733.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/My_Manali_20190313142828.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/manali-1941788_960_720_20190313162556.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Kullu-Manali_Scene_15_20190313180111.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/183128172_80e060c6cf_20190320132142.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Rohtang_pass_snowy_valley01_20190320140229.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/28022192021_b8e82eb874_b_20190320141704.jpg",
			"https://www.holidify.com/images/compressed/490.jpg?v=1.1",
			"https://www.holidify.com/images/cmsuploads/compressed/640px-Rafting_Tara_20190305144652.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/6103594064_86a392d5b5_b_20180813140617.jpg",
			"https://www.holidify.com/images/compressed/attractions/attr_8200.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/2705872430_b926ce177d_z_20190305132258.jpg",
			"https://www.holidify.com/images/compressed/attractions/attr_8213.jpg",
			"https://www.holidify.com/images/compressed/497.jpg?v=1.1",
			"https://www.holidify.com/images/compressed/attractions/attr_8211.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/attr_wiki_3779_20180905111222.jpg",
			"https://www.holidify.com/images/compressed/271.jpg?v=1.1",
			"https://www.holidify.com/images/cmsuploads/compressed/15919512439_15af7bdd6f_z_20190305133000.jpg",
			"https://www.holidify.com/images/compressed/4707.jpg",
			"https://www.holidify.com/images/compressed/attractions/attr_8236.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/384454482_888d22d0cd_z_20190305134044.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/35153573461_9b5eafb938_z_20190305134153.jpg",
			"https://www.holidify.com/images/compressed/8163.jpg",
			"https://www.holidify.com/images/compressed/494.jpg?v=1.1",
		],
		mustKnow: [
			"Due to unpredictable weather conditions, adventure sports like Paragliding are bound to get cancelled at the last moment, ensure to check cancellation charges and other details with notable operators. ",
			"Children below 12 years of age are not allowed to participate in adventure activities.Due to heavy snowfall, the Rohtang pass remains closed from November to April. ",
			"You'll need a permit to enter Sethan Valley, which is available at Hydro Project check post in Prini for INR 100.",
			"Tourists are advised to check the weather conditions during monsoons (June to August) as the region is susceptible to landslides.",
		],
		howToReach: [
			"The nearest domestic airport to Manali is Kullu-Manali Airport (KUU) in Bhuntar, which is located at a distance of 50 km from Manali. Regular flights connect the airport to Delhi and Chandigarh. You can book a cab or a taxi to go to Manali from the airport which should take about 2 hours to reach your destination.For tourists coming from other countries, the nearest international airport to Manali is Indira Gandhi International Airport (DEL) in Delhi. You can then opt for another flight from Delhi to Kullu-Manali Airport and reach Manali similarly.",
			"Manali does not have a railway station. To reach Manali by railways you have to get down at the nearest railway station to Manali which is Joginder Nagar Railway Station at a distance of 162.6 km from Manali.There is no direct rail connectivity of this station to major cities in India. You have to first take a train to Pathankot and then take another train from Pathankot to Joginder Nagar Railway Station. You can take a taxi from the railway station which will take around 4.5 to 5 hours for you to reach Manali.Also, there is an alternative if you are planning to come by train. Chandigarh Railway Station is at a distance of 315 km from Manali. You can take a train till Chandigarh Railway Station and then opt for a cab or a bus from there. It is a better option as there are a number of trains going to Chandigarh Railway Station connecting a number of major Indian cities such as Delhi, Jaipur, Indore, Kolkata, Madurai, Lucknow and many more. The journey from the station to Manali will take about 8 to 8.5 hours.",
			"Since Manali is a very popular hill station, the roads connecting to this place are very pleasant. It should be a beautiful journey if you are travelling by road with scenic views of the mountains and the river. You can opt to self drive or hire a taxi. Make sure the driver knows how to drive on hills as there are some sharp cuts en-route. Moreover, there are a number of state buses as well as private buses plying to Manali. Semi-sleeper Volvo buses are very common going to Manali and are easily available.",
		],
		placesToVisit: [
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/attr_1888_20190308172811.jpg",
				name: "Hidimba Temple",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/183128172_80e060c6cf_20190320132142.jpg",
				name: "Solang Valley",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/manu_20180226162059.jpg",
				name: "Manu Temple",
			},
			{
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/490_20190308180742.jpg",
				name: "Rohtang Pass",
			},
		],
	},
	{
		id: 7,
		image: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
		name: "Leh Ladakh",
		description: [
			"Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019. Extending from the Siachen Glacier to the main Great Himalayas, Ladakh is a land like no other. Dominated by dramatic landscapes, Ladakh is known as the world's coldest desert.",
			"Stunning Gompas (Tibetan Buddhist monasteries), fluttering prayer flags, whitewashed stupas, Ladakh is a riot of intricate murals and red-robed monks. With a culture similar to the Tibetans, the people of Ladakh are friendly and welcoming to tourists.",
			`Ladakh is divided into two districts: district Leh and district Kargil. The former district has a famous town, "Leh", and is a great tourist attraction because of its beautiful monasteries nearby, Shanti Stupa, cafes and Leh Bazaar defining the place's culture.`,
			`Ladakh is an adventure playground for rafting and high-altitude trekking. Note that Leh Ladakh is inaccessible by road outside the summer months. The route passes close altogether from around October to May, and the only way to reach is by air. Chadar trek on frozen Zanskar river takes place in January to the end of February.`,
		],
		imagesOfThePlace: [
			"https://www.holidify.com/images/cmsuploads/compressed/zanskar-river-3859214_1920_20190304123111.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/Karakoram-West_Tibetan_Plateau_alpine_steppe_20190402182622.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/22612041358_4a9fec35d2_b_20190403172758.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/8213533086_d60a422a89_z_20190304110547.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/13023849643_cc0f2429f4_z_20190304123011.jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/38722698830_d046ee7316_b_20190206191913jpg",
			"https://www.holidify.com/images/cmsuploads/compressed/9539446702_998a22abb0_z_20190304123041.jpg",
			"https://www.holidify.com/images/compressed/3007.jpg?v=1.1",
		],
		mustKnow: [
			"Leh Ladakh generally remains closed for more than 6 months from November to April or Mid-May due to heavy snowfall on the mountain passes. ",
			"Inner Line Permits are no longer required to travel the inner line areas of Ladakh from August 2021 for Indian Nationals. However, Permits are required for International Tourists. ",
			"Foreigners will still need to obtain a Protected Area Permit (PAP) or Restricted Area Permit (RAP). This permit has to be applied to the Deputy Commissioner’s Office in Leh, with the required fees . Vehicle Permit:There is no vehicle permit for Ladakh. However, a Rohtang Pass permit is required by all vehicles, including cars and bikes when you are traveling in the direction of Manali to Leh.",
		],
		howToReach: [
			"There are various ways of reaching Ladakh but the most comfortable of them all is taking a flight. Take a look and find out about how to reach Ladakh by flight? Several flights fly to Ladakh during the peak season and also during the offseason. However, it should be remembered that changes in flights are not unusual due to the unpredictable weather conditions during winters. The closest airport to Leh is the Kushok Bakula Rimpochee Airport. It operates flights to major cities like Delhi, Jammu, Srinagar, and Chandigarh. This airport, being a military air terminal, is very strict when it comes to security checks. Therefore, it would be best to take a printout of your e-ticket before entering, not doing so may result in your being denied entry into the airport. From the airport, however, you can avail taxis to reach your lodging or resort.",
			"Some people also prefer to travel by train to Ladakh. If you are traveling by train, then the closest railway station is Jammu Tawi, located at a distance of almost 700 km from Ladakh. It is well-connected to the major cities in India like Delhi, Kolkata, and Mumbai. From Jammu, arrangements for traveling to Ladakh by a private vehicle can be made.",
			"Ladakh is well-connected by road networks from the nearest major cities namely Srinagar and Manali. However, one can travel to Ladakh by road for only 6 months and the rest of the year the snowfall blocks the roads. Here is a better description of how to reach Ladakh by road. Route: Srinagar – Sonmarg – Zozi La – Drass – Kargil – Mulbek – Lamayaru – Saspol – Leh Accommodation on Srinagar-Leh highway . Route: Manali – Rohtang – Gramphu – Kokhsar – Keylong – Jispa – Darcha – Zingzingbar – Baralacha La – Bharatpur – Sarchu – Gata Loops – Nakee La – Lachulung La – Pang – Tanglang La – Gya –Upshi – Karu – Leh",
		],
		placesToVisit: [
			{
				name: "Pangong Lake",
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/2999_20190305160539.jpg",
			},
			{
				name: "Khardung La",
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/800px-Khardung_La_Ladakh_20200521124208.jpg",
			},
			{
				name: "Magnetic Hill",
				image:
					"https://www.holidify.com/images/compressed/attractions/attr_662.jpg",
			},
			{
				name: "Zanskar Valley",
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/attr_8108_20190306174446.jpg",
			},
			{
				name: "Nubra Valley",
				image: "https://www.holidify.com/images/bgImages/NUBRA-VALLEY.jpg",
			},
			{
				name: "Shanti Stupa",
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/Shanti_Stupa,_Leh,_Ladakh_20180305180249.jpg",
			},
			{
				name: "Kargil",
				image:
					"https://www.holidify.com/images/cmsuploads/compressed/Kargil_Town_Panorama_20190402180629.jpg",
			},
			
		],
	},
];

const BlogsComp = () => {
	return (
		<>
			<div className=" py-4 md:py-10">
				<section data-aos="fade-up" className="container ">
					<h1 className="  py-2 pl-2 text-xl md:text-3xl font-bold">
						Popular places to visit
					</h1>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
						{BlogsData.map((item) => (
							<BlogCard key={item.id} {...item} />
						))}
					</div>
				</section>
			</div>
		</>
	);
};

export default BlogsComp;
