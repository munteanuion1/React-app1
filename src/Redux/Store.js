import {commentsReducer} from "./comments-reducer";

const CHANGE_NEW_COMMENT_TEXT = "CHANGE-NEW-COMMENT-TEXT"

let store = {
	_state: {
		applications: [
			{
				id: 1,
				name: "Netflix",
				price: 0,
				category: "app",
				image: "netflix.webp",
				description: "Cauți cele mai populare seriale și filme din întreaga lume? Le găsești pe toate pe Netflix.\n" +
					"Avem seriale, filme, documentare și programe speciale de stand-up premiate.\n" +
					"Ce vei adora la Netflix:\n" +
					"• Adăugăm seriale și filme noi în permanență. Răsfoiește titlurile noi sau căută-le pe cele preferate și vizionează online direct pe dispozitivul tău.\n" +
					"• Cu cât vizionezi mai mult, cu atât mai bune vor fi recomandările de seriale și filme pe care le va face Netflix.\n" +
					"• Creează până la cinci profiluri pentru un cont. Profilurile permit mai multor membrii ai familiei tale să se bucure de Netflix în mod personalizat.\n" +
					"• Copiii se pot bucura de o experiență de vizionare sigură, cu titluri pentru întreaga familie.\n" +
					"• Vizionează secvențe din serialele și filmele noastre și primește notificări despre episoade sau lansări noi.\n" +
					"• Salvează-ți datele. Descarcă titluri pe dispozitivul tău mobil și vizionează offline, oriunde te-ai afla."
			},
			{
				id: 2,
				name: "Instagram",
				price: 0,
				category: "app",
				image: "instagram.webp",
				description: "Bringing you closer to the people and things you love. — Instagram from Facebook\n" +
					"\n" +
					"Connect with friends, share what you’re up to, or see what's new from others all over the world. Explore our community where you can feel free to be yourself and share everything from your daily moments to life's highlights.\n" +
					"\n" +
					"Express Yourself and Connect With Friends\n" +
					"\n" +
					"* Add photos and videos to your INSTA story that disappear after 24 hours, and bring them to life with fun creative tools.\n" +
					"* Message your friends in Direct. Start fun conversations about what you see on Feed and Stories.\n" +
					"* Post photos and videos to your feed that you want to show on your profile.\n" +
					"\n" +
					"Learn More About Your Interests\n" +
					"\n" +
					"* Check out IGTV for longer videos from your favorite INSTA creators.\n" +
					"* Get inspired by photos and videos from new INSTA accounts in Explore.\n" +
					"* Discover brands and small businesses, and shop products that are relevant to your personal style."
			},
			{
				id: 3,
				name: "Gmail",
				price: 0,
				category: "app",
				image: "gmail.webp",
				description: "Gmail is an easy to use email app that saves you time and keeps your messages safe. Get your messages instantly via push notifications, read and respond online & offline, and find any message quickly.\n" +
					"With the Gmail app you get:\n" +
					"• An organized inbox - Social and promotional messages are sorted into categories so you can read messages from friends and family first.\n" +
					"• Less spam - Gmail blocks spam before it hits your inbox to keep your account safe and clutter free.\n" +
					"• 15GB of free storage - You won’t need to delete messages to save space.\n" +
					"• Multiple account support - Use both Gmail and non-Gmail addresses (Outlook.com, Yahoo Mail, or any other IMAP/POP email) right from the app."
			},
			{
				id: 4,
				name: "Photoshop",
				price: 0,
				category: "app",
				image: "photoshop.webp",
				description: "PHOTO FUN FOR EVERYONE\n" +
					"Tap into your creativity on the go with Photoshop Express–a fun, fast, and easy picture editor for one-touch transformations and photo edits–used by millions of creative individuals. Make pro-looking images with an easy-to-use digital studio on your mobile device.\n" +
					"\n" +
					"Photoshop Express delivers a full spectrum of tools and effects at your fingertips. Personalize your experiences with sticker makers, enhance color gradients and imagery, create pic collages, generate memes, make quick fixes and heighten your share-worthy moments.\n" +
					"\n" +
					"PERSPECTIVE CORRECTION\n" +
					"Instantly fix crooked images and correct distorted camera angles.\n" +
					"\n" +
					"REMOVE NOISE\n" +
					"Smooth graininess, reduce color noise, and sharpen details to make your photos look their best.\n" +
					"\n" +
					"APPLY BLUR\n" +
					"Use radial blur to blend out backgrounds and shift focus to specific subjects or full blur to create movement.\n" +
					"\n" +
					"PERSONALIZE WITH STYLE\n" +
					"Customize images with the sticker maker, create memes and captions, style your text with a wide array of fonts and layouts, add borders and frames, and stamp creations with custom watermarks.\n" +
					"\n" +
					"CHOOSE FROM HUNDREDS OF LOOKS, EFFECTS AND FILTERS FOR PICTURES\n" +
					"Dehaze pictures to remove fog in a scene, apply dramatic filters for pictures, and easily slide to adjust color temperature, vibrance and other color effects.\n" +
					"\n" +
					"ASSEMBLE STUNNING PIC COLLAGES\n" +
					"Create professional-quality compilations by adding ready-to-use photo grid layouts and modifying borders and colors.\n" +
					"\n" +
					"SPOT HEALING\n" +
					"Easily reduce blemishes and spots from selfies and portraits.\n" +
					"\n" +
					"QUICK FIXES\n" +
					"Automatically adjust contrast, exposure and more with one-touch adjustments; easily crop, straighten, rotate for eye-catching layouts, and magically remove red-eye and pet-eye from your favorite moments.\n" +
					"\n" +
					"QUALITY PHOTO IMPORT AND SHARING\n" +
					"Upload images from multiple sources and formats (including raw and TIFF), posting your favorites directly to Facebook, Instagram, Twitter, Flickr and other social platforms or share them in email, WhatsApp, Facebook Messenger, Telegram, Signal, and Line to inspire others.\n" +
					"\n" +
					"Make photo magic happen with the Photoshop Express picture editor from Adobe - proud makers of the Photoshop family. Create fun, shareable memes, personalized pic collages and stickers.\n" +
					"\n" +
					"Adobe Terms of Use:\n" +
					"You must be 13 or older and agree to Adobe’s terms and privacy policy.\n" +
					"http://www.adobe.com/go/terms_linkfree\n" +
					"http://www.adobe.com/go/privacy_policy_linkfree\n" +
					"\n" +
					"Do not sell my information: https://www.adobe.com/privacy/ca-rights.html"
			},
			{id: 5, name: "Youtube", price: 0, category: "app", image: "youtube.webp", description: ""},
			{id: 6, name: "Discord", price: 0, category: "app", image: "discord.webp", description: ""}
		],
		games: [
			{id: 107, name: "Clash of Clans", price: 0, category: "game", image: "clashofclans.webp", description: ""},
			{id: 108, name: "PUBG", price: 0, category: "game", image: "PUBG.webp", description: ""},
			{id: 109, name: "Wild Rift", price: 0, category: "game", image: "WildRift.webp", description: ""},
			{id: 110, name: "Brawl", price: 0, category: "game", image: "Brawl.webp", description: ""},
			{id: 111, name: "Among US", price: 0, category: "game", image: "AmongUS.webp", description: ""}
		],
		Comments: {
			comments: [
				{id: 1001, text: "Super"},
				{id: 1002, text: "Klass"}
			],
			newCommentText: ""
		}
	},
	_callSubscriber() {
	},
	getState() {
		return this._state
	},
	subscribe(observer) { // pattern observer(se aseamana cu publisher-subscriber)
		this._callSubscriber = observer
	},
	dispatch(action) {
		this._state.Comments = commentsReducer(this._state.Comments, action)
		
		//if(action.type !== CHANGE_NEW_COMMENT_TEXT)
		this._callSubscriber(this.getState())
	}
}


 // crtl + alt + v

export default store

